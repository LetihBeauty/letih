import React from "react";
import "../../pages/Booking.css";

const ProgressBar = ({ steps, currentStep }) => {
  return (
    <div className="progress-bar-container">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step-item ${currentStep === index + 1 ? "active" : ""} ${
            currentStep > index + 1 ? "completed" : ""
          }`}
        >
          <div className="step-circle"></div>
          <h4 className="step-label">{step}</h4>
          {index !== steps.length && <div className="step-line"></div>}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
