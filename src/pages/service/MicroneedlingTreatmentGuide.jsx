import React from "react";
import MicroneedlingStyles from'./Microneedling.module.css';
import "../../shared/common.css";

const MicroneedlingTreatmentGuide = ({
  microneedlingDetails
}) => {

  return (
    <div>
      <div className="globalServiceIncluded">
        <div className="globalServiceIncludedContent">
          <div className={MicroneedlingStyles.treatment}>
            {microneedlingDetails.map((item) => (
              <div key={item.id}>
                <p>{item.includes}</p>
                <p>{item.howItWorks}</p>
                <p>{item.observation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroneedlingTreatmentGuide;
