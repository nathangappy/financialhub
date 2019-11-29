import React from 'react';
import { Link } from 'react-router-dom';

// import styles
import './navigation.styles.scss';

const Navigation = () => (
  <header className='navigation'>
    <h1>FinanceHub</h1>
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
        <Link to='/portfolio' className='navLink'>
          Portfolio
        </Link>
      </li>
      <li>
        <Link to='/community' className='navLink'>
          Community
        </Link>
      </li>
      <li>
        <Link to='/signup' className='navLink'>
          Sign Up
        </Link>
      </li>
    </ul>
  </header>
);

export default Navigation;
