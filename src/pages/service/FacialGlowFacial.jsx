import React from 'react';
import Treatments from "./Treatments.jsx";
import FacialTreatmentGuide from  "./FacialTreatmentGuide.jsx";
import GlowFacialStyles from "../service/FacialGlowFacial.module.css";
import "../service/FacialTreatmentGuide.module.css";
import {facialGlowFacial, warnings} from "../../components/constants/index.js"
import "../../shared/common.css";

const GlowFacial = () => {
  const primaryService = facialGlowFacial[0];
  const supplementaryServiceInfo = primaryService.facialGlowSupplementary;
  const firstColumnItems = supplementaryServiceInfo.slice(0, 5);
  const secondColumnItems = supplementaryServiceInfo.slice(5);
  const alertMessage = warnings[0].warningDeepCleasing;

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
        imgSrc='/images/glowfacial.png'
        customClass={GlowFacialStyles.bannerWrapper}
        customPhotoClass= {GlowFacialStyles.bannerMiddlePhoto}
        customBottomClass="globalBannerBottom"
        customDescriptionClass={GlowFacialStyles.titleDescription}

      />
      <FacialTreatmentGuide
        firstColumnItems= {firstColumnItems}
        secondColumnItems= {secondColumnItems}
        warningMessage={alertMessage}
      />
    </div>
  );
};

export default GlowFacial;
