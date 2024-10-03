import React from 'react';
import Treatments from "./Treatments.jsx";
import FacialTreatmentGuide from  "./FacialTreatmentGuide.jsx";
import DeepCleasingStyles from "../service/FacialDeepCleasing.module.css";
import "../service/FacialTreatmentGuide.module.css";
import {facialDeepCleasing, warnings} from "../../components/constants/index.js"
import "../../shared/common.css";

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
        firstTitle ={primaryService.timeTitle}
        firstTitleDescription={primaryService.timeDescription}
        secondTitle={primaryService.PriceTitle}
        secondTitleDescription={primaryService.priceDescription}
        btnComponent={primaryService.btnComponent}
        imgSrc={primaryService.imgSrc}
        customClass={DeepCleasingStyles.bannerWrapper}
        customBottomClass="globalBannerBottom"
        customDescriptionClass={DeepCleasingStyles.titleDescription}

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
