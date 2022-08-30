import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
const ProductPreview = ({ product }) => {
  const { title, price, image, rating, id } = product;
  return (
    <div className='product-preview'>
      <Link to={`/products/${id}`}>
        <img className='product-image hover' src={image} />
      </Link>
      <Link to={`/products/${id}`}>
        <p className='product-title hover'>{title}</p>
      </Link>
      <p className='product-price'>${price}</p>
      <div className='rating-container'>
        <StarRating rating={rating} />
        <p>{`(${rating.count})`}</p>
      </div>
    </div>
  );
}

export default ProductPreview;
