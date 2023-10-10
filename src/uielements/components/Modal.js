import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Login = () => {
  return (
    <div className="login-fields">
      <input type="text" className="login-inputs__username"></input>
      <input type="text" className="login-inputs__password"></input>
      <button className="login-button">LOGIN</button>
    </div>
  );
};
const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="modal-background">
      <Login />
    </div>,
    document.getElementById("modal-hook")
  );
};

export default Modal;
