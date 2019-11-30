import React, { Component } from 'react';

import firebase from '../../firebase';

import './signup.styles.scss';

import Navigation from '../../components/navigation/navigation.component';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
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
        <h1>Become a Member of Our Finance Community</h1>
        <form action='' onSubmit={this.handleSignupSubmit}>
          <label htmlFor='email' />
          <input type='email' name='email' value={this.state.email} onChange={this.handleSignupChange} />
          <label htmlFor='password' />
          <input type='password' name='password' value={this.state.password} onChange={this.handleSignupChange} />
          <button>Become a Member</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
