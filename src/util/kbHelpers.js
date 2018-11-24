/**
 * @param {Array | undefined} ids - possible array of ids to use
 * @param {Object} docs - the docs object
 * @returns {Array} - original ids or array of all docs ids
 */
const getIds = (ids, docs) => {
  return Array.isArray(ids) ? ids : Object.keys(docs)
}

/**
 * builds sort by array to use with sortDocs
 * @param { Object } query - the req query object
 * @returns { Array } - the sortBy array to pass to sortDocs
 */
const buildSortBy = query => {
  const sortBy = []

  // build sortBy param from query
  Object.keys(query)
    .filter(key => key.indexOf('sort') > -1)
    .map(queryKey => {
      const idx =
        queryKey.indexOf(':') < 0
          ? 0
          : parseInt(queryKey.split(':').pop(), 10) || 0
      const sortParts = query[queryKey].split(':')
      const order =
        sortParts.length > 1 ? parseInt(sortParts.pop(), 10) || 1 : 1
      const key = sortParts.join('')
      sortBy[idx] = { key, order }
    })

  return sortBy.length ? sortBy : undefined
}

/**
 * limit number of docs
 * @param { Object } query - the URL query object
 * @param { number } defLimit - default limit
 * @param { number } maxLimit - max limit
 */
const limitDocs = (docs, query, defLimit, maxLimit) => {
  const total = (docs && docs.length) || 0
  let page
  let limit
  let offset
  page = parseInt(query.page, 10)

  if (isNaN(page)) page = 1
  limit = parseInt(query.limit, 10)

  if (isNaN(limit)) limit = defLimit
  else if (limit > maxLimit) limit = maxLimit
  offset = parseInt(query.offset, 10)

  if (isNaN(offset) || offset > total) {
    offset = page > 1 ? (page - 1) * limit : 0
  }
  return {
    total,
    page,
    limit,
    offset,
    hasMore: offset + limit < total,
    results: docs.splice(offset, limit),
  }
}

/**
 * sorts docs by provided keys
 * @param {Object} docs - the docs object
 * @param {Array} sortBy - array of objects describing how to sort
 * @param {Array} ids - array of ids to sort
 * @returns {Array} - Array of sorted docs
 */
const sortDocs = (docs, sortBy = [{ key: 'updated', order: -1 }], ids) => {
  if (!Array.isArray(sortBy)) return {}
  ids = getIds(ids, docs)

  const sortedIds = ids.sort((idA, idB) => {
    const docA = docs[idA]
    const docB = docs[idB]
    let sortResult = 0

    sortBy.some(sorter => {
      let { key, order } = sorter
      if (typeof order === 'undefined') order = 1
      const valA = docA[key]
      const valB = docB[key]
      // they're the same so sort by next sorter or return 0
      if (valA === valB) return false
      if (typeof valA === 'string') {
        sortResult = valA.localeCompare(valB)
      } else {
        sortResult = valA < valB ? -1 : 1
      }
      // if ASC (1) leave alone if DESC (-1) flip result
      sortResult *= order
      return true
    })
    return sortResult
  })

  return sortedIds.reduce((sortedDocs, curId) => {
    sortedDocs.push({ ...docs[curId] })
    return sortedDocs
  }, [])
}

/**
 * searches through docs for string
 * @param {Object} docs - the docs object
 * @param {String} searchStr - the string to search for
 * @param {Array} ids - Array ids to search through
 * @returns {Array} - array of docs matching search
 */
const searchDocs = (docs, searchStr = '', ids, caseSensitive = false) => {
  ids = getIds(ids, docs)
  return ids
    .filter(id => {
      let { md } = docs[id]
      md = md || ''
      if (!caseSensitive) {
        md = md.toLowerCase()
        id = id.toLowerCase()
        searchStr = searchStr.toLowerCase()
      }
      return md.indexOf(searchStr) > -1 || id.indexOf(searchStr) > -1
    })
    .reduce((filteredDocs, curId) => {
      filteredDocs.push({ ...docs[curId] })
      return filteredDocs
    }, [])
}

module.exports = {
  sortDocs,
  limitDocs,
  searchDocs,
  buildSortBy,
}
