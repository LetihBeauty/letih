import React from "react";
import Ultraformerstyles from'./Ultraformer.module.css';

const UltraformerTreatmentGuide = ({
  supplementaryServiceInfo,
  classMapping,
  customBottomClass,
  alertMessage,
}) => {

  return (
    <div className="bannerService">
      <div className={Ultraformerstyles.serviceIncluded}>
        <div className={Ultraformerstyles.serviceIncludedContent}>
          <h4 className={Ultraformerstyles.serviceTitle}>What are the benefits of HIFU?</h4>
          <div className={Ultraformerstyles.serviceSteps}>
            {supplementaryServiceInfo.map((item) => (
              <h5 key={item.id} className={`${classMapping[item.id]}`}>
                {item.title}
                <span class={Ultraformerstyles.descriptionStyle}>{item.description}</span>
              </h5>
            ))
            }
          </div>
        </div>
      </div>
      <div className={`${Ultraformerstyles.bannerBottom} ${customBottomClass}`}></div>
          <div className={Ultraformerstyles.serviceIncludedWarning}>
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

export default UltraformerTreatmentGuide;
