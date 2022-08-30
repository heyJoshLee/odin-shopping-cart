import React from 'react';
import starFilled from '../assets/star-filled.png';
import starEmpty from '../assets/star-empty.png';

const StarRating = ({ rating }) => {

  const MAX_RATING = 5;
  const fullStarCount = Math.ceil(rating.rate);
  const emptyStarCount = MAX_RATING - fullStarCount;

  const renderFullStars = () => {
    const fullStarArray = new Array(fullStarCount).fill('');
    return fullStarArray.map((s, index) => {
      return <img key={`product-rating-star-full${index}`} className='rating-star' src={starFilled} />
    })
  }

  const renderEmptyStars = () => {
    const emptyStarArray = new Array(emptyStarCount).fill('');
    return emptyStarArray.map((s, index) => {
      return <img key={`product-rating-star-empty${index}`} className='rating-star' src={starEmpty} />
    })
  }

  return (
    <div className='star-rating-container'>
      {renderFullStars()}
      {renderEmptyStars()}
    </div>
  )
}




export default StarRating;