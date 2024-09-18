import React from 'react';
import BannerService from "/home/victor/code/victorfonsecass/letih/src/pages/service/BannerService.js";
import  ServiceIncluded from  "/home/victor/code/victorfonsecass/letih/src/pages/service/ServiceIncluded.js";
import "./Service.css";
import {facialDeepCleasing,treatmentContraindications } from "../../components/constants/index.js"

const Dermaplaning = () => {
  const primaryService = facialDeepCleasing[0];
  const supplementaryServiceInfo = primaryService.facialDeepCleasingSupplementary;
  const facialTreatmentPrecautions =  treatmentContraindications[0];

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
        warningMessage={facialTreatmentPrecautions.warning}
      />
    </div>
  );
};

export default  Dermaplaning;
