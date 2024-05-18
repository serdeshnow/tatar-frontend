import React from "react";
import "./Modal.css";
import Button from "../Button/Button.jsx";
import reactDOM from "react-dom";

export default function Modal({ open, onClose, title, children, ...props }) {
  if (!open) return null;
  return reactDOM.createPortal(
    <>
      <div className="overlay" />
      <div {...props} className="modal">
        <Button onClick={onClose} className="close-btn">
          x
        </Button>
        <div className="child-wrapper">
          <h2 className="child-title">{title.toUpperCase()}</h2>
          <p className="child-desc">{children}</p>
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
}
