import React, { Component } from 'react';

import firebase from '../../firebase';

import './signin.styles.scss';

import Navigation from '../../components/navigation/navigation.component';

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };
  }
  handleSignInChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSignInSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => console.log(this.props.history.push('/')))
      .catch(err => console.log(err));
  };
  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log('signed the fuck out'))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <Navigation handleSignout={this.handleSignout} />
        <h1>Sign In To Your Account</h1>
        <form action='' onSubmit={this.handleSignInSubmit}>
          <label htmlFor='email' />
          <input
            type='email'
            name='email'
            value={this.state.email}
            onChange={this.handleSignInChange}
          />
          <label htmlFor='password' />
          <input
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleSignInChange}
          />
          <button>Sign In</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
