import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
import addBase from '../src/util/addBase'
import loadDocs from '../src/client/util/loadDocs'
import { deleteDoc } from '../src/client/util/docHelpers'
import RequireUser from '../src/client/comps/requireUser'

const Markdown = dynamic(() => import('react-markdown'))

function Doc({ cache, query }) {
  return (
    <RequireUser>
      <div className="container fill padded">
        {(() => {
          const { id, md } = cache[query.id] || {}

          if (!id) return <p>Doc was not found...</p>
          return (
            <div>
              <h5>
                {`${id} - `}
                <Link
                  href={{ pathname: '/edit', query }}
                  as={{ pathname: addBase('/edit'), query }}
                >
                  <a id="edit">edit</a>
                </Link>
                <button
                  className="float-right"
                  onClick={() => deleteDoc(query.id)}
                >
                  DELETE
                </button>
              </h5>
              <Markdown source={md} className="Markdown" />
            </div>
          )
        })()}
      </div>
    </RequireUser>
  )
}

Doc.getInitialProps = async ({ query }) => {
  await loadDocs(query, true)
  return { query }
}

export default connect(({ cache }) => ({ cache }))(Doc)
