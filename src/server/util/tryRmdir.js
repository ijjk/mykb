const path = require('path')
const fs = require('fs-extra')

/**
 * tries to remove directory parts if empty
 * @param { String } docsDir - the docs directory
 * @param { String } relPath - relative path from docs dir to try removing
 */
module.exports = async function tryRmdir(docsDir, relPath) {
  try {
    const parts = relPath.split('/')
    if (parts[parts.length - 1].indexOf('.md') > -1) parts.pop()
    for (let i = parts.length; i > 0; i--) {
      const part = parts.pop()
      const curPath = path.join(docsDir, parts.join('/'), part)
      await fs.rmdir(curPath)
    }
  } catch (err) {
    // the dir probably isn't empty so ignore
  }
}
