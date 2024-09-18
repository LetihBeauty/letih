import React from 'react';
import BannerService from "../service/BannerService.js";
import ServiceIncluded from  "../service/ServiceIncluded.js";
import styles from "./DermaPlanning.module.css";
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
        customClass={styles.bannerWrapper}
        customDescriptionClass={styles.titleDescription}
        customBottomClass={styles.bannerBottom}
        customPhotoClass= {styles.bannerMiddlePhoto}
      />
      <ServiceIncluded
        supplementaryServiceInfo={supplementaryServiceInfo}
        warningMessage={alertMessage}
      />
    </div>
  );
};

export default DermaPlanning;
