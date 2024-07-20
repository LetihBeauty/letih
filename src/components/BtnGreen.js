import React from "react";
import "./BtnGreen.css";

const BtnGreen = ({ children, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default BtnGreen;
