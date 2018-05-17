const { authenticate } = require('@feathersjs/authentication').hooks;
const { checkDir, checkName } = require('../../../util/checkDirParts');
const { disable, invalid, adminOnly } = require('../hooksUtil'); 
const getUrl = require('../../../util/getUrl'); 
const nameIsValid = name => {
  name = checkName(name); 
  if(!name) return invalid('name'); 
  if(name.substr(name.length - 3).toLowerCase() !== '.md') {
    name += '.md'; 
  }
  return name; 
};
const dirIsValid = dir => {
  dir = checkDir(dir); 
  if(!dir && dir !== 0) return invalid('dir');
  else if(dir === 0) return '';  
  return dir; 
};
const mdIsValid = md => {
  if(typeof md !== 'string' || md.trim().length === 0) {
    return invalid('md'); 
  }
  return md; 
};
const pathTaken = async (name, dir, app) => {
  const matches = await app.service(getUrl('docs')).find({ query: { name, dir } }); 
  if(matches.total > 0) {
    return invalid(null, 'filename is taken'); 
  }
};
module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [ async ctx => {
      const { app, data } = ctx; 
      let { name, dir, md } = data; 
      const k = {}; 
      k.name = nameIsValid(name); 
      k.dir = dirIsValid(dir); 
      k.md = mdIsValid(md); 
      await pathTaken(k.name, k.dir, app); 
      ctx.data = k;  
      return ctx; 
    }],
    update: [ disable ],
    patch: [ async ctx => {
      const { data, app } = ctx; 
      const { name, dir, md } = data; 
      const k = {}; 
      if(name) k.name = nameIsValid(name); 
      if(typeof dir === 'string') k.dir = dirIsValid(dir); // allow empty string
      if(name || typeof dir === 'string') {
        let checkName, checkDir;
        if(!name || typeof dir !== 'string') {
          const doc = await app.service(getUrl('docs')).get(ctx.id);
          if(!name) checkName = doc.name; 
          if(typeof dir !== 'string') checkDir = doc.dir; 
        }
        await pathTaken(k.name || checkName, 
          typeof k.dir === 'string' ? k.dir : checkDir, app); 
      }
      if(md) k.md = mdIsValid(md); 
      if(Object.keys(k).length === 0) invalid(null, 'nothing to update');
      ctx.data = k; 
      return ctx; 
    }],
    remove: [ adminOnly ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
