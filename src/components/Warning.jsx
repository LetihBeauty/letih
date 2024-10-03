import React from "react";
import "../shared/common.css";

const Warning = ({
  alertMessage,
}) => {
  return (
    <div className="globalWarningWrap">
      <div className="globalServiceIncludedWarning">
        <div>
          <span className="material-symbols-outlined">info</span>
          {alertMessage.title}
        </div>
        <ul>
          {alertMessage.items?.map((item, itemIndex) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Warning;
