import React from 'react';

import { Link } from 'react-router-dom';

import './signed-in-links.styles.scss';

const SignedInLinks = ({ mobileMenu, handleMobileClick, handleSignout }) => (
  <ul className={mobileMenu === 'open' ? 'links-open' : 'links-closed'}>
    <li onClick={handleMobileClick}>
      <Link to='/' className='navLink'>
        Home
      </Link>
    </li>
    <li onClick={handleMobileClick}>
      <Link to='/portfolio' className='navLink'>
        Portfolio
      </Link>
    </li>
    <li onClick={handleMobileClick}>
      <Link to='/' className='navLink' onClick={handleSignout}>
        Sign Out
      </Link>
    </li>
    <li onClick={handleMobileClick}>
      <i className='fas fa-minus-circle' onClick={handleMobileClick}></i>
    </li>
  </ul>
);

export default SignedInLinks;
