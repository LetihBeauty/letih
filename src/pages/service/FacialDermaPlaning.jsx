import React from "react";
import Treatments from "./Treatments.jsx";
import FacialTreatmentGuide from "./FacialTreatmentGuide.jsx";
import styles from "./FacialServiceStyle.module.css";
import {
  facialDermaplaning,
  warnings,
} from "../../components/constants/index.js";
import "../../shared/common.css";

const DermaPlanning = () => {
  // console.log("nao deveria estar aqui");
  const primaryService = facialDermaplaning[0];
  const supplementaryServiceInfo =
    primaryService.facialDermaplaningSupplementary;
  const alertMessage = warnings[0].warningDeepCleasing;
  const firstColumnItems = supplementaryServiceInfo.slice(0, 5);
  const secondColumnItems = supplementaryServiceInfo.slice(5);
  return (
    <div className="containerService">
      <Treatments
        title={primaryService.title}
        whatIs={primaryService.whatIs}
        whatIsDescription={primaryService.whatIsDescription}
        benefits={primaryService.benefits}
        benefitsDescription={primaryService.benefitsDescription}
        benefitsRecommendations={primaryService.benefitsRecommendations}
        firstTitle={primaryService.timeTitle}
        firstTitleDescription={primaryService.timeDescription}
        secondTitle={primaryService.PriceTitle}
        secondTitleDescription={primaryService.priceDescription}
        btnComponent={primaryService.btnComponent}
        imgSrc="/images/dermaPlaning.jpg"
        customClass={styles.bannerWrapper}
        customDescriptionClass={styles.titleDescription}
        customBottomClass="globalFirstBannerBottom"
        customPhotoClass={styles.bannerMiddlePhoto}
      />
      <FacialTreatmentGuide
        firstColumnItems={firstColumnItems}
        secondColumnItems={secondColumnItems}
        warningMessage={alertMessage}
      />
    </div>
  );
};

export default DermaPlanning;
