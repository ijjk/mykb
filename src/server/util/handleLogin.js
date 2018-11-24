const jwt = require('jsonwebtoken')
const addBase = require('../../util/addBase')

module.exports = function(req, res, user, app) {
  req.login(user, {}, err => {
    if (err) {
      return res.send(err)
    }

    const curUser = Object.keys(user).reduce((obj, key) => {
      if (key !== 'password') obj[key] = user[key]
      return obj
    }, {})

    const token = jwt.sign({ user: curUser }, app.config.secret, app.config.jwt)

    res.cookie('jwt', token, {
      expires: new Date(Date.now() + 3600 * 24 * 7 * 1000),
      httpOnly: true,
    })

    // redirect if using form submission instead of XHR
    if (req.body.form) {
      return res.redirect(addBase('/'))
    }

    res.json({ accessToken: token })
  })
}
