const path = require('path')
const { userError } = require('./responses')
const isOkDirPart = require('../../util/isOkDirPart')

/**
 * checks if doc request is ok
 * @param { Object } doc - doc object with name, dir, md
 * @param { Object } kb - the current kb instance
 * @param { Object } res - the express.Response object
 * @param { boolean } requireAll - whether to require all fields on doc
 */
module.exports = function isOkDoc({ name, dir, md }, kb, res, requireAll) {
  let docPath = name

  if (!md || typeof md !== 'string' || md.length === 0) {
    if (requireAll) return userError(res, 'md can not be empty')
  }
  if (name && name.slice(-3) !== '.md') {
    return userError(res, 'doc name must end in .md')
  } else if (name && !isOkDirPart(name)) {
    return userError(res, 'name contains an invalid character')
  }
  if (dir && typeof dir === 'string') {
    if (dir.split('/').some(dirPart => !isOkDirPart(dirPart))) {
      return userError(res, 'dir contains an invalid character')
    }
    docPath = path.join(dir, name)
  }
  if (requireAll && kb.docs[docPath]) {
    return userError(res, 'item already exists')
  }

  return true
}
