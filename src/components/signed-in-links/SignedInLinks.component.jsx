import React from 'react';

import { Link } from 'react-router-dom';

const SignedInLinks = props => (
  <ul>
    <li>
      <Link to='/' className='navLink'>
        Home
      </Link>
    </li>
    <li>
      <Link to='/dashboard' className='navLink'>
        Dashboard
      </Link>
    </li>
    <li>
      <Link to='/community' className='navLink'>
        Community
      </Link>
    </li>
    <li>
      <Link to='/portfolio' className='navLink'>
        Portfolio
      </Link>
    </li>
    <li>
      <Link to='/' className='navLink' onClick={props.handleSignout}>
        Sign Out
      </Link>
    </li>
  </ul>
);

export default SignedInLinks;
