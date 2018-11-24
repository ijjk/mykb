/**
 * checks if dir provided dir is ok
 * @param {String} dir - the dir to check
 * @returns {boolean}
 */
module.exports = function isOkDirPart(dir) {
  if (dir.length > 255 || dir.length === 0) return false
  const end = dir.length - 1
  let prevChar
  for (let i = 0; i < dir.length; i++) {
    const c = dir.charCodeAt(i)
    const isOk = Boolean(
      (c > 47 && c < 58) || // 0-9
      (c > 64 && c < 91) || // A-Z
      (c > 96 && c < 123) || // a-z
      c === 95 || // _
      c === 45 || // - // allow period and space if not first or last index
        // and not consecutive
        ((c === 46 || c === 32) && i !== 0 && i !== end && prevChar !== c)
    )
    prevChar = c
    if (!isOk) return false
  }
  return true
}
