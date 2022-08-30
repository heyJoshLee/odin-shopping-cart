import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
const Header = ({ cart }) => {
  return (
    <div className='header'>
      <Link to='/'>
        <div className='site-logo-container'>
          Cool Products
        </div>
      </Link>
      <Nav cart={cart} />
    </div>
  );
}

export default Header;