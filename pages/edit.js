import React, { Component } from 'react'
import Page from '../comps/Page'
import MngDoc from '../comps/MngDoc'
import AddDoc from '../comps/AddDoc'

class Edit extends Component {
  render() {
    const { found, doc } = this.props
    if (!found)
      return (
        <Page>
          <h3>Doc not found...</h3>
        </Page>
      )
    return <MngDoc {...{ doc }} />
  }
}
export default AddDoc(Edit)
