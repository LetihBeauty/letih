import React from "react";
import "./Btn.css";

const BtnGreen = ({ children, onClick, customButtonClass }) => {
  return (
    <button className={`${"custom-button green"} ${customButtonClass}`}  onClick={onClick}>
      {children}
    </button>
  );
};

export default BtnGreen;
