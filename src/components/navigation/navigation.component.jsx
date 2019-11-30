import React, { Component } from 'react';

import firebase from '../../firebase';

// import styles
import './navigation.styles.scss';

import SignedInLinks from '../signed-in-links/SignedInLinks.component';
import SignedOutLinks from '../signed-out-links/SignedOutLinks.component';

class Navigation extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ isLoggedIn: true });
      } else {
        this.setState({ isLoggedIn: false });
      }
    });
  }
  render() {
    return (
      <header className='navigation'>
        <h1>FinanceHub</h1>
        {this.state.isLoggedIn ? <SignedInLinks handleSignout={this.props.handleSignout} /> : <SignedOutLinks />}
      </header>
    );
  }
}

export default Navigation;
