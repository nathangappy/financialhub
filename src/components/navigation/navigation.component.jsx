import React, { Component } from 'react';

import firebase from '../../firebase';

// import styles
import './navigation.styles.scss';

import SignedInLinks from '../signed-in-links/signed-in-links.component';
import SignedOutLinks from '../signed-out-links/signed-out-links.component';

class Navigation extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false,
      openSlideMenu: false
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
  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log('signed out'))
      .catch(err => console.log(err));
  };
  handleMobileClick = () => {
    this.setState({ openSlideMenu: !this.state.openSlideMenu });
  };
  render() {
    let openMobile = this.state.openSlideMenu;
    openMobile = openMobile === true ? 'open' : 'close';
    return (
      <header className='navigation'>
        <h1>FinanceHub</h1>
        {this.state.isLoggedIn ? (
          <SignedInLinks
            handleSignout={this.handleSignout}
            mobileMenu={openMobile}
            handleMobileClick={this.handleMobileClick}
          />
        ) : (
          <SignedOutLinks
            mobileMenu={openMobile}
            handleMobileClick={this.handleMobileClick}
          />
        )}
        <i className='fas fa-bars' onClick={this.handleMobileClick}></i>
      </header>
    );
  }
}

export default Navigation;
