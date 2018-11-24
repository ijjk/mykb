const rateLimit = require('express-rate-limit')
const handleLogin = require('../util/handleLogin')
const { userError } = require('../util/responses')
/**
 * sets up auth endpoint
 */
module.exports = function auth(app) {
  const { passport } = app

  if (!app.config.dev) {
    const authLimiter = rateLimit({
      windowMs: 2 * 60 * 1000, // 2 minutes
      max: 10, // limit each IP to 10 requests per windowMs
    })
    app.use('/auth', authLimiter)
  }

  app.post('/auth', (req, res) => {
    // allow checking JWT with Authorization header
    if (req.get('authorization')) {
      return res
        .status(req.user ? 200 : 400)
        .json({ status: req.user ? 'ok' : 'error' })
    }

    passport.authenticate('local', {}, (err, user, info) => {
      if (err || !user) {
        return userError(res, 'Invalid login')
      }
      handleLogin(req, res, user, app)
    })(req, res)
  })
}
