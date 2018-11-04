import fetch from 'isomorphic-unfetch'
import store from '../store'
import getUrl from '../../util/getUrl'

// define action types
export const SET_USER = 'SET_USER'
export const LOGIN_PENDING = 'LOGIN_PENDING'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGOUT = 'LOGOUT'

export const setUser = user => {
  store.dispatch({
    type: SET_USER,
    data: user,
  })
} // setUser

export const doLogout = () => {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem('jwt')
    document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;'
  }
  store.dispatch({ type: LOGOUT })
} // doLogout

export async function doLogin(creds, jwt, noPend) {
  !noPend && store.dispatch({ type: LOGIN_PENDING })
  const authReqOpts = { method: 'POST', credentials: 'include' }
  const authReqHead = {
    headers: jwt
      ? { Authorization: jwt }
      : {
          'Content-Type': 'application/json',
        },
  }
  const authReqBody = jwt
    ? null
    : {
        body: JSON.stringify({ ...creds, strategy: 'local' }),
      }
  const authReq = new Request(getUrl('auth'), {
    ...authReqOpts,
    ...authReqHead,
    ...authReqBody,
  })
  const authRes = await fetch(authReq).catch(err => {
    store.dispatch({ type: LOGIN_FAILED, data: err.message })
  })
  if (!authRes.ok) {
    let error
    try {
      error = await authRes.json()
      error = error.message
    } catch (err) {
      error =
        authRes.status === 429
          ? 'Max login attempts reached'
          : 'An error occurred during login'
    }
    return store.dispatch({
      type: LOGIN_FAILED,
      data: error,
    })
  }
  const { accessToken } = await authRes.json()
  const payload = accessToken.split('.')[1]
  const { userId } = JSON.parse(atob(payload))
  const userReq = new Request(getUrl(`/users/${userId}`), {
    headers: {
      Authorization: accessToken,
    },
  })
  const userRes = await fetch(userReq)
  if (!userRes.ok) {
    return store.dispatch({
      type: LOGIN_FAILED,
      data: 'failed to get user',
    })
  }
  window.localStorage.setItem('jwt', accessToken)
  setUser(await userRes.json())
} // doLogin
