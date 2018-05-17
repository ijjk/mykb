import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import fetch from 'isomorphic-unfetch'; 
import Page from '../comps/Page'; 
import PaddedRow from '../comps/PaddedRow'; 
import Spinner from '../comps/Spinner'; 
import updStateFromId from '../util/updStateFromId'; 
import mapUser from '../util/mapUser'; 
import getUrl from '../util/getUrl'; 
import getJwt from '../util/getJwt'; 

class Settings extends Component {
  state = {
    pending: false,
    passErr: null,
    curPass: '',
    newPass: '',
    confPass: ''
  }
  updVal = updStateFromId.bind(this); 
  submit = async e => {
    e.preventDefault(); 
    const { pending, curPass, newPass, confPass } = this.state;
    const { email, _id } = this.props.user; 
    if(pending) return; 
    const doErr = passErr => this.setState({ pending: false, passErr }); 
    const vals = { 
      'Current password': curPass, 
      'New password': newPass, 
      'Confirm new password': confPass 
    }; 
    const keys = Object.keys(vals); 
    for(let i = 0; i < keys.length; i++) {
      let key = keys[i], val = vals[key]; 
      if(val.length === 0) return doErr(`${key} is required`); 
    }
    if(newPass !== confPass) return doErr('New passwords don\'t match');
    
    this.setState({ passErr: null, pending: true }); 
    const updRes = await fetch(getUrl('users/' + _id), {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Authorization: getJwt() },
      body: JSON.stringify({ email, password: curPass, newPassword: newPass })
    }).catch(doErr); 
    if(updRes.ok) {
      this.setState({ 
        curPass: '', newPass: '', confPass: '',
        passErr: 'Password updated successfully', 
        pending: false 
      }); 
    } else {
      let message = 'failed to update password';
      try { 
        const data = await updRes.json(); 
        message = data.message || message; 
      } catch (err) { doErr(err.message); }
      doErr(message); 
    }
  }
  render() {
    const { 
      pending, passErr, curPass, 
      newPass, confPass 
    } = this.state; 
    
    return (
      <Page>
        <PaddedRow amount={25}>
          <h3>Account settings</h3>
          <hr />
          <form noValidate style={{ padding: '0 0 45px' }}>
            <h4>Change password</h4>
            <fieldset>
              <label htmlFor='curPass'>Current Password</label>
              <input type='password' id='curPass' onChange={this.updVal} 
                placeholder='Current super secret password...' value={curPass}
              />
              <label htmlFor='newPass'>New Password</label>
              <input type='password' id='newPass' onChange={this.updVal} 
                placeholder='New super secret password...' value={newPass}
              />
              <label htmlFor='confPass'>Confirm New Password</label>
              <input type='password' id='confPass' onChange={this.updVal} 
                placeholder='Confirm new super secret password...' value={confPass}
              />
            </fieldset>
            <button onClick={this.submit}
              className={'float-right' + (pending ? ' disabled' : '')}
            >
              {pending ? <Spinner /> : 'Submit'}
            </button>
            {!passErr ? null : <p>{passErr}</p>}
          </form>
        </PaddedRow>
      </Page>
    ); 
  }
}
export default connect(mapUser)(Settings); 