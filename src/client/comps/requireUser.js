import React from 'react'
import { connect } from 'react-redux'
import Login from '../forms/login'

function RequireUser({ children, user }) {
  return user.id ? children : <Login doSetup={user.doSetup} />
}

export default connect(({ user }) => ({ user }))(RequireUser)
