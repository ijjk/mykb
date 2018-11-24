import { getStore } from '../store'
import actionTypes from '../actionTypes'
import addBase from '../../util/addBase'
import config from '../../util/pubConfig'

export default async function checkLogin(req) {
  let user = req && req.user
  if (user) {
    user = {
      ...user,
      jwt: req.cookies.jwt,
    }
  }
  const store = getStore()

  if (!user && !config.ssr && !store.getState().user.verified) {
    const jwt = localStorage.jwt

    if (jwt) {
      const jwt = localStorage.jwt
      await fetch(addBase('/auth'), {
        headers: {
          Authorization: `bearer ${jwt}`,
        },
        method: 'POST',
      })
        .then(res => {
          if (res.ok) {
            const payload = JSON.parse(atob(jwt.split('.')[1]))
            user = {
              ...payload.user,
              verified: true,
              jwt,
            }
          } else if (res.status === 400) {
            user = {}
            delete localStorage.jwt
          }
        })
        .catch(() => {})
    }
  }

  if (!user && config.doSetup) {
    user = { doSetup: true }
  }

  if (user)
    store.dispatch({
      type: actionTypes.SET_USER,
      user,
    })
}
