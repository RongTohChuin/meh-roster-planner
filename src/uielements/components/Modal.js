import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Login = () => {
  return (
    <div className="login-fields">
      <div className="login-inputs__username">
        <h3 className="login-inputs__username-label">Username:</h3>
        <input
          type="text"
          className="login-inputs__username"
          id="login-username"
        ></input>
      </div>
      <div className="login-inputs__password">
        <h3 className="login-inputs__password-label">Password:</h3>
        <input
          type="text"
          className="login-inputs__password"
          id="login-password"
        ></input>
      </div>
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
