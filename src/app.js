const favicon = require('serve-favicon')
const fs = require('fs')
const path = require('path')
const compress = require('compression')
const cors = require('cors')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')()
const RateLimit = require('express-rate-limit')
const trustIPs = require('./trustIPs')
const logger = require('winston')

const feathers = require('@feathersjs/feathers')
const express = require('@feathersjs/express')
const configuration = require('@feathersjs/configuration')
const hostConfig = require('../config/host.json')

const middleware = require('./middleware')
const services = require('./services')
const appHooks = require('./app.hooks')
const channels = require('./channels')
const authentication = require('./authentication')

const dev = process.env.NODE_ENV !== 'production'
const pathPrefix = require('../util/pathPrefix')
const stripBase = require('../util/stripPrefix')
const getUrl = require('../util/getUrl')
const { parse } = require('url')
const nxt = require('next')({ dev, quiet: true })
const nxtHandler = nxt.getRequestHandler()

const app = express(feathers())
global.app = app

app.run = async port => {
  const server = app.listen(port)
  await nxt.prepare()

  if (dev) {
    server.on('upgrade', (req, socket) => {
      req.url = stripBase(req.url)
      nxtHandler(req, socket, parse(req.url, true))
    })
  }
  return server
}

// Load app configuration
app.configure(configuration())

// load host and setup settings
Object.keys(hostConfig).forEach(key => app.set(key, hostConfig[key]))
app.set('kbConf', {
  pathPrefix,
})
app.set('didSetup', false)
try {
  fs.statSync(path.join(__dirname, '..', 'db', '.didSetup'))
  app.set('didSetup', true)
} catch (err) {
  app.use((req, res, next) => {
    req.doSetup = !app.get('didSetup')
    next()
  })
}

const authLimit = new RateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 5, // 5 attempts then block
  delayAfter: 3, // slow down after 3 fails
  delayMs: 2 * 1000,
})
app.authLimit = authLimit
app.use(getUrl('auth'), authLimit)
app.patch(getUrl('users/*'), authLimit)

// Enable CORS, security, compression, favicon and body parsing
trustIPs(app)
app.use(cors())
app.use(
  helmet({
    hidePoweredBy: { setTo: 'hamsters' },
  })
)

if (!dev) app.use(compress())
app.use(express.json()) // use { limit } option to increase max post size
app.use(express.urlencoded({ extended: true }))
app.use(getUrl('/'), favicon('favicon.ico'))
app.configure(express.rest()) // Set up Plugins and providers
app.configure(middleware) // middleware/index.js
app.configure(authentication) // Set up authentication
app.configure(services) // Set up our services (see `services/index.js`)
app.configure(channels) // Set up event channels (see channels.js)

nxt.setAssetPrefix(pathPrefix)

const checkJWT = async (req, res, next) => {
  const result = await req.app.authenticate('jwt', {})(req)
  if (result.success) {
    req.jwt = req.cookies.jwt
    delete result.data.user.password
    req.user = result.data.user
  }
  next()
}
;['/', '/logout', '/new', '/settings'].forEach(route => {
  app.get(getUrl(route), cookieParser, checkJWT, (req, res) => {
    const { query } = parse(req.url, true)
    nxt.render(req, res, route, query)
  })
})
;['/k', '/edit'].forEach(route => {
  app.get(getUrl(route + '/:id'), cookieParser, checkJWT, (req, res) => {
    nxt.render(req, res, route, { id: req.params.id })
  })
})

const notFound = express.notFound()
app.use((req, res, next) => {
  let accept = req.get('accept')
  if (accept && accept.toLowerCase() === 'application/json')
    return notFound(req, res, next)
  if (req.url.substr(0, pathPrefix.length) !== pathPrefix)
    return nxt.render404(req, res)

  req.url = stripBase(req.url)
  nxtHandler(req, res, parse(req.url, true))
})

app.use(express.errorHandler({ logger }))
app.hooks(appHooks)

module.exports = app
