import React, { useState } from 'react';

function ProductForm({ onAddProduct }) {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const handleProductIdChange = (event) => {
    setProductId(event.target.value);
  };

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductPriceChange = (event) => {
    setProductPrice(event.target.value);
  };

  const handleProductQuantityChange = (event) => {
    setProductQuantity(event.target.value);
  };

  const handleSizeSelection = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleAddProduct = (event) => {
    event.preventDefault();
    const newProduct = {
      id: productId,
      name: productName,
      price: productPrice,
      quantity: productQuantity,
      size: selectedSize,
    };
    onAddProduct(newProduct);
    setProductId('');
    setProductName('');
    setProductPrice('');
    setProductQuantity('');
    setSelectedSize('');
  };

  return (
    <form className="product-form" onSubmit={handleAddProduct}>
      <label htmlFor="productId">T-shirt Name :</label>
      <input
        type="text"
        id="productId"
        value={productId}
        onChange={handleProductIdChange}
      />

      <label htmlFor="productName">Description :</label>
      <input
        type="text"
        id="productName"
        value={productName}
        onChange={handleProductNameChange}
      />

      <label htmlFor="productPrice">Price :</label>
      <input
        type="number"
        id="productPrice"
        value={productPrice}
        onChange={handleProductPriceChange}
      />

      <label htmlFor="productQuantity">Quantity Available:</label>
      <input
        type="number"
        id="productQuantity"
        value={productQuantity}
        onChange={handleProductQuantityChange}
      />

      <label htmlFor="productSize">Select Size:</label>
      <select id="productSize" value={selectedSize} onChange={handleSizeSelection}>
        <option value="">Select</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>

      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;
