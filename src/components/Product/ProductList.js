import React from 'react';

function ProductList({ products, onDeleteProduct }) {
  const handleDeleteProduct = (productId) => {
    onDeleteProduct(productId);
  };

  return (
    <div>
      <h2> Products </h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.id} - {product.name} - Rs {product.price} - Size: {product.size}
            <button onClick={() => handleDeleteProduct(product.id)}> Delete Product</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
