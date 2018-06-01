const { BadRequest, Forbidden } = require('@feathersjs/errors')

const isAdmin = ctx => {
  const { params } = ctx
  return Boolean(params.user && params.user.admin)
}

module.exports = {
  disable: () => {
    throw new BadRequest('method not allowed')
  },

  invalid: (field, msg) => {
    throw new BadRequest(msg || `invalid ${field} value`)
  },

  isAdmin: isAdmin,

  adminOnly: ctx => {
    if (!isAdmin(ctx)) throw new Forbidden('invalid permission')
    return ctx
  },
}
