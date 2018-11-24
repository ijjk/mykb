import actionTypes from '../actionTypes'

const initialState = {}

export default function cache(state = initialState, action) {
  switch (action.type) {
    case actionTypes.DOCS_LOADED:
    case actionTypes.CACHE_DOCS: {
      if (!action.data || !action.data.results) return state
      // update cache with new results
      action.data.results.forEach(doc => {
        state[doc.id] = doc
      })
      return { ...state }
    }

    case actionTypes.DOC_DELETED: {
      return {
        ...state,
        [action.id]: undefined,
      }
    }

    default:
      return state
  }
}
