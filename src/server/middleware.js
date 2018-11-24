const path = require('path')
const DB = require('./util/db')
const bcrypt = require('bcrypt')
const helmet = require('helmet')
const express = require('express')
const passport = require('passport')
const bodyParser = require('body-parser')
const compression = require('compression')
const cookieParser = require('cookie-parser')
const { Strategy } = require('passport-local')
const jwtExtract = require('./util/jwtExtract')
const { Strategy: JwtStrategy } = require('passport-jwt')

const publicDir = path.join(__dirname, '../../public')
const usersDb = path.join(__dirname, '../../config/users.json')
const users = new DB(usersDb)

passport.use(
  new Strategy(function(username, password, cb) {
    let user = null
    const found = Object.keys(users.data).some(id => {
      const curUser = users.data[id]
      if (curUser.username === username) {
        user = curUser
        return true
      }
    })
    if (!found) return cb(null, false)

    bcrypt.compare(password, user.password).then(match => {
      cb(null, match && user)
    })
  })
)

passport.serializeUser(function(user, cb) {
  cb(null, user.id)
})

passport.deserializeUser(function(id, cb) {
  const { password, ...user } = users.data[id] || {}
  cb(null, user.id && user)
})

module.exports = function middleware(app) {
  const jwtOpts = {
    ...app.config.jwt,
    jwtFromRequest: jwtExtract,
    secretOrKey: app.config.secret,
  }

  passport.use(
    new JwtStrategy(jwtOpts, function(jwtPayload, cb) {
      const id = jwtPayload.user.id
      const { password, ...user } = users.data[id]
      return cb(null, user)
    })
  )

  // serve public path
  app.use('/', express.static(publicDir))

  // add gzip support
  app.use(compression())

  // add helpful headers
  app.use(helmet({ hidePoweredBy: { setTo: 'hamsters' } }))

  // set up passport.js
  app.use(cookieParser())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(passport.initialize())
  app.use((req, res, next) => {
    passport.authenticate('jwt', function(err, user, info) {
      if (user) req.user = user
      next()
    })(req, res, next)
  })

  app.use((req, res, next) => {
    if (!Object.keys(users.data).length) {
      global.publicConfig.doSetup = true
    }
    next()
  })

  app.users = users
  app.passport = passport
}
