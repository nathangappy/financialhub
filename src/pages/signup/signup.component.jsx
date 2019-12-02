import React, { Component } from 'react';

import firebase from '../../firebase';

import './signup.styles.scss';

import Navigation from '../../components/navigation/navigation.component';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      successfulSignup: false
    };
  }
  handleSignupChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSignupSubmit = async e => {
    e.preventDefault();
    try {
      const { email, password } = this.state;
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      this.setState({ successfulSignup: true });
      this.setState({ email: '', password: '' });
      this.props.history.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div>
        <Navigation />
        <div className='signup'>
          <div className='signup-form'>
            <h1>Join our community</h1>
            <form
              action=''
              onSubmit={this.handleSignupSubmit}
              autoComplete='off'
            >
              <label htmlFor='email' />
              <input
                type='email'
                name='email'
                placeholder='Email'
                value={this.state.email}
                onChange={this.handleSignupChange}
              />
              <label htmlFor='password' />
              <input
                type='password'
                name='password'
                placeholder='Password'
                value={this.state.password}
                onChange={this.handleSignupChange}
              />
              <button>Become a Member</button>
            </form>
          </div>
          {this.state.successfulSignup ? (
            <div className='signup-feedback'>
              <i class='far fa-check-circle'></i>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default SignUp;
