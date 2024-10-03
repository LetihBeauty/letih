import React from 'react';
import Treatments from "./Treatments.jsx";
import UltraformerTreatmentGuide from "./UltraformerTreatmentGuide.jsx";
import UltraformerStyles from "../service/Ultraformer.module.css";
import "../service/FacialTreatmentGuide.module.css";
import {serviceUltraformer, warnings, prices} from "../../components/constants/index.js"
import Warning from "../../components/Warning.jsx";
import Banner from "../../components/Banner.js";

const Ultraformer = () => {
  const primaryService = serviceUltraformer[0];
  const hifuTreatmentDetails = primaryService.HIFUTreatmentInfo;
  const supplementaryServiceInfo = primaryService.serviceUltraformerSupplementary;
  const alertMessage = warnings[1]?.warningUltraformer[0]|| {};
  const tariffs = prices;

  const classMapping = {
    1: 'globalServiceSteps',
    2: 'globalServiceSteps',
    3: 'globalServiceSteps',
    4: 'globalServiceSteps',
    5: 'globalServiceSteps',
  };
  return (
    <div>
      <Banner
        bannerTitle = "Ultraformer III (HIFU)"
      />
      <Treatments
        customNavWrapperClass={UltraformerStyles.navbarWrapper}
        title={primaryService.title}
        whatIsDescription={primaryService.whatIsDescription}
        benefits={primaryService.benefits}
        benefitsDescription={primaryService.benefitsDescription}
        benefitsRecommendations={primaryService.benefitsRecommendations}
        btnComponent={primaryService.btnComponent}
        imgSrc='/images/ultraformer.jpg'
        customClass={UltraformerStyles.bannerWrapper}
        customBottomClass={UltraformerStyles.firstBannerBottom}
        customBannerMiddleContentDetailsClass = {UltraformerStyles.timeAndPrice}
        customDescriptionClass = {UltraformerStyles.titleDescription}
        customButtonClass = {UltraformerStyles.button}
        customPhotoClass = {UltraformerStyles.bannerMiddlePhoto}
      />

      <UltraformerTreatmentGuide
        supplementaryServiceInfo={supplementaryServiceInfo}
        customBottomClass={UltraformerStyles.secongBannerBottom}
        HIFUTreatmentAreasDescription = {hifuTreatmentDetails}
        tariffs={tariffs}
        classMapping={classMapping}
      />
      <Warning
        alertMessage={alertMessage}
      />
    </div>
  );
};

export default Ultraformer;
