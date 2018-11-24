const join = require('url-join')
const config = require('./pubConfig')

/**
 * adds basePath to url and also returns absolute url during ssr fetch
 * @param { String } path - the path to add base to
 * @param { Boolean } isFetch - whether its for a fetch
 * @returns { String } the path with base added
 */
module.exports = function addBase(path, isFetch) {
  if (path.substr(0, 1) === '/' && path.length > 1) path = path.substr(1)
  let url = isFetch && config.ssr ? `http://localhost:${config.port}` : ''
  url = url.length ? join(url, config.basePath) : config.basePath
  return join(url, path)
}
