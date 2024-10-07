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
  const firstColumnItems = supplementaryServiceInfo.slice(0, 5);
  const secondColumnItems = supplementaryServiceInfo.slice(5);

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
        imgSrc='/images/deepCleasing.png'
        customClass={DeepCleasingStyles.bannerWrapper}
        customBottomClass="globalFirstBannerBottom"
        customDescriptionClass={DeepCleasingStyles.titleDescription}
        customPhotoClass = {DeepCleasingStyles.bannerMiddlePhoto}
      />
      <FacialTreatmentGuide
        firstColumnItems= {firstColumnItems}
        secondColumnItems= {secondColumnItems}
        warningMessage={alertMessage}
      />
    </div>
  );
};

export default DeepCleasing;
