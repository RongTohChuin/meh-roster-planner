import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="modal-background">hi</div>,
    document.getElementById("modal-hook")
  );
};

export default Modal;
