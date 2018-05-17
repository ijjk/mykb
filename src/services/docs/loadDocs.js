const chokidar = require('chokidar'); 
const fs = require('fs-extra'); 
const path = require('path'); 
const glob = require('glob'); 
const crypto = require('crypto'); 

async function loadDocs() {
  const { docsDir, cacheSize } = this.options; 
  this.numInitDocs = glob.sync(path.join(docsDir, '**/*.md')).length; 
  this.cached = 0;
  this.loaded = false; 

  const getId = relPath => (crypto.createHash('sha1')
    .update(relPath).digest().toString('base64')
    .substr(0, 16).split('/').join('_')
  ); 
  this.getId = getId; 
  
  const setDoc = (relPath, created, md, updated) => {
    const id = getId(relPath); 
    let dir = relPath.split('/');  
    const name = dir.pop(); 
    dir = dir.join('/'); 
    const doc = {
      id, name, dir, created, md, updated
    };
    this.docs[id] = doc; 
    return doc; 
  };
  this.setDoc = setDoc; 

  const watcher = chokidar.watch(path.join(docsDir, '/**/*.md'), { persistent: true });
  const relPath = path => {
    path = path.split(docsDir).pop(); 
    if(path.substr(0, 1) === '/') path = path.substr(1); 
    return path; 
  }; 
  const handleDoc = async (path, stats) => {
    const rPath = relPath(path);
    if(!stats) stats = await fs.stat(path); 
    else { // stats was set so it's a change event
      const changedDoc = this.docs[getId(rPath)];
      if(changedDoc && changedDoc.md) this.cached -= changedDoc.md.length;
    }
    const { birthtime, size, mtime } = stats; 
    let md = null;
    if(size < this.maxDocSize && (this.cached + size) < cacheSize) {
      md = await fs.readFile(path);
      md = md.toString();
      this.cached += md.length;
    }
    setDoc(rPath, birthtime, md, mtime);
  };
  watcher.on('add', handleDoc); // file added
  watcher.on('change', handleDoc); // file changed (rename triggers unlink then add)
  watcher.on('unlink', path => { // file removed
    const id = getId(relPath(path));
    if(this.docs[id] && this.docs[id].md) {
      this.cached -= this.docs[id].md.length;
    }
    delete this.docs[id];
  });
}
module.exports = loadDocs;