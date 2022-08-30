import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from '../assets/shopping-cart.png';
const Nav = ({ cart }) => {
  return (
    <nav>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/products'><li>Products</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='cart'>
          <div className='shoping-cart-nav-container'>
            <img src={ShoppingCart} />
            {cart.length > 0 &&
              <div className='shopping-cart-quantity-bubble'>{cart.length}</div>
            }
          </div>
        </Link>

      </ul>
    </nav >
  );
}

export default Nav;