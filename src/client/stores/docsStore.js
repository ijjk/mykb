import actionTypes from '../actionTypes'

const initialState = {
  hasMore: false,
  pending: false,
  fetchIdx: 0,
  error: null,
  total: null,
  results: [],
  page: 1,
}

export default function docs(state = initialState, action) {
  if (
    action.type !== actionTypes.DOCS_PENDING &&
    action.fetchIdx !== state.fetchIdx
  ) {
    return state
  }

  switch (action.type) {
    case actionTypes.DOCS_PENDING: {
      return {
        ...state,
        error: null,
        pending: true,
        fetchIdx: action.fetchIdx,
      }
    }

    case actionTypes.DOCS_LOADED: {
      return {
        ...state,
        ...action.data,
        pending: false,
      }
    }

    case actionTypes.DOCS_ERROR: {
      return {
        ...state,
        pending: false,
        error: action.error,
      }
    }

    default: {
      return state
    }
  }
}
