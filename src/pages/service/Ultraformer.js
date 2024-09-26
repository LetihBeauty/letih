import React from 'react';
import Treatments from "./Treatments.js";
import UltraformerTreatmentGuide from "./UltraformerTreatmentGuide.js";
import UltraformerStyles from "../service/Ultraformer.module.css";
import "../service/FacialTreatmentGuide.module.css";
import {serviceUltraformer, warnings, prices} from "../../components/constants/index.js"

const Ultraformer = () => {
  const primaryService = serviceUltraformer[0];
  const hifuTreatmentDetails = primaryService.HIFUTreatmentInfo;
  console.log('HIFU Treatment Details:', hifuTreatmentDetails);
  const supplementaryServiceInfo = primaryService.serviceUltraformerSupplementary;
  const alertMessage = warnings[1]?.warningUltraformer[0]|| {};
  const tariffs = prices;

  const classMapping = {
    1: UltraformerStyles.id1,
    2: UltraformerStyles.id2,
    3: UltraformerStyles.id3,
    4: UltraformerStyles.id4,
    5: UltraformerStyles.id5,
  };
  return (

    <div className="containerService">
      <div className={UltraformerStyles.ultraformerBanner}>
        <div className={UltraformerStyles.centerLogo}>
          <h1>Ultraformer III (HIFU)</h1>
        </div>
      </div>
      <Treatments
        customNavWrapperClass={UltraformerStyles.navbarWrapper}
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
        HIFUTreatmentAreasDescription = {hifuTreatmentDetails}
        tariffs={tariffs}
        alertMessage={alertMessage}
        classMapping={classMapping}
      />
    </div>
  );
};

export default Ultraformer;
