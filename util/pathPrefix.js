// make sure basePath doesn't end with /
let { pathPrefix } = require('../config/host.json')
const urlChars = pathPrefix.split('')

if (pathPrefix.length > 1 && urlChars.pop() === '/') {
  pathPrefix = urlChars.join('')
}
module.exports = pathPrefix
