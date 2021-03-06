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
      successfulLogin: false
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
      .then(this.setState({ successfulLogin: true }))
      .then(() => this.props.history.push('/'))
      .then(this.setState({ email: '', password: '' }))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <Navigation />
        <div className='signin'>
          <div className='signin-wrapper'>
            <div className='signin-form'>
              <h1>Sign in to your account</h1>
              <form
                action=''
                onSubmit={this.handleSignInSubmit}
                autoComplete='off'
              >
                <label htmlFor='email' />
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  value={this.state.email}
                  onChange={this.handleSignInChange}
                />
                <label htmlFor='password' />
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={this.state.password}
                  onChange={this.handleSignInChange}
                />
                <button>Sign In</button>
              </form>
            </div>
            {/* <div className='signin-info'>
              <h3>who we are</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
                quam animi reiciendis odio quaerat commodi saepe assumenda
                necessitatibus recusandae architecto, nihil quis eum iure, non
                maiores facilis perferendis? Voluptate, accusantium quis eos
                quos cupiditate, dolor molestiae in consectetur doloremque
                expedita autem consequuntur, illum suscipit? Possimus et quam
                corrupti iste quo veritatis, omnis, incidunt inventore beatae
                aliquid, quod sint consequatur rem laboriosam quidem laudantium
                similique dolores excepturi consequuntur quos pariatur eligendi
                maxime! Ad soluta vel sit quibusdam deleniti obcaecati fugiat
                est necessitatibus tempore, harum aspernatur labore, non ea modi
                nisi placeat delectus suscipit! Nisi magni sequi rem blanditiis,
                neque earum eos.
              </p>
            </div> */}
            {this.state.successfulLogin ? (
              <div className='signup-feedback'>
                <i class='far fa-check-circle'></i>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
