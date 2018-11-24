import React, { useEffect, useState } from 'react'
import config from '../../util/pubConfig'
import addBase from '../../util/addBase'
import loadDocs from '../util/loadDocs'
import { connect } from 'react-redux'
import Paginate from 'react-paginate'
import Router from 'next/router'
import Link from 'next/link'

let searchTimeout
let abortController

const { date, defDocsLimit, searchDelay, ssr } = config
const abort = () => {
  abortController && abortController.abort()
}

function ListDocs({ docs, query }) {
  const [offline, setOffline] = useState(ssr ? false : !navigator.onLine)
  const curSort = query.sort || 'updated:-1'
  const curPage = parseInt(query.page, 10) || 1
  const pageCount = Math.ceil(docs.total / defDocsLimit)
  const handleOffline = () => setOffline(true)
  const handleOnline = () => setOffline(false)

  useEffect(
    () => {
      abortController = loadDocs(query)
      window.addEventListener('online', handleOnline)
      window.addEventListener('offline', handleOffline)

      return () => {
        abort()
        clearTimeout(searchTimeout)
        window.removeEventListener('online', handleOnline)
        window.removeEventListener('offline', handleOffline)
      }
    },
    [query]
  )

  const updateUrl = query => {
    clearTimeout(searchTimeout)
    searchTimeout = setTimeout(() => {
      Router.push({ pathname: '/', query }, { pathname: addBase('/'), query })
    }, searchDelay)
  }

  const handleField = e => {
    const key = e.target.getAttribute('name')
    updateUrl({
      ...query,
      page: 1,
      [key]: e.target.value.trim(),
    })
  }

  const handlePage = ({ selected }) => {
    if (curPage - 1 === selected) return
    updateUrl({
      ...query,
      page: selected + 1,
    })
  }

  return (
    <div className="container padded">
      <form action={addBase('/')} method="GET">
        <div className="row">
          <input
            type="text"
            name="search"
            maxLength={300}
            className="search"
            onChange={handleField}
            defaultValue={query.search || ''}
            placeholder="Search knowledge base..."
          />
          <select
            name="sort"
            value={curSort}
            onChange={handleField}
            className="column column-25"
          >
            <option value="updated:-1">Updated (new to old)</option>
            <option value="updated:1">Updated (old to new)</option>
            <option value="created:-1">Created (new to old)</option>
            <option value="created:1">Created (old to new)</option>
            <option value="id:1">Path (A to Z)</option>
            <option value="id:-1">Path (Z to A)</option>
          </select>
        </div>
        <noscript>
          <button type="submit" className="float-right">
            Submit
          </button>
        </noscript>
      </form>

      {docs.error && <p>{docs.error} </p>}

      <table>
        <thead>
          <tr>
            <th>Doc{offline && ` (offline mode)`}</th>
            <th>Modified</th>
          </tr>
        </thead>
        <tbody>
          {docs.results.map(doc => {
            const docUrl = { pathname: '/doc', query: { id: doc.id } }
            return (
              <tr key={doc.id}>
                <td>
                  <Link
                    href={docUrl}
                    as={{ ...docUrl, pathname: addBase('/doc') }}
                  >
                    <a>{doc.id}</a>
                  </Link>
                </td>
                <td>
                  {new Date(doc.updated).toLocaleDateString(
                    date.locale,
                    date.options
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      {!docs.total && <p>No docs found...</p>}

      {docs.total > defDocsLimit && (
        <Paginate
          previousLabel="Prev"
          pageCount={pageCount}
          marginPagesDisplayed={2}
          activeClassName="active"
          forcePage={curPage - 1}
          onPageChange={handlePage}
          containerClassName="paginate"
          hrefBuilder={pg => addBase(`/?page=${pg}`)}
        />
      )}

      <style jsx>{`
        .container {
          max-width: 750px;
          margin: 15px auto;
        }

        .row input {
          margin-right: 20px;
        }

        td a {
          display: block;
        }

        td:nth-child(1) {
          word-break: break-word;
        }

        th:nth-of-type(2n),
        td:nth-of-type(2n) {
          text-align: right;
        }
      `}</style>
    </div>
  )
}

export default connect(({ docs }) => ({ docs }))(ListDocs)
