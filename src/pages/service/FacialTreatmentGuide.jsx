import React from "react";
import styles from'./FacialTreatmentGuide.module.css';

const FacialTreatmentGuide = ({
  supplementaryServiceInfo,
  warningMessage,
  classMapping
}) => {
  return (
    <div className="bannerService">
      <div className={styles.serviceIncluded}>
        <div className={styles.serviceIncludedContent}>
          <h4 className={styles.serviceTitle}>What is included in this service?</h4>
          <div className={styles.serviceSteps}> 
            {supplementaryServiceInfo.map((item) => (
              <h5 key={item.id} className={`${classMapping[item.id]}`}>
                {item.title}
                <span className={styles.descriptionStyle}>{item.description}</span>
              </h5>
            ))
            }
          </div>
          <div className={styles.serviceIncludedWarning}>
            <div>
              <span class="material-symbols-outlined">info</span>
              <h6>{warningMessage}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacialTreatmentGuide;
