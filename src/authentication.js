const authentication = require('@feathersjs/authentication')
const jwt = require('@feathersjs/authentication-jwt')
const local = require('@feathersjs/authentication-local')
const getUrl = require('../util/getUrl')

module.exports = function(app) {
  const config = app.get('authentication')
  config.path = getUrl(config.path)
  config.service = getUrl('users')

  // Set up authentication with the secret
  app.configure(
    authentication(
      Object.assign({}, config, {
        cookie: {
          enabled: true,
          httpOnly: false,
          secure: false,
          name: 'jwt',
        },
      })
    )
  )
  app.configure(jwt())
  app.configure(local())

  // The `authentication` service is used to create a JWT.
  // The before `create` hook registers strategies that can be used
  // to create a new valid JWT (e.g. local or oauth2)
  app.service(config.path).hooks({
    before: {
      create: [
        authentication.hooks.authenticate(config.strategies),
        ctx => {
          ctx.app.authLimit.resetKey(ctx.params.ip)
          return ctx
        },
      ],
      remove: [authentication.hooks.authenticate('jwt')],
    },
  })
}
