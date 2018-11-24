import { format } from 'url'
import { getStore } from '../store'
import getHeaders from './getHeaders'
import fetch from 'isomorphic-unfetch'
import addBase from '../../util/addBase'
import actionTypes from '../actionTypes'
import config from '../../util/pubConfig'
import {
  buildSortBy,
  limitDocs,
  searchDocs,
  sortDocs,
} from '../../util/kbHelpers'

/**
 * loads docs
 * @param { Object } query - docs query object
 * @param { Boolean } forCache - whether this is meant specifically for cache
 * @returns { AbortController } instance of abort controller if supported
 */
export default function loadDocs(query, forCache) {
  const queryStr = format({ query })
  const store = getStore()
  const url = addBase(`/docs${queryStr}`, true)
  const headers = getHeaders()

  if (!headers) return
  const { docs, cache } = store.getState()
  const fetchIdx = docs.fetchIdx + 1
  store.dispatch({ type: actionTypes.DOCS_PENDING, fetchIdx })

  let controller
  let signal

  if (!config.ssr && 'AbortController' in window) {
    controller = new AbortController()
    signal = controller.signal
  }

  const req = fetch(url, { headers, signal })
    .then(async res => {
      let data = await res.json()
      if (res.status !== 200) throw new Error(data.message)
      if (data.id) data = { results: [data] }
      store.dispatch({
        type: forCache ? actionTypes.CACHE_DOCS : actionTypes.DOCS_LOADED,
        fetchIdx,
        data: {
          ...data,
          page: query.page || 1,
        },
      })
    })
    .catch(err => {
      if (err.name === 'AbortError') return
      // try cached docs if offline
      if (err.message === 'Failed to fetch') {
        // handle fetching from cache
        let cacheDocs
        if (query.search) cacheDocs = searchDocs(cache, query.search)
        cacheDocs = sortDocs(
          cache,
          buildSortBy(query),
          cacheDocs && cacheDocs.map(doc => doc.id)
        )

        store.dispatch({
          type: actionTypes.DOCS_LOADED,
          fetchIdx,
          data: {
            ...limitDocs(
              cacheDocs,
              query,
              config.defDocsLimit,
              config.maxDocsLimit
            ),
            page: query.page || 1,
          },
        })
      } else {
        store.dispatch({
          type: actionTypes.DOCS_ERROR,
          error: err.message,
          fetchIdx,
        })
      }
    })

  if (config.ssr) return req
  // return controller to abort request
  return controller
}
