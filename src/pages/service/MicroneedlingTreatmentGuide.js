import React from "react";
import MicroneedlingStyles from'./Microneedling.module.css';

const MicroneedlingTreatmentGuide = ({
  microneedlingDetails,
  alertMessage
}) => {

  return (
    <div className="containerService">
      <div className={MicroneedlingStyles.serviceIncluded}>
        <div className={MicroneedlingStyles.serviceIncludedContent}>
          <div className={MicroneedlingStyles.treatment}>
            {microneedlingDetails.map((item) => (
              <div key={item.id} className={MicroneedlingStyles.item}>
                <p>{item.includes}</p>
                <p>{item.howItWorks}</p>
                <p>{item.observation}</p>
              </div>
            ))}
          </div>
          <div className={`${MicroneedlingStyles.warningWrap}`}>
            <div className={MicroneedlingStyles.serviceIncludedWarning}>
              <div>
                <span className="material-symbols-outlined">
                  info
                </span>
                {alertMessage.title}
              </div>
              <ul>
                {alertMessage.items?.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroneedlingTreatmentGuide;
