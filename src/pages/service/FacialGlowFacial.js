import React from 'react';
import Treatments from "./Treatments.js";
import FacialTreatmentGuide from  "./FacialTreatmentGuide.js";
import GlowFacialStyles from "../service/FacialGlowFacial.module.css";
import "../service/FacialTreatmentGuide.module.css";
import {facialGlowFacial, warnings} from "../../components/constants/index.js"

const GlowFacial = () => {
  const primaryService = facialGlowFacial[0];
  const supplementaryServiceInfo = primaryService.facialGlowSupplementary;
  const alertMessage = warnings[0].warningDeepCleasing;

    const classMapping = {
    1: GlowFacialStyles.id1,
    2: GlowFacialStyles.id2,
    3: GlowFacialStyles.id3,
    4: GlowFacialStyles.id4,
    5: GlowFacialStyles.id5,
    6: GlowFacialStyles.id6,
    7: GlowFacialStyles.id7,
    8: GlowFacialStyles.id8,
    9: GlowFacialStyles.id9,
  };
  return (

    <div className="containerService">
      <Treatments
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
        customClass={GlowFacialStyles.bannerWrapper}
        customPhotoClass= {GlowFacialStyles.bannerMiddlePhoto}
        customBottomClass={GlowFacialStyles.bannerBottom}

      />
      <FacialTreatmentGuide
        supplementaryServiceInfo={supplementaryServiceInfo}
        warningMessage={alertMessage}
        classMapping={classMapping}
      />
    </div>
  );
};

export default GlowFacial;
