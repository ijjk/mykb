const errors = require('@feathersjs/errors'); 
const gitP = require('simple-git/promise'); 
const fs = require('fs-extra'); 
const path = require('path');
const loadDocs = require('./loadDocs'); 
const comparableFields = [ 'name', 'dir' ];
let git; 

class Service {
  constructor (options) {
    this.options = options || {};
    this.docsDir = this.options.docsDir; 
    this.$limit = this.options.paginate.default;
    this.useGit = this.options.useGit;  
    this.maxDocSize = 1024 * 100; // 100 kb (don't try sending if bigger)
    this.docs = {}; 
    this.updTimeouts = {}; 
    loadDocs.bind(this)(); 

    if(this.useGit) {
      git = gitP(this.docsDir); 
      fs.stat(path.join(this.docsDir, '.git'), async err => {
        if(err && err.code === 'ENOENT') {
          git.init().then(() => {
            if(this.numInitDocs === 0) return; 
            git.add('./*').then(() => git.commit('initial commit')); 
          }); 
        }
      }); 
    }
  }

  async getMd (id) {
    const doc = this.docs[id]; 
    if(doc.md) return doc.md; 
    const docPath = path.join(this.docsDir, doc.dir, doc.name); 
    const { size } = await fs.stat(docPath); 
    if(size > this.maxDocSize) return 'Document is too big to display...'; 
    const buff = await fs.readFile(docPath); 
    return buff.toString(); 
  }

  async isMatch (id, $search) {
    const doc = this.docs[id]; 
    const name = doc.name.toLowerCase(); 

    if(name.indexOf($search) > -1) return true; 
    const dir = doc.dir.toLowerCase(); 
    
    if(dir.indexOf($search) > -1) return true; 
    const relPath = dir + (dir.length > 0 ? '/' : '') + name; 
    
    if(relPath.toLowerCase().indexOf($search) > -1) return true; 
    let md = await this.getMd(id);
    md = md.toLowerCase(); 

    if(md.indexOf($search) > -1) return true; 
    return false; 
  }

  async checkRmDir (dir) {
    if(dir === '') return; 
    const parts = dir.split('/'); 
    const n = parts.length; 
    for(let i = 0; i < n; i++) {
      const dir = parts.filter((p, pIdx) => pIdx < (n - i)).join('/'); 
      const docsInDir = await this.find({ query: { dir } }); 
      if(docsInDir.total === 0) {
        try {
          await fs.rmdir(path.join(this.docsDir, dir)); 
        } catch(err) { return; }
      } else return; 
    }
  }

  async find (params) {
    const { query } = params; 
    let { $limit, $skip, $search, $select, $sort } = query;
    if($skip < 0) $skip = 0; 
    $limit = $limit || this.$limit;
    if($search) {
      $search = $search.toLowerCase().trim(); 
    }
    let ids = Object.keys(this.docs); 
    const data = []; 
    const toComp = comparableFields.filter(f => typeof query[f] !== 'undefined'); 
    if(toComp.length > 0) {
      ids = ids.filter(id => {
        const doc = this.docs[id]; 
        return !toComp.some(f => doc[f] !== query[f]); 
      }); 
    }
    if($search) {
      ids = await Promise.all(
        ids.map(async id => await this.isMatch(id, $search) ? id : null)
      );
      ids = ids.filter(Boolean);  
    }
    if(ids.length === 0) return { total: 0, data };
    if($sort) {
      const sortKey = Object.keys($sort).pop(); 
      const ascDesc = $sort[sortKey]; 
      if(this.docs[ids[0]][sortKey] || sortKey === 'dirName') { // make sure valid key
        ids.sort((a, b) => {
          let val1, val2, parseVals; 
          const docA = this.docs[a],
            docB = this.docs[b];
          if(sortKey === 'dirName') {
            parseVals = doc => path.join(doc.dir, doc.name); 
          }
          else {
            parseVals = doc => doc[sortKey]; 
          }
          [val1, val2] = [docA, docB].map(parseVals); 
          let c = 0; 
          if(val1 < val2) c = -1; 
          else if(val1 > val2) c = 1;
          return c * ascDesc; 
        }); 
      }
    }
    for(let i = $skip || 0; i < ids.length && data.length < $limit; i++) {
      const id = ids[i];
      let doc = $select && !$select.md ? this.docs[id] : this.get(id);
      if($select) {
        let _doc = {};
        $select.forEach(k => _doc[k] = doc[k]); 
        doc = _doc; 
      }
      data.push(doc); 
    }
    return { total: ids.length, data }; 
  }

