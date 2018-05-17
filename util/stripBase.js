const basePath = require('./basePath'); 

module.exports = url => {
  if(basePath !== '/') {
    url = url.split(basePath).join(''); 
  }
  return url; 
};