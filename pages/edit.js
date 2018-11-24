import React from 'react'
import EditDoc from '../src/client/comps/editDoc'
import loadDocs from '../src/client/util/loadDocs'
import RequireUser from '../src/client/comps/requireUser'

function Edit({ query }) {
  return (
    <RequireUser>
      <EditDoc {...{ query }} />
    </RequireUser>
  )
}

Edit.getInitialProps = async ({ query }) => {
  await loadDocs(query, true)
  return { query }
}

export default Edit
