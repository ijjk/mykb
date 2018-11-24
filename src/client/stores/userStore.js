import actionTypes from '../actionTypes'
import config from '../../util/pubConfig'

const initialState = {
  id: null,
  email: null,
  admin: null,
  doSetup: false,
  verified: false,
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_USER: {
      if (state.doSetup && !action.user.doSetup) {
        config.doSetup = false
      }
      return {
        ...initialState,
        ...action.user,
      }
    }

    default: {
      return state
    }
  }
}
