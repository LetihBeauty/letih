import React from "react";
import "./Btn.css";

const Btn = ({ children, onClick, href, customButtonClass = "" }) => {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      className={`custom-button  ${customButtonClass}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Btn;
