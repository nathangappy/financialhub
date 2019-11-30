import React from 'react';

// import styles
import './navigation.styles.scss';

import SignedInLinks from '../signed-in-links/SignedInLinks.component';
import SignedOutLinks from '../signed-out-links/SignedOutLinks.component';

const Navigation = props => {
  console.log(props.user);
  return (
    <header className='navigation'>
      <h1>FinanceHub</h1>
      {props.user > 0 ? (
        <SignedInLinks handleSignout={props.handleSignout} />
      ) : (
        <SignedOutLinks />
      )}
    </header>
  );
};

export default Navigation;
