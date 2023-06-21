// import React, { useContext } from "react";
// import CartContext from "../../store/cart-context";
// import classes from "./CartItem.module.css";

// const CartItem = (props) => {
//   const ctx = useContext(CartContext);

//   const addItemHandler = () => {         //this function triggered when "Add" button is clicked
//     ctx.addItem({ ...props, quantity: 1 });
//     // console.log(props)
//   };

//   const removeItemHandler = () => {
//     ctx.removeItem(props.id);
//   };

//   return (
//     <li>
//       <div className={classes["cart-item"]}>
//         {/* <span className="item-name">{props.name}</span> */}
//         <h2>{props.name}</h2>
//         <div className={classes.summary}>
//           <span className={classes.price}> $ {props.price}</span>
//           <span className={classes.amount}>x {props.quantity}</span>
//         </div>
//         <div className={classes.actions}>
//           <button className="add" onClick={removeItemHandler}>
//             -
//           </button>
//           <button className="remove" onClick={addItemHandler}>
//             +
//           </button>
//         </div>
//       </div>
//     </li>
//   );
// };

// export default CartItem;