import fetch from 'isomorphic-unfetch'
import parseSort from './parseSort'
import getUrl from './getUrl'
import getJwt from './getJwt'

export const $limit = 12 // number of docs per page
export const select = ['id', 'name', 'updated', 'dir'].map((f, i) => ({
  [`$select[${i}]`]: f,
}))

export const getDocs = async (q, jwt) => {
  const docsRes = await fetch(getUrl('docs', Boolean(jwt)) + q, {
    headers: { Authorization: jwt || getJwt() },
  }).catch(({ message }) => ({ ok: false, error: message }))
  if (docsRes.ok) {
    const res = await docsRes.json()
    const total = res.total || 0
    const docs = res.data || []
    return { docs, total }
  }
  return { total: 0, docs: [], error: docsRes.message }
}

export const buildQ = q => {
  if (!q.$search) delete q.$search
  if (!q.$skip) delete q.$skip
  else {
    q.$skip = (q.$skip - 1) * $limit
  }
  const $sort = parseSort(q.$sort ? q.$sort : 'updated:-1')
  delete q.$sort
  select.forEach(sel => (q = { ...q, ...sel }))
  q = { $limit, ...q }
  let url = Object.keys(q)
    .map(k => `${k}=${encodeURIComponent(q[k])}`)
    .join('&')
  url = `?${url}&${$sort}`
  return url
}
