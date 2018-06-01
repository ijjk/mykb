// eslint-disable-next-line no-unused-vars
module.exports = function(app) {
  // Add your custom middleware here. Remember, that
  // in Express the order matters

  // add req.ip to feathers
  app.use((req, res, next) => {
    req.feathers.ip = req.ip
    next()
  })
}
