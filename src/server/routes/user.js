const bcrypt = require('bcrypt')
const rateLimit = require('express-rate-limit')
const { aOk, userError, serverError } = require('../util/responses')
/**
 * allows updating user
 */
module.exports = function auth(app) {
  const { passport, users } = app

  if (!app.config.dev) {
    const authLimiter = rateLimit({
      windowMs: 5 * 60 * 1000, // 5 minutes
      max: 10, // limit each IP to 10 requests per windowMs
    })
    app.use('/user', authLimiter)
  }

  app.patch('/user', (req, res) => {
    passport.authenticate('local', {}, (err, user, info) => {
      if (err || !user) {
        return userError(res, 'Invalid login')
      }

      const { id } = user
      let { newPassword } = req.body
      if (!newPassword) {
        return userError(res, 'newPassword is required')
      }

      newPassword = bcrypt.hash(newPassword, 10).then(hash => {
        users
          .setData({
            ...users.data,
            [id]: {
              ...users.data[id],
              password: hash,
            },
          })
          .then(() => aOk(res))
          .catch(err => serverError(res, err))
      })
    })(req, res)
  })
}
