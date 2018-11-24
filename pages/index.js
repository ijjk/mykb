import React from 'react'
import config from '../src/util/pubConfig'
import loadDocs from '../src/client/util/loadDocs'
import ListDocs from '../src/client/comps/listDocs'
import RequireUser from '../src/client/comps/requireUser'

function Home(props) {
  return (
    <RequireUser>
      <ListDocs {...props} />
    </RequireUser>
  )
}

Home.getInitialProps = async ctx => {
  if (config.ssr) {
    await loadDocs(ctx.query || {})
  }
  return { query: ctx.query }
}

export default Home
