import { getStore } from '../store'
import Router from 'next/router'
import getHeaders from './getHeaders'
import actionTypes from '../actionTypes'
import addBase from '../../util/addBase'

/**
 * delete doc
 * @param { String } id - id of doc to delete
 * @returns { Promise }
 */
export const deleteDoc = (id, confirm = true) => {
  if (confirm && !window.confirm('Are you sure you want to delete this doc?')) {
    return
  }
  return fetch(addBase(`/docs?id=${id}`), {
    headers: getHeaders(),
    method: 'DELETE',
  })
    .then(() => {
      Router.push('/', addBase('/')).then(() => {
        getStore().dispatch({
          type: actionTypes.DOC_DELETED,
          id,
        })
      })
    })
    .catch(err => {
      alert('Error occurred deleting doc: ', err.message)
    })
}

/**
 *
 * @param { String|undefined } id - id of doc if update or undefined if new
 * @param { String } md - the documents markdown
 * @param { String } name - name of document
 * @param { String } dir - sub-dir of docsDir for document
 * @returns { Promise }
 */
export const updateDoc = (id, md, name, dir) => {
  const method = id ? 'PATCH' : 'POST'
  const query = id ? `?id=${id}` : ''
  const data = {}
  if (md) data.md = md
  if (name) data.name = name
  if (typeof dir === 'string') data.dir = dir
  if (name && name.slice(-3) !== '.md') data.name += '.md'

  return fetch(addBase(`/docs${query}`), {
    headers: {
      ...getHeaders(),
      'content-type': 'application/json',
    },
    method,
    body: JSON.stringify(data),
  }).then(async res => {
    const { id, ...data } = await res.json()
    if (!id) throw new Error(data.message || 'error occurred adding doc')
    const docUrl = `/doc?id=${id}`
    Router.push(docUrl, addBase(docUrl))
  })
}
