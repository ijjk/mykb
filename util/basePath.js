// make sure basePath doesn't end with /
let { basePath } = require('../config/host.json')
const urlChars = basePath.split('')

if (basePath.length > 1 && urlChars.pop() === '/') {
  basePath = urlChars.join('')
}
module.exports = basePath
