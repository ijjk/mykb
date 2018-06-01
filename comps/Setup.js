import React, { Component } from 'react'
import { doLogin } from '../redux/actions/userAct'
import PaddedRow from './PaddedRow'
import Spinner from './Spinner'
import getUrl from '../util/getUrl'

export default class Setup extends Component {
  state = {
    email: '',
    password: '',
    confirmPass: '',
    pending: false,
    error: null,
  }
  updVal = e => {
    const el = e.target
    let key = 'email'
    if (el.id === 'pass') key = 'password'
    else if (el.id === 'pass2') key = 'confirmPass'
    const obj = {}
    obj[key] = el.value
    this.setState(obj)
  }
  submit = e => {
    e.preventDefault()
    let { email, password, confirmPass, pending } = this.state
    if (pending) return
    email = email.trim()
    password = password.trim()
    confirmPass = confirmPass.trim()
    const hasEmpty = [email, password, confirmPass].some(
      val => val.length === 0
    )

    if (hasEmpty) return
    if (password.toLowerCase() !== confirmPass.toLowerCase()) {
      return this.setState({ error: "Passwords don't match" })
    }
    this.setState({ pending: true, error: null })
    const defaultErr = 'Could not create account'

    fetch(getUrl('users'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, admin: true }),
    })
      .then(res => {
        if (res.ok) {
          return doLogin({ email, password }, null, true)
        }
        res.json().then(({ message }) => {
          const error = message || defaultErr
          this.setState({ pending: false, error })
        })
      })
      .catch(err => {
        const error = err.message || defaultErr
        this.setState({ pending: false, error })
      })
  }
  render() {
    const { pending, error } = this.state
    return (
      <div className="container content">
        <PaddedRow amount={25} vCenter>
          <div className="column">
            <h3>Setup account</h3>
            <form noValidate>
              <fieldset>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  autoFocus
                  id="email"
                  placeholder={"Your email (does't have to be actual email)"}
                  onChange={this.updVal}
                />
                <label htmlFor="pass">Password:</label>
                <input
                  type="password"
                  id="pass"
                  maxLength={512}
                  placeholder="A super secret password"
                  onChange={this.updVal}
                />
                <label htmlFor="pass2">Confirm Password:</label>
                <input
                  type="password"
                  id="pass2"
                  maxLength={512}
                  placeholder="Confirm your super secret password"
                  onChange={this.updVal}
                />
                <button className="float-right" onClick={this.submit}>
                  {pending ? <Spinner /> : 'Submit'}
                </button>
                {!error ? null : <p className="danger">{error}</p>}
              </fieldset>
            </form>
          </div>
        </PaddedRow>
      </div>
    )
  }
}
