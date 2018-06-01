const { authenticate } = require('@feathersjs/authentication').hooks
const { Forbidden } = require('@feathersjs/errors')
const fs = require('fs')
const path = require('path')
const { disable, invalid, isAdmin, adminOnly } = require('../hooksUtil')
const {
  hashPassword,
  protect,
} = require('@feathersjs/authentication-local').hooks

const invalidStr = str =>
  Boolean(typeof str !== 'string' || str.trim().length === 0)

module.exports = {
  before: {
    all: [],
    find: [authenticate('jwt')],
    get: [authenticate('jwt')],
    create: [
      async ctx => {
        const { data, app } = ctx
        if (app.get('didSetup') && !isAdmin(ctx)) {
          throw new Forbidden('invalid permission')
        }
        const { email, password, admin } = data
        if (invalidStr(email)) invalid('email')
        if (invalidStr(password)) invalid('password')
        if (typeof admin !== 'boolean') invalid('admin')

        ctx.data = { email, password, admin }
        return ctx
      },
      hashPassword(),
    ],
    update: [disable],
    patch: [
      authenticate('local'),
      async ctx => {
        const { newPassword } = ctx.data
        if (invalidStr(newPassword)) invalid('newPassword')
        ctx.data = { password: newPassword }
        await hashPassword()(ctx)
        ctx.app.authLimit.resetKey(ctx.params.ip)
        return ctx
      },
    ],
    remove: [authenticate('jwt'), adminOnly],
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password'),
    ],
    find: [],
    get: [],
    create: [
      async ctx => {
        const { app } = ctx
        if (app.get('didSetup')) return ctx
        app.set('didSetup', true)
        fs.writeFileSync(
          // create empty file so we cant stat it
          path.join(__dirname, '..', '..', '..', 'db', '.didSetup'),
          ''
        )
        return ctx
      },
    ],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
}
