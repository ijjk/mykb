const isDev = process.env.NODE_ENV !== 'production'

// standard JSON responses
module.exports = {
  aOk: (res, data) => {
    res.status(200).json({ status: 'ok', ...data })
  },

  notFound: res => {
    res.status(404).json({
      status: 'error',
      message: 'item not found',
    })
  },

  serverError: (res, err) => {
    console.log(new Error(err).stack)
    res.status(500).json({
      status: 'error',
      message: (isDev && err && err.message) || 'server encountered error',
    })
  },

  userError: (res, message) => {
    res.status(400).json({
      status: 'error',
      message,
    })
  },
}
