import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddToCartSection from './AddToCartSection';
import StarRating from './StarRating';

const Product = ({ addToCart, setNotificationMessage }) => {
  const { id: paramsId } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct(paramsId);
  }, [])

  const fetchProduct = async (idToFetch) => {
    const BASE_API_URL = 'https://fakestoreapi.com/';

    const response = await fetch(`${BASE_API_URL}products/${paramsId}`);

    try {
      const data = await response.json();
      setProduct(data)
    } catch (error) {
      console.log(error)
    }

  }

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div className='product'>
      <div className='left-pane'>
        <img className='product-image' src={product.image} />
      </div>
      <div className='right-pane'>
        <h1>{product.title}</h1>
        <StarRating rating={product.rating} />
        <p className='product-price'>${product.price}</p>
        <p className='product-description'>{product.description}</p>
        <p className='product-category'>{product.category}</p>

        <AddToCartSection product={product}
          addToCart={addToCart}
          setNotificationMessage={setNotificationMessage} />
      </div>
    </div>
  );
}

export default Product;