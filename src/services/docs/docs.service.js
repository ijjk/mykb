// Initializes the `docs` service on path `/docs`
const createService = require('./docs.class.js');
const hooks = require('./docs.hooks');
const getUrl = require('../../../util/getUrl');

module.exports = function (app) {
  
  const paginate = app.get('paginate');
  const docsDir = app.get('docsDir');
  const cacheSize = app.get('cacheSize');  
  const useGit = app.get('useGit'); 

  const options = {
    name: 'docs',
    paginate,
    docsDir,
    cacheSize,
    useGit
  };
  const url = getUrl('docs'); 

  // Initialize our service with any options it requires
  app.use(url, createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service(url);

  service.hooks(hooks);
};