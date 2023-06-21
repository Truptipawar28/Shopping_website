// import React, { useContext } from "react";
// import classes from "./Cart.module.css";
// import Modal from "../UI/Modal";
// import CartContext from "../../store/cart-context";
// import CartItem from "./CartItem";

// const Cart = (props) => {
//   const cartCtx = useContext(CartContext);
//   let total = 0;
//   // console.log(${cartCtx.totalAmount}`)

//   const cartItems = (
//     // here below we will use classes['cart-items'] because there is a - there between cart & items.
//     <ul className={classes[classes["cart-items"]]}>
//       {cartCtx.items.map((item) => {
//         total = total + item.price * item.quantity;
//         return (
//           <CartItem
//             id={item.id}
//             key={item.id}
//             name={item.name}
//             price={item.price}
//             quantity={item.quantity}
//           ></CartItem>
//         );
//       })}
//     </ul>
//   );

//   return (
//     <Modal onClose={props.onClose}>
//       <div>{cartItems}</div>
//       <div className={classes.total}>
//         <span>Total Amount</span>
//         <span> $ {total}</span>
//         {/* Here above we have right 985 amount as hard coded but later we will derive dynamically */}
//       </div>
//       <div className={classes.actions}>
//         <button className={classes["button--alt"]} onClick={props.onClose}>
//           Close
//         </button>
//         <button className={classes.button}>Order</button>
//       </div>
//     </Modal>
//   );
// };

// export default Cart;






// // in which CartContext uses to access and display the cart items and total amount 
// //and also render modal container and actions buttons for closing and placing order