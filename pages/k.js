import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import fetch from 'isomorphic-unfetch'
import Page from '../src/components/Page'
import Markdown from '../src/components/Markdown'
import AddDoc from '../src/components/AddDoc'
import getUrl from '../src/util/getUrl'
import getJwt from '../src/util/getJwt'

class k extends Component {
  delete = async () => {
    const sure = window.confirm(
      'Are you sure you want to delete this doc? This can not be undone.'
    )
    if (!sure) return
    const del = await fetch(getUrl('docs/' + this.props.id), {
      headers: { Authorization: getJwt() },
      method: 'DELETE',
    }).catch(({ message }) => ({ ok: false, message }))
    if (del.ok) Router.push('/', getUrl('/'))
    else {
      if (!del.message) {
        const data = await del.json()
        del.message = data.message
      }
      window.alert(`Could not delete doc, ${del.message}`)
    }
  }

  render() {
    const { found, id, doc } = this.props
    if (!found)
      return (
        <Page>
          <h3>Doc not found...</h3>
        </Page>
      )
    return (
      <Page>
        <h5 style={{ marginBottom: '1rem' }}>
          {doc.dir}
          {doc.dir.length > 0 ? '/' : ''}
          {doc.name}
          {' - '}
          <Link
            as={getUrl('edit/' + id)}
            href={{ pathname: '/edit', query: { id } }}
          >
            <a id="edit">edit</a>
          </Link>
          <button
            className="float-right"
            onClick={this.delete}
            style={{ margin: '5px 0 0' }}
          >
            Delete
          </button>
        </h5>
        <Markdown source={doc.md} className="Markdown" />
      </Page>
    )
  }
}
export default AddDoc(k)
