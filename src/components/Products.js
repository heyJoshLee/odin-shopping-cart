import React, { useState, useEffect } from 'react';
import ProductPreview from './ProductPreview';

const Products = () => {

  const [products, setProducts] = useState([]);
  const BASE_API_URL = 'https://fakestoreapi.com'

  const fetchProducts = async () => {
    const response = await fetch(`${BASE_API_URL}/products`);
    const data = await response.json();
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderProductPreviews = () => {
    return products.map((product) => {
      return <ProductPreview product={product} key={product.id} />
    })
  }



  return (
    <div className='products'>
      <h1>Shop Products</h1>
      <div className='product-previews-container'>
        {renderProductPreviews()}
      </div>
    </div>
  );
}

export default Products;