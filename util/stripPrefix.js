const pathPrefix = require('./pathPrefix')

module.exports = url => {
  if (pathPrefix !== '/') {
    url = url.split(pathPrefix).join('')
  }
  return url
}
