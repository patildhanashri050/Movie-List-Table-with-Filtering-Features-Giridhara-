import React from "react";
import ReactDOM from "react-dom";
import "./Popup.css";

export default function Popup({ children, onClose }) {
  return ReactDOM.createPortal(
    <div className="popup-backdrop" onClick={onClose}>
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById("popup-root")
  );
}
