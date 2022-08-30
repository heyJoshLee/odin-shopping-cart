import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartItem from './ShoppingCartItem';
const Cart = ({ cart, deleteFromCart, setProductQuantitiy, setNotificationMessage }) => {

  const calculateCartTotal = (cart) => {
    let total = 0;
    total = cart.reduce((previousValue, currentProduct) => {
      return previousValue + (currentProduct.quantity * currentProduct.product.price);
    }, total);
    return total.toFixed(2);
  }

  const renderEmptyCartMessage = () => {
    return (
      <div className='empty-cart-message'>
        <h1>Your cart is empty!</h1>
        <Link to='../products'>Shop Products Now</Link>
      </div>
    )
  }



  if (cart.length === 0) {
    return renderEmptyCartMessage();
  }

  return (
    <div className='shopping-cart'>
      <h1>Your Shopping Cart</h1>
      <table className='shopping-cart-table'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return <ShoppingCartItem
              product={item}
              key={item.product.id}
              deleteFromCart={deleteFromCart}
              setProductQuantitiy={setProductQuantitiy}
              setNotificationMessage={setNotificationMessage} />
          })}
          <tr className='shopping-cart-total-row'>
            <td></td>
            <td></td>
            <td></td>
            <td>Total</td>
            <td>${calculateCartTotal(cart)}</td>
          </tr>
        </tbody>
      </table>
      <button className='to-checkout-button hover'>Checkout</button>

    </div>
  );
}

export default Cart;