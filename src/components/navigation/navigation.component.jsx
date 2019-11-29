import React from 'react';

// import styles
import './navigation.styles.scss';

import SignedInLinks from '../signed-in-links/SignedInLinks.component';
import SignedOutLinks from '../signed-out-links/SignedOutLinks.component';

const Navigation = props => {
  let isLoggedIn;
  if (props.user) {
    isLoggedIn = true;
  } else {
    isLoggedIn = false;
  }
  return (
    <header className='navigation'>
      <h1>FinanceHub</h1>
      {isLoggedIn ? <SignedInLinks /> : <SignedOutLinks />}
    </header>
  );
};

export default Navigation;
