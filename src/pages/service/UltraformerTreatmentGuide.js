import React from "react";
import Ultraformerstyles from'./Ultraformer.module.css';

const UltraformerTreatmentGuide = ({
  supplementaryServiceInfo,
  classMapping,
  customBottomClass,
  HIFUTreatmentAreasDescription,
  alertMessage,
  title
}) => {

  return (
    <div className="containerService">
      <div className={Ultraformerstyles.serviceIncluded}>
        <div className={Ultraformerstyles.serviceIncludedContent}>
          <div className={Ultraformerstyles.hifuTreatment}>
            {HIFUTreatmentAreasDescription.map((item) => (
              <div key={item.id} className={Ultraformerstyles.hifuItem}>
                <h4 className={Ultraformerstyles.hifuTitle}>
                  {item.title}
                </h4>
                <p className={Ultraformerstyles.hifuDescrDescription}>
                  {item.description}
                </p>
              </div>
            ))
            }
          </div>
          <div className={Ultraformerstyles.serviceSteps}>
            {supplementaryServiceInfo.map((item) => (
              <h5 key={item.id} className={`${classMapping[item.id]}`}>
                {item.title}
                <span className={Ultraformerstyles.descriptionStyle}>{item.description}</span>
              </h5>
            ))
            }
          </div>
        </div>
      </div>
      <div className={`${Ultraformerstyles.bannerBottom} ${customBottomClass}`}></div>
      <div className={ `${Ultraformerstyles.okok}`}>
        <div className={Ultraformerstyles.serviceIncludedWarning}>
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

  );
};

export default UltraformerTreatmentGuide;
