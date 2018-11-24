const bcrypt = require('bcrypt')
const uuid = require('uuid/v4')
const handleLogin = require('../util/handleLogin')

/**
 * sets up register endpoint
 */
module.exports = function register(app) {
  const { users } = app

  app.post('/register', (req, res) => {
    if (!global.publicConfig.doSetup) {
      return res.status(401).json({ message: 'already set up' })
    }
    const { username, password } = req.body
    const taken = Object.keys(users.data).some(id => {
      const user = users.data[id]
      return user.username === username
    })
    if (taken) {
      return res.send('username taken')
    }
    bcrypt.hash(password, 10).then(hash => {
      const id = uuid()
      const user = {
        id,
        username,
        password: hash,
      }
      users.setData({
        ...users.data,
        [id]: user,
      })
      delete global.publicConfig.doSetup
      handleLogin(req, res, user, app)
    })
  })
}
