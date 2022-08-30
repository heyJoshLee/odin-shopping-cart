import React, { useState } from 'react';
import Plus from '../assets/plus.png';
import Minus from '../assets/minus.png';


const AddToCartSection = ({ product, addToCart, setNotificationMessage }) => {

  const MAX_QUANTITY = 99;
  const MIN_QUANTITY = 1;

  const [formValues, setFormValues] = useState({
    product,
    quantity: 1
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addToCart(product, formValues.quantity)
    setNotificationMessage(`Added ${product.title} x ${formValues.quantity} to cart.`)
  }

  const handleChange = (e) => {

    let valueToSet = e.target.value;

    if (!isNaN(valueToSet)) {
      valueToSet = Number(valueToSet);
    }
    setFormValues({
      [e.target.name]: valueToSet
    });
  }

  const increaseQuantity = () => {
    let newValue = formValues.quantity + 1;
    if (newValue > MAX_QUANTITY) {
      newValue = MAX_QUANTITY;
    }
    setFormValues({
      ...formValues,
      quantity: newValue
    });
  }

  const decreaseQuantity = () => {

    let newValue = formValues.quantity - 1;
    if (newValue < MIN_QUANTITY) {
      newValue = MIN_QUANTITY;
    }
    setFormValues({
      ...formValues,
      quantity: newValue
    });
  }


  return (
    <div className='add-to-cart-section'>
      <form onSubmit={handleSubmit} >
        <legend>Quantity</legend>
        <div className='quantity-container'>
          <img onClick={decreaseQuantity} className='hover' src={Minus} />
          <input type='number' name='quantity' min={MIN_QUANTITY} max={MAX_QUANTITY} onChange={handleChange} value={formValues.quantity} />
          <img onClick={increaseQuantity} className='hover' src={Plus} />
          <button className='hover'>Add to Cart</button>
        </div>
      </form>

    </div>
  );
}

export default AddToCartSection;