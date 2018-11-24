const path = require('path')
const express = require('express')
const config = require('./util/config')
const middleware = require('./middleware')
const trustIPs = require('./util/trustIPs')
const app = express()
const router = express.Router()
const next = global.next

async function main() {
  router.config = await config
  const {
    dev,
    ssr,
    port,
    date,
    basePath,
    searchDelay,
    maxDocsLimit,
    defDocsLimit,
    trustCloudflare,
  } = router.config

  // resolve paths to absolute paths
  router.config.docsDir = path.resolve(router.config.docsDir)

  // config made public to the client
  global.publicConfig = {
    dev,
    ssr,
    port,
    date,
    basePath,
    searchDelay,
    maxDocsLimit,
    defDocsLimit,
  }

  // set up proxy trusting
  trustIPs(app, trustCloudflare)

  // set next to use basePath
  next.setAssetPrefix(basePath)

  // apply middleware
  middleware(router)

  const routes = ['auth', 'logout', 'register', 'docs', 'user']
  // set up routes
  routes.forEach(route => require('./routes/' + route)(router))

  // set up next handler (must come last)
  router.use(next.getRequestHandler())

  // prefix all routes with baseRoute
  app.use(basePath, router)
}
main()

module.exports = app
