// Initializes the `users` service on path `/users`
const createService = require('feathers-nedb')
const createModel = require('../../models/users.model')
const hooks = require('./users.hooks')
const getUrl = require('../../../util/getUrl')

module.exports = function(app) {
  const Model = createModel(app)
  const paginate = app.get('paginate')

  const options = {
    name: 'users',
    Model,
    paginate,
  }
  const url = getUrl('users')

  // Initialize our service with any options it requires
  app.use(url, createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service(url)

  service.hooks(hooks)
}
