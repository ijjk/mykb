import React, { Component } from 'react'
import Page from '../src/components/Page'
import MngDoc from '../src/components/MngDoc'
import AddDoc from '../src/components/AddDoc'

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
