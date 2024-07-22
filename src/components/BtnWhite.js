import React from "react";
import "./Btn.css";

const BtnGreen = ({ children, onClick }) => {
  return (
    <button className="custom-button white" onClick={onClick}>
      {children}
    </button>
  );
};

export default BtnGreen;
