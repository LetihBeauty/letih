import React from 'react';
import Treatments from "./Treatments.js";
import UltraformerTreatmentGuide from "./UltraformerTreatmentGuide.js";
import UltraformerStyles from "../service/Ultraformer.module.css";
import "../service/FacialTreatmentGuide.module.css";
import {serviceUltraformer, warnings} from "../../components/constants/index.js"

const Ultraformer = () => {
  const primaryService = serviceUltraformer[0];
  const supplementaryServiceInfo = primaryService.serviceUltraformerSupplementary;
  const alertMessage = warnings[1]?.warningUltraformer[0]|| {};

  console.log("Primary Service:", primaryService);
  console.log("Supplementary Info:", supplementaryServiceInfo);
  console.log("Alert Message:", alertMessage);
  const classMapping = {
    1: UltraformerStyles.id1,
    2: UltraformerStyles.id2,
    3: UltraformerStyles.id3,
    4: UltraformerStyles.id4,
    5: UltraformerStyles.id5,
  };
  return (

    <div className="containerService">
      <Treatments
        title={primaryService.title}
        whatIsDescription={primaryService.whatIsDescription}
        benefits={primaryService.benefits}
        benefitsDescription={primaryService.benefitsDescription}
        benefitsRecommendations={primaryService.benefitsRecommendations}
        btnComponent={primaryService.btnComponent}
        imgSrc={primaryService.imgSrc}
        customClass={UltraformerStyles.bannerWrapper}
        customBottomClass={UltraformerStyles.bannerBottom}
        customBannerMiddleContentDetailsClass = {UltraformerStyles.timeAndPrice}
        customDescriptionClass = {UltraformerStyles.titleDescription}
      />
      <UltraformerTreatmentGuide
        supplementaryServiceInfo={supplementaryServiceInfo}
        customBottomClass={UltraformerStyles.bannerBottom}
        alertMessage={alertMessage}
        classMapping={classMapping}
      />
    </div>
  );
};

export default Ultraformer;
