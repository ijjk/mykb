const url = require('url')
const urljoin = require('url-join')
const basePath = require('./basePath')
const { host, port, protocol } = require('../config/host.json')

module.exports = (path, absolute) => {
  path = urljoin(basePath, path)
  if (!absolute) return path
  return url.format({
    hostname: host,
    port,
    protocol,
    pathname: path,
  })
}
