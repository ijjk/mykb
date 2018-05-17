import { 
  SET_USER, 
  LOGIN_PENDING,
  LOGIN_FAILED,
  LOGOUT
} from '../actions/userAct'; 

const initState = {
  setup: false,
  _id: null,
  email: null,
  admin: null,
  pending: false,
  error: null
}; 

function user(state=initState, action) {
  switch(action.type) {
  case SET_USER: {
    return {
      ...initState,
      ...action.data
    }; 
  }
  case LOGIN_PENDING: {
    return {
      ...initState,
      pending: true
    }; 
  }
  case LOGIN_FAILED: {
    return {
      ...state,
      pending: false,
      error: action.data
    }; 
  }
  case LOGOUT: {
    return initState; 
  }
  default: return state; 
  }
}

export default user; 