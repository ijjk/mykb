import React, { useState } from 'react'
import { connect } from 'react-redux'
import addBase from '../src/util/addBase'
import getHeaders from '../src/client/util/getHeaders'
import RequireUser from '../src/client/comps/requireUser'

function Settings({ user }) {
  const [data, setData] = useState({
    current: '',
    confirm: '',
    new: '',
  })
  const [pending, setPending] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = () => {
    if (pending) return
    let err
    Object.keys(data).forEach(k => (data[k] = data[k].trim()))
    if (!data.current) err = 'current pass is required'
    else if (!data.new) err = 'new pass is required'
    else if (!data.confirm) err = 'confirm pass is required'
    else if (data.new !== data.confirm) err = 'new password must match confirm'

    if (err) return setError(err)
    setError(null)
    setPending(true)

    fetch(addBase('/user'), {
      method: 'PATCH',
      headers: {
        ...getHeaders(),
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        username: user.username,
        password: data.current,
        newPassword: data.new,
      }),
    })
      .then(async res => {
        const { status, ...data } = await res.json()
        if (status === 'ok') {
          setPending(false)
          setError('Password updated')
          return setData({
            current: '',
            confirm: '',
            new: '',
          })
        }
        throw new Error(data.message)
      })
      .catch(err => {
        setPending(false)
        setError(err.message || 'An error occurred updating password')
      })
  }
  const handleChange = e => {
    data[e.target.id] = e.target.value
    setData(data)
  }

  return (
    <RequireUser>
      <div className="container padded fill">
        <h3>Account settings</h3>
        <hr />

        <h4>Change password</h4>

        <label htmlFor="current">Current Password</label>
        <input
          id="current"
          type="password"
          placeholder="Current super secret password"
          value={data.current}
          onChange={handleChange}
        />

        <label htmlFor="new">New Password</label>
        <input
          id="new"
          type="password"
          placeholder="New super secret password"
          value={data.new}
          onChange={handleChange}
        />

        <label htmlFor="confirm">Confirm New Password</label>
        <input
          id="confirm"
          type="password"
          value={data.confirm}
          onChange={handleChange}
          placeholder="Confirm its not too secret you forgot"
        />

        <div>
          {error && <p className="float-left">{error}</p>}
          <button className="float-right" onClick={handleSubmit}>
            Submit
          </button>
        </div>

        <style jsx>{`
          .container {
            width: 100%;
            margin: auto;
            padding: 10px;
            max-width: 550px;
          }

          h3 {
            margin-top: 15px;
            margin-bottom: 0 !important;
          }

          button {
            margin-top: 5px;
          }
        `}</style>
      </div>
    </RequireUser>
  )
}

export default connect(({ user }) => ({ user }))(Settings)
