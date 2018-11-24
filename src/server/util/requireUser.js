/**
 * returns forbidden status when user not present
 * @param {Object} - express.Request
 * @param {Object} - express.Response
 * @returns {boolean} - whether if had user or not
 */
module.exports = function requireUser(req, res, next) {
  if (!req.user) {
    res.status(403).json({
      status: 'error',
      message: 'You do not have permission to access this',
    })
    return false
  }
  if (next) next()
  return true
}
