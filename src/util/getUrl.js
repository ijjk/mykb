const url = require('url')
const urljoin = require('url-join')

module.exports = (path, absolute) => {
  const { pathPrefix } =
    typeof window === 'undefined' ? app.get('kbConf') : window.kbConf

  path = urljoin(pathPrefix, path)
  if (!absolute) return path

  // absolute should only be used during ssr
  return url.format({
    hostname: app.get('host'),
    port: app.get('port'),
    pathname: path,
    protocol: 'http',
  })
}
