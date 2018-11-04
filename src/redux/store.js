import { applyMiddleware, combineReducers, createStore } from 'redux'

import user from './reducers/userRed'

let middleware
if (process.env.NODE_ENV !== 'production') {
  const logger = require('redux-logger').default
  if (typeof window !== 'undefined') {
    middleware = applyMiddleware(logger)
  }
}

const reducers = combineReducers({
  user,
})

export default (middleware
  ? createStore(reducers, middleware)
  : createStore(reducers))
