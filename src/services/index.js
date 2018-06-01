const users = require('./users/users.service.js')
const docs = require('./docs/docs.service.js')
module.exports = function(app) {
  app.configure(users)
  app.configure(docs)
}
