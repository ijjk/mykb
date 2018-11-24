import React, { useState, useEffect } from 'react'
import addBase from '../../util/addBase'
import actionTypes from '../actionTypes'
import { getStore } from '../store'

export default function Login({ doSetup }) {
  const [mounted, setMounted] = useState(false)
  const [pending, setPending] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const endpoint = addBase(doSetup ? '/register' : '/auth')

  useEffect(() => setMounted(true), [])

  const submit = e => {
    e.preventDefault()
    if (pending || !username || !password) return
    setPending(true)
    setError(null)

    fetch(endpoint, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res => {
        if (res.status === 429) {
          throw new Error('Too many login attempts')
        }
        return res.json()
      })
      .then(({ accessToken, message }) => {
        if (message) {
          throw new Error(message)
        }
        localStorage.setItem('jwt', accessToken)
        getStore().dispatch({
          type: actionTypes.SET_USER,
          user: {
            ...JSON.parse(atob(accessToken.split('.')[1])).user,
            jwt: accessToken,
          },
        })
      })
      .catch(err => {
        setError(err.message)
        setPending(false)
      })
  }

  return (
    <div className="fill">
      <h4>{doSetup ? 'Setup account' : 'Please login to continue'}</h4>

      <form action={endpoint} method="post">
        <label>
          Username:
          <input
            required
            autoFocus
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={e => setUsername(e.target.value.trim())}
          />
        </label>
        <label>
          Password:
          <input
            required
            type="password"
            name="password"
            value={password}
            placeholder="Super secret password"
            onChange={e => setPassword(e.target.value.trim())}
          />
        </label>
        {!mounted && <input type="hidden" value="true" name="form" />}
        {error && <p className="float-left">{error}</p>}
        <button disabled={pending} onClick={submit}>
          {pending ? 'Pending...' : 'SUBMIT'}
        </button>
      </form>

      <style jsx>{`
        div {
          width: 100%;
          margin: auto;
          padding: 10px;
          max-width: 550px;
          justify-content: center;
        }

        input {
          margin-top: 5px;
        }

        button {
          float: right;
        }
      `}</style>
    </div>
  )
}
