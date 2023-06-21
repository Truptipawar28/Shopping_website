import React, { useState } from 'react';

import ProductForm from './ProductForm';
// import './Button.module.css';

const Button = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    
    const saveProductDataHandler = (enteredExpenseData) => {
        const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString()
        };
        props.onAddProduct(expenseData);
        setIsEditing(false);
      };
    
      const startEditingHandler = () => {
        setIsEditing(true);
      };
       
      const stopEditingHandler = () => {
        setIsEditing(false);
      };
  return (
    <div>
        {!isEditing && (
    <button className="button" onClick={startEditingHandler}>
    </button>
    )}
 {isEditing && (
      <ProductForm 
      onSaveExpenseData={saveProductDataHandler} 
      onCancel={stopEditingHandler} 
      />
    )}
    </div>
  );
}

export default Button;
