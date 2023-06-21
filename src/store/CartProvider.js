// import React, { useState } from "react";
// import CartContext from "./cart-context";

// const CartProvider = (props) => {
//   const [items, updateItems] = useState([]);

//   const addItemToCartHandler = (item) => {
//     updateItems([...items, item]);
//     // items.push(item)
//     let idx = items.findIndex((ele) => {
//       return ele.id === item.id;
//     });
//     let existingItem = items[idx];
//     if (existingItem) 
//     {
//       let obj = 
//       {
//         ...existingItem,
//         quantity: Number(existingItem.quantity) + Number(item.quantity),
//       };
//       items[idx] = obj;
//       updateItems([...items]);
//     } 
//     else 
//     {
//       updateItems([...items, item]);
//     }
//   };

//   const removeItemFromCartHandler = (id) => 
//   {
//     // items
//     let idx = items.findIndex((ele) => 
//     {
//       return ele.id === id;
//     });
//     let existingItem = items[idx];
//     if (existingItem.quantity === 1 || existingItem.quantity === 0) 
//     {
//       items.splice(idx, 1);
//       updateItems([...items]);
//     } 
//     else
//     {
//       console.log(existingItem)
//       let obj = 
//       {
//         ...existingItem,
//         quantity: existingItem.quantity -1,
//       };
//       items[idx] = obj;
//       updateItems([...items]);
//     }
//   };

//   const cartContext = {
//     items: items,
//     totalAmount: 0,
//     addItem: addItemToCartHandler,
//     removeItem: removeItemFromCartHandler,
//   };

//   return (
//     <CartContext.Provider value={cartContext}>
//       {/* {console.log('Inside CartContext.Provider', cartContext)} */}
//       {props.children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;