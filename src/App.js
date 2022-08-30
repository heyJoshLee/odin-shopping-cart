import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import Product from './components/Product';
import Products from './components/Products';
import NotificationBox from './components/NotificationBox';


function App() {

  const intialStartState = JSON.parse(localStorage.getItem('cart')) || []

  const [cart, setCart] = useState(intialStartState);
  const [notificationMessage, setNotificationMessage] = useState(null);

  const saveCartToLocalStorage = (cartValues) => {
    localStorage.setItem('cart', JSON.stringify(cartValues));
  }

  const addToCart = (productToAdd, quantity) => {
    let newCartValues = []

    let namesOfItemsInCart = cart.map((product) => {
      return product.product.title
    }, [])


    if (namesOfItemsInCart.includes(productToAdd.title)) {
      newCartValues = cart.map((product) => {
        if (product.product.title !== productToAdd.title) {
          return product;
        } else {
          return { product: productToAdd, quantity: product.quantity + quantity }
        }
      });
    } else {
      newCartValues = [
        ...cart,
        {
          product: productToAdd,
          quantity
        }
      ]
    }
    setCart(newCartValues);
    saveCartToLocalStorage(newCartValues)
  }

  const deleteFromCart = (productToDelete) => {

    let newCartValues = cart.filter(product => {
      return product.product.id !== productToDelete.id;
    })
    setCart(newCartValues);
    saveCartToLocalStorage(newCartValues);
  }


  const setProductQuantitiy = (productToSet, newQuantity) => {
    let newCartValues = cart.map((product) => {
      if (product.product.title !== productToSet.product.title) {
        return product;
      }
      return { product: productToSet.product, quantity: newQuantity }
    });
    setCart(newCartValues);
    saveCartToLocalStorage(newCartValues);
  }

  const clearNotificationMessage = () => {
    setNotificationMessage(null);
  }

  return (
    <div className="App">
      <div id='page-container'>
        <Header cart={cart} />
        <div className='main-content'>
          <NotificationBox message={notificationMessage}
            clearNotificationMessage={clearNotificationMessage} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart"
              element={<Cart cart={cart}
                deleteFromCart={deleteFromCart}
                setProductQuantitiy={setProductQuantitiy}
                setNotificationMessage={setNotificationMessage}
              />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id"
              element={<Product addToCart={addToCart}
                setNotificationMessage={setNotificationMessage} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div >
  );
}

export default App;
