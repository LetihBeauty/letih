import React from 'react';
import BannerService from "../service/BannerService.js";
import  ServiceIncluded from  "../service/ServiceIncluded.js";
import "./Service.css";
import {facialDeepCleasing} from "../../components/constants/index.js"

const DermaPlanning = () => {
  const primaryService = facialDeepCleasing[0];
  const supplementaryServiceInfo = primaryService.facialDeepCleasingSupplementary;
  // const warningMessage = supplementaryServiceInfo[supplementaryServiceInfo.length - 1].warning;

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
        // warningMessage={warningMessage}

      />
    </div>
  );
};

export default DermaPlanning;
