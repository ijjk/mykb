import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetch from 'isomorphic-unfetch'
import mapUser from '../util/mapUser'
import getUrl from '../util/getUrl'
import getJwt from '../util/getJwt'

const getDoc = async (id, req) => {
  let found, doc
  const jwt = getJwt(req)
  if (!jwt) return { found, doc, id }
  const docRes = await fetch(getUrl('docs/' + id, Boolean(req)), {
    method: 'GET',
    headers: { Authorization: jwt },
  })
  if (docRes.ok) {
    doc = await docRes.json()
    found = true
  }
  return { found, doc, id }
}

export default ComposedComponent => {
  class DocComp extends Component {
    state = {
      found: false,
      id: null,
      doc: {},
    }
    static async getInitialProps({ query, req }) {
      return await getDoc(query.id, req)
    }
    static getDerivedStateFromProps(nextProps, state) {
      const { found, id, doc } = nextProps
      if (state.found !== found) return { found, id, doc }
      return null
    }
    async componentDidUpdate(prevProps) {
      const { user, found, id } = this.props
      if (prevProps.user.email === user.email || found) return
      if (!user.email) return
      this.setState(await getDoc(id))
    }
    render() {
      return <ComposedComponent {...this.state} />
    }
  }
  return connect(mapUser)(DocComp)
}
