import { combineReducers, compose, createStore } from 'redux'
import config from '../util/pubConfig'
import actionTypes from './actionTypes'

// import stores
import user from './stores/userStore'
import docs from './stores/docsStore'
import cache from './stores/cacheStore'

export function initializeStore(initialState) {
  let enhancer = undefined

  if (!config.ssr) {
    const persistState = require('redux-localstorage')
    enhancer = compose(
      persistState(['cache', 'user'], {
        merge: (initial, persisted) => {
          return {
            ...initial,
            cache: {
              ...persisted.cache,
              ...initial.cache,
            },
            user: {
              ...initial.user,
              ...persisted.user,
            },
          }
        },
      })
    )
  }
  const store = combineReducers({
    user,
    docs,
    cache,
  })
  const rootStore = (state, action) => {
    if (action.type === actionTypes.USER_LOGOUT) {
      state = undefined
    } else if (action.type === actionTypes.LOAD_CACHE) {
      state = action.state
    }
    return store(state, action)
  }
  return createStore(rootStore, initialState, enhancer)
}

export function getStore() {
  return config.ssr ? global.reduxStore : window['__NEXT_REDUX_STORE__']
}
