import React, { Component } from 'react';

import firebase from '../../firebase';

import './signin.styles.scss';

import Navigation from '../../components/navigation/navigation.component';

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      user: {}
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        console.log('logged in');
        this.setState({ user: user });
      }
    });
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
      .then(() => this.setState({ email: '', password: '' }))
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
        <Navigation user={this.state.user} handleSignout={this.handleSignout} />
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
