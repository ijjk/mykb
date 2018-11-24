import React from 'react'
import EditDoc from '../src/client/comps/editDoc'
import RequireUser from '../src/client/comps/requireUser'

function New({ query }) {
  return (
    <RequireUser>
      <EditDoc {...{ query }} />
    </RequireUser>
  )
}

New.getInitialProps = async ({ query }) => ({ query })

export default New
