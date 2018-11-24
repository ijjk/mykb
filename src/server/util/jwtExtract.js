const { ExtractJwt } = require('passport-jwt')
const bearerExtract = ExtractJwt.fromAuthHeaderAsBearerToken()
const ssrRoutes = {
  '/': 1,
  '/doc': 1,
  '/new': 1,
  '/edit': 1,
  '/settings': 1,
}

module.exports = function jwtExtract(req) {
  let token = null
  if (ssrRoutes[req.path]) {
    token = req.cookies.jwt
  } else {
    token = bearerExtract(req)
  }
  return token
}
