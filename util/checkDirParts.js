const isOkDirPart = str => {
  if (str.length > 255 || str.length === 0) return false
  const end = str.length - 1
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i)
    if (
      !(c > 47 && c < 58) && // 0-9
      !(c > 64 && c < 91) && // A-Z
      !(c > 96 && c < 123) && // a-z
      !(c === 95) &&
      !(c === 45) && // _ and -
      !(
        (c === 46 || c === 32) && // period or space if not first or last
        i !== 0 &&
        i !== end
      )
    ) {
      return false
    }
  }
  return true
}

module.exports = {
  checkDir: dir => {
    if (typeof dir !== 'string') return false
    dir = dir.trim()
    if (dir.length === 0) return 0
    if (dir.indexOf('/') > -1) {
      dir = dir.split('/').filter(p => p.length !== 0)
      if (dir.length === 1) {
        if (!isOkDirPart(dir[0])) false
        dir = dir[0]
      } else if (dir.length === 0) {
        dir = ''
      } else if (dir.some(part => !isOkDirPart(part))) {
        return false
      }
    } else if (!isOkDirPart(dir)) {
      return false
    }
    return Array.isArray(dir) ? dir.join('/') : dir
  },

  checkName: name => {
    if (typeof name !== 'string') return false
    name = name.trim()
    if (name.length === 0) return 0
    if (!isOkDirPart(name)) return false
    return name
  },
}
