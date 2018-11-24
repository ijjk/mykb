const http = require('http')
const path = require('path')
const Next = require('next')
const chokidar = require('chokidar')
const isDev = process.env.NODE_ENV !== 'production'
const next = Next({ dev: isDev, quiet: true })

let server = null
let creatingServer = false

// prepare next
next.prepare()
global.next = next

async function createServer() {
  if (creatingServer) return
  creatingServer = true
  const { port } = await require('./server/util/config')

  if (server) {
    console.log('Restarting server...')
    await new Promise(resolve => {
      server.destroy(() => resolve())
    })
  }

  try {
    server = http.createServer(require('./server/server'))
    isDev && require('server-destroy')(server)
    server.listen(port)
    server.once('listening', () => {
      creatingServer = false
      console.log(`Listening at http://127.0.0.1:${port}`)
    })
  } catch (err) {
    console.error(err)
    creatingServer = false
    console.log('waiting for change to restart...')
  }
}

if (isDev) {
  // watch for server changes and hot reload server
  // without having to reload next.js
  const configPath = path.resolve('./config')
  const utilPath = path.resolve('./src/util')
  const serverPath = path.resolve('./src/server')
  const watcher = chokidar.watch([serverPath, configPath, utilPath], {})

  watcher.on('change', path => {
    Object.keys(require.cache).forEach(key => {
      if (key.indexOf(serverPath) > -1 || key.indexOf(utilPath) > -1) {
        delete require.cache[key]
        delete module.constructor._pathCache[key]
      }
    })
    createServer()
  })
}
createServer()