  async get (id, params) { // eslint-disable-line no-unused-vars
    const doc = this.docs[id]; 
    if(!doc) throw new errors.NotFound(`No record found for id '${id}'`);
    if(!doc.md) doc.md = await this.getMd(id); 
    return this.docs[id]; 
  }

  async create (data, params) { // eslint-disable-line no-unused-vars
    if(Array.isArray(data)) {
      return await Promise.all(data.map(current => this.create(current)));
    }
    const { name, dir, md } = data; 
    try {
      const rPath = path.join(dir, name); 
      const docPath = path.join(this.docsDir, rPath); 
      await fs.outputFile(docPath, md); 
      
      if(this.useGit) {
        git.add(rPath).then(() => git.commit(`added doc ${rPath}`)); 
      }
      const ts = new Date().toJSON(); 
      return this.setDoc(path.join(dir, name), ts, md, ts); 
    }
    catch (err) {
      throw new errors.GeneralError('could not create doc'); 
    }
  }

  async update (id, data, params) { // eslint-disable-line no-unused-vars
    throw new errors.MethodNotAllowed('can not update on docs service');
  }

  async patch (id, data, params) { // eslint-disable-line no-unused-vars
    const doc = this.docs[id]; 
    if(!doc) throw new errors.NotFound(`No record found for id '${id}'`); 
    let { name, dir, md } = data;
    let diffDir = Boolean(doc.dir !== dir);  
    if(!name) name = doc.name; 
    if(typeof dir !== 'string') {
      dir = doc.dir; 
      diffDir = false; 
    }
    const rPath = path.join(dir, name); 
    const docPath = path.join(this.docsDir, rPath); 
    if(name !== doc.name || diffDir) {
      const oldRPath = path.join(doc.dir, doc.name); 
      const oldPath = path.join(this.docsDir, oldRPath); 
      await fs.ensureDir(path.join(this.docsDir, dir)); 
      await fs.move(oldPath, docPath); 
      
      if(this.useGit) {
        git.rm(oldRPath)
          .then(() => git.add(rPath))
          .then(() => git.commit(`renamed doc ${oldRPath} ${rPath}`)); 
      }
      id = this.getId(path.join(dir, name)); 
      this.docs[id] = Object.assign({}, doc, { id, name, dir }); 
      delete this.docs[doc.id]; 
      if(diffDir) this.checkRmDir(doc.dir); 
    }
    if(md) {
      await fs.writeFile(docPath, md); 
      if(this.useGit) {
        git.add(rPath).then(() => git.commit(`updated doc ${rPath}`)); 
      }
      this.docs[id].md = md; 
    }
    return this.docs[id];
  }

  async remove (id, params) { // eslint-disable-line no-unused-vars
    const doc = this.docs[id]; 
    if(!id) throw new errors.NotFound(`No record found for id '${id}'`); 
    const rPath = path.join(doc.dir, doc.name); 
    const docPath = path.join(this.docsDir, rPath); 
    await fs.unlink(docPath); 
    
    if(this.useGit) {
      git.rm(rPath).then(() => git.commit(`removed doc ${rPath}`)); 
    }
    delete this.docs[id]; 
    this.checkRmDir(doc.dir); 
    return doc; 
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;