const addBase = require('../../util/addBase')

/**
 * sets up logout endpoint
 */
module.exports = function logout(app) {
  app.get('/logout', (req, res) => {
    res.clearCookie('jwt')
    res.redirect(addBase('/'))
  })
}
