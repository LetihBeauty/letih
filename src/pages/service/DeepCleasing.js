import React from 'react';
import Treatments from "./Treatments.js";
import FacialTreatmentGuide from  "../service/FacialTreatmentGuide.js";
import DeepCleasingStyles from "../service/DeepCleasing.module.css";
import "../service/ServiceIncluded.module.css";
import {facialDeepCleasing, warnings} from "../../components/constants/index.js"

const DeepCleasing = () => {
  const primaryService = facialDeepCleasing[0];
  const supplementaryServiceInfo = primaryService.facialDeepCleasingSupplementary;
  const alertMessage = warnings[0].warningDeepCleasing;

  const classMapping = {
    1: DeepCleasingStyles.id1,
    2: DeepCleasingStyles.id2,
    3: DeepCleasingStyles.id3,
    4: DeepCleasingStyles.id4,
    5: DeepCleasingStyles.id5,
    6: DeepCleasingStyles.id6,
    7: DeepCleasingStyles.id7,
    8: DeepCleasingStyles.id8,
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
        customClass={DeepCleasingStyles.bannerWrapper}
        customBottomClass={DeepCleasingStyles.bannerBottom}

      />
      <FacialTreatmentGuide
        supplementaryServiceInfo={supplementaryServiceInfo}
        warningMessage={alertMessage}
        classMapping={classMapping}
      />
    </div>
  );
};

export default DeepCleasing;
