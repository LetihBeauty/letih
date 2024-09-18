import React from 'react';
import BannerService from "/home/victor/code/victorfonsecass/letih/src/pages/service/BannerService.js";
import  ServiceIncluded from  "/home/victor/code/victorfonsecass/letih/src/pages/service/ServiceIncluded.js";
import "./Service.css";
import {facialDeepCleasing, warnings} from "../../components/constants/index.js"

const DeepCleasing = () => {
  const primaryService = facialDeepCleasing[0];
  const supplementaryServiceInfo = primaryService.facialDeepCleasingSupplementary;
  const alertMessage = warnings[0].warningDeepCleasing;
  return (

    <div className="containerService">
      <BannerService
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
      />
      <ServiceIncluded
        supplementaryServiceInfo={supplementaryServiceInfo}
        warningMessage={alertMessage}
      />
    </div>
  );
};

export default DeepCleasing;
