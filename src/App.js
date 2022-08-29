import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import Product from './components/Product';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <div id='page-container'>
        <Header />
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/" element={<Product />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div >
  );
}

export default App;
