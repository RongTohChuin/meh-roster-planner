import React, { ReactDOM } from "react";
import "./Modal.css";

const ModalBackground = (props) => {
  return ReactDOM.createPortal(
    <div className="modal-background">hi</div>,
    document.getElementById("modal-hook")
  );
};

export default ModalBackground;
