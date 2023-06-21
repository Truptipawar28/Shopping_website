import React, { useState } from 'react';
import ProductForm from './components/Product/ProductForm';
import ProductList from './components/Product/ProductList';
import TotalPrice from './components/Product/TotalPrice';

function App() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct, selectedSize) => {
    const productWithSize = { ...newProduct, size: selectedSize };
    setProducts([...products, productWithSize]);
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const calculateTotalPrice = () => {
    return products.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div>
      <h1>Product Management</h1>
      <ProductForm onAddProduct={handleAddProduct} />
      <ProductList products={products} onDeleteProduct={handleDeleteProduct} />
      <TotalPrice totalPrice={calculateTotalPrice()} />
    </div>
  );
}

export default App;
