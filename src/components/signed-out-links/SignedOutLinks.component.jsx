import React from 'react';

import { Link } from 'react-router-dom';

const SignedOutLinks = () => (
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
      <Link to='/signin' className='navLink'>
        Sign In
      </Link>
    </li>
    <li>
      <Link to='/signup' className='navLink'>
        Sign Up
      </Link>
    </li>
  </ul>
);

export default SignedOutLinks;
