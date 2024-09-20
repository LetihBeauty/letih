import React from 'react';
import Treatments from "./Treatments.js";
import FacialTreatmentGuide from  "../service/FacialTreatmentGuide.js";
import styles from "./DermaPlanning.module.css";
import {facialDermaplaning, warnings} from "../../components/constants/index.js"

const DermaPlanning = () => {
  const primaryService = facialDermaplaning[0];
  const supplementaryServiceInfo = primaryService.facialDermaplaningSupplementary;
  const alertMessage = warnings[0].warningDeepCleasing;

    const classMapping = {
    1: styles.id1,
    2: styles.id2,
    3: styles.id3,
    4: styles.id4,
    5: styles.id5,
    6: styles.id6,
    7: styles.id7,
    8: styles.id8,
    9: styles.id9,
  };
  return (

    <div className="containerService">
      <Treatments
        title={primaryService.title}
        whatIs={primaryService.whatIs}
        whatIsDescription={primaryService.whatIsDescription}
        benefits={primaryService.benefits}
        benefitsDescription={primaryService.benefitsDescription}
        benefitsRecommendations={primaryService.benefitsRecommendations}
        timeDescription={primaryService.timeDescription}
        priceDescription={primaryService.priceDescription}
        btnComponent={primaryService.btnComponent}
        imgSrc={primaryService.imgSrc}
        customClass={styles.bannerWrapper}
        customDescriptionClass={styles.titleDescription}
        customBottomClass={styles.bannerBottom}
        customPhotoClass= {styles.bannerMiddlePhoto}
      />
      <FacialTreatmentGuide
        supplementaryServiceInfo={supplementaryServiceInfo}
        warningMessage={alertMessage}
        classMapping={classMapping}
      />
    </div>
  );
};

export default DermaPlanning;
