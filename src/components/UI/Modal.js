// import React, { Fragment } from "react";
// import ReactDOM  from "react-dom";
// import classes from "./Modal.module.css";

// const Backdrop = (props) => {
//   return <div className={classes.backdrop} onClick={props.onClose}/>;
// };

// const ModalOverlay = (props) => {
//   return (
//     <div className={classes.modal}>
//       <div className={classes.content}>{props.children}</div>
//     </div>
//   );
// };

// // Create Portal need second argument though because it does not need to know what to portal BUT ALSO WHERE TO PORTAL

// const portalElement = document.getElementById('overlays');

// const Modal = (props) => {
//   return (
//     <Fragment>
//       {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
//       {ReactDOM.createPortal(
//         <ModalOverlay>{props.children}</ModalOverlay>,
//         portalElement
//       )}
//     </Fragment>
//   );
// };

// export default Modal;

// // Here we have created this small component to WRAPP THE CART COMPONENT
// // BELOW IS ABOUT THE MODAL COMPONENT
// //And in there now backdrop and modal overlay and this is how we could do it, or actually modal overlay like this to
// //forward the content between the modal tech. But this is how we could do it if we would not be using the Portal.
// // Now we technically don't have to use a Portal but to ensure that our HTML code is not all over the place
// // in the final application, I will use Portals here. And therefore I will output two dynamic expressions here.
// //Side-by-side and that will call the create Portal method