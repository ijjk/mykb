import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doLogin } from '../redux/actions/userAct';  
import Spinner from './Spinner'; 
import PaddedRow from './PaddedRow'; 
import mapUser from '../util/mapUser'; 

class Login extends Component {
  state = {
    email: '',
    pass: ''
  };

  updVal = e => {
    const el = e.target;
    const val = el.value;  
    if(el.getAttribute('type') === 'email') {
      return this.setState({ email: val }); 
    }
    this.setState({ pass: val }); 
  }

  submit = e => {
    const { pending } = this.props.user; 
    let { email, pass } = this.state;  
    email = email.trim(); 
    pass = pass.trim(); 
    e.preventDefault();
    
    if(pending || email.length === 0 || pass.length == 0) {
      return; 
    }
    doLogin({ email, password: pass }); 
  }
  
  render() {
    const { pending, error } = this.props.user; 
    return(
      <div className='container content'>
        <PaddedRow amount={25} vCenter>
          <h4>Please login to continue</h4>
          <form noValidate>
            <fieldset>
              <label htmlFor='email'>Email:</label>
              <input type='email' id='email' name='email'
                autoFocus placeholder='John@deux.com'
                onChange={this.updVal} 
              />
              <label htmlFor='pass'>Pass:</label>
              <input type='password' id='pass' name='password'
                placeholder='Super secret password...' onChange={this.updVal} 
              />
            </fieldset>
            <button className={'float-right' + (pending ? ' disabled' : '')}
              onClick={this.submit}
            >
              {pending ? <Spinner /> : 'Submit'}
            </button>

            {!error ? null : <p>{error}</p>}
          </form>
        </PaddedRow>
      </div>
    );
  }
}
export default connect(mapUser)(Login);