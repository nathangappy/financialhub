import React from 'react';

import { Link } from 'react-router-dom';

import './signed-out-links.styles.scss';

const SignedOutLinks = ({ mobileMenu, handleMobileClick }) => {
  return (
    <ul className={mobileMenu === 'open' ? 'links-open' : 'links-closed'}>
      <li onClick={handleMobileClick}>
        <Link to='/' className='navLink'>
          Home
        </Link>
      </li>
      <li onClick={handleMobileClick}>
        <Link to='/dashboard' className='navLink'>
          Dashboard
        </Link>
      </li>
      <li onClick={handleMobileClick}>
        <Link to='/signin' className='navLink'>
          Sign In
        </Link>
      </li>
      <li onClick={handleMobileClick}>
        <Link to='/signup' className='navLink'>
          Sign Up
        </Link>
      </li>
      <li onClick={handleMobileClick}>
        <i className='fas fa-minus-circle' onClick={handleMobileClick}></i>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
