import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Close from '../assets/close.png';
import Plus from '../assets/plus.png';
import Minus from '../assets/minus.png';
const ShoppingCartItem = ({ product, deleteFromCart, setProductQuantitiy, setNotificationMessage }) => {
  const { title, image, price, id } = product.product;
  const { quantity } = product;
  const MAX_QUANTITY = 99;
  const MIN_QUANTITY = 1;

  const calculateProductTotal = (product, quantity) => product.price * quantity;

  const confirmDelete = () => {
    const wantToDelete = window.confirm('Are you sure you want to delete this item from your cart?')
    if (wantToDelete) {
      deleteFromCart(product.product);
      setNotificationMessage(`Deleted ${product.product.title} from cart.`)
    }
  }

  const increaseQuantity = () => {
    if (quantity >= MAX_QUANTITY) {
      return;
    }
    setProductQuantitiy(product, quantity + 1);
  }

  const decreaseQuantity = () => {
    if (quantity === MIN_QUANTITY) {
      confirmDelete()
    } else {
      setProductQuantitiy(product, quantity - 1);
    }
  }



  return (
    <tr className='shopping-cart-item'>
      <td className='product-image hover'>
        <Link to={`../products/${id}`} >
          <img src={image} />
        </Link>
      </td>
      <td className='product-title hover'>
        <Link to={`../products/${id}`}>
          {title}
        </Link>
      </td>
      <td className='product-price'>${price}</td>
      <td className='product-quantity'>
        <img src={Minus} className='hover' onClick={decreaseQuantity} />
        {quantity}
        <img src={Plus} className='hover' onClick={increaseQuantity} />

        <img className='delete-item-button hover' onClick={confirmDelete} src={Close} />
      </td>
      <td className='product-total'>${calculateProductTotal(product.product, quantity)}</td>
    </tr>
  )
}

export default ShoppingCartItem;