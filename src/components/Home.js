import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='home'>
      <h1>Welcome to My Store</h1>
      <Link to='products'>Shop Now</Link>
    </div>
  );
}

export default Home;