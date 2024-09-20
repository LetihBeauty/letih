import React from 'react';
import BannerService from "../service/BannerService.js";
import ServiceIncluded from  "../service/ServiceIncluded.js";
import UltraformerStyles from "../service/Ultraformer.module.css";
import "../service/ServiceIncluded.module.css";
import {serviceUltraformer, warnings} from "../../components/constants/index.js"

const Ultraformer = () => {
  const primaryService = serviceUltraformer[0];
  const supplementaryServiceInfo = primaryService.serviceUltraformerSupplementary;
  const alertMessage = warnings[0].warningDeepCleasing;

  const classMapping = {
    1: UltraformerStyles.id1,
    2: UltraformerStyles.id2,
    3: UltraformerStyles.id3,
    4: UltraformerStyles.id4,
    5: UltraformerStyles.id5,
  };
  return (

    <div className="containerService">
      <BannerService
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
      />
      <ServiceIncluded
        supplementaryServiceInfo={supplementaryServiceInfo}
        warningMessage={alertMessage}
        classMapping={classMapping}
      />
    </div>
  );
};

export default Ultraformer;
