import mirror from 'keymirror'

export default mirror({
  // user actions
  SET_USER: null,
  USER_LOGOUT: null,

  // docs actions
  DOC_DELETED: null,
  DOCS_ERROR: null,
  DOCS_LOADED: null,
  DOCS_PENDING: null,

  // cache actions
  LOAD_CACHE: null,
  CACHE_DOCS: null,
})
