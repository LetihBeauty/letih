import React from 'react';
import BannerService from "../service/BannerService.js";
import ServiceIncluded from  "../service/ServiceIncluded.js";
import DeepCleasingStyles from "../service/DeepCleasing.module.css";
import styles from "./DermaPlanning.module.css";
import "../service/ServiceIncluded.module.css";
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
        customClass={styles.bannerWrapper}
        customDescriptionClass={styles.titleDescription}
        customBottomClass={styles.bannerBottom}

      />
      <ServiceIncluded
        supplementaryServiceInfo={supplementaryServiceInfo}
        warningMessage={alertMessage}
      />
    </div>
  );
};

export default DeepCleasing;
