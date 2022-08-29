import React from 'react';
import Nav from './Nav';
const Header = () => {
  return (
    <div className='header'>
      <div className='site-logo-container'>
        Cool Products
      </div>
      <Nav />
    </div>
  );
}

export default Header;