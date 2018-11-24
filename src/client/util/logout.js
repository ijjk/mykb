import { getStore } from '../store'
import addBase from '../../util/addBase'
import actionTypes from '../actionTypes'

export default function logout(e) {
  e && e.preventDefault()
  delete localStorage.jwt

  fetch(addBase('/logout'), {
    method: 'GET',
    credentials: 'include',
  }).then(() => {
    getStore().dispatch({
      type: actionTypes.USER_LOGOUT,
    })
  })
}
