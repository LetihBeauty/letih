import React from 'react';
import BannerService from "../service/BannerService.js";
import  ServiceIncluded from  "../service/ServiceIncluded.js";
import "./DermaPlanning.css";
import {FacialDermaplaning, warnings} from "../../components/constants/index.js"

const DermaPlanning = () => {
  const primaryService = FacialDermaplaning[0];
  const supplementaryServiceInfo = primaryService.facialDermaplaningSupplementary;
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

export default DermaPlanning;
