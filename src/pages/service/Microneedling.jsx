import React from "react";
import Treatments from "./Treatments.jsx";
import {serviceMicroneedling, warnings} from "../../components/constants/index.js"
import MicroneedlingStyles from "../service/Microneedling.module.css";
import MicroneedlingTreatmentGuide from "./MicroneedlingTreatmentGuide.jsx";
import "../../shared/common.css";
import Warning from "../../components/Warning.jsx";
import Banner from "../../components/Banner.js";
const Microneedling = () => {

  const primaryService = serviceMicroneedling[0];
  const microneedlingDetails = primaryService.microneedlingInfo;
  const alertMessage = warnings[1]?.warningUltraformer[0]|| {};

  return (
    <div>
      <Banner
        bannerTitle = "RF MICRONEEDLING"
      />
      <Treatments
        customNavWrapperClass="globalNavbarWrapper"
        title={primaryService.title}
        customDescriptionClass = {MicroneedlingStyles.titleDescription}
        whatIsDescription={primaryService.whatIsDescription}
        benefits={primaryService.benefits}
        benefitsDescription={primaryService.benefitsDescription}
        benefitsRecommendations={primaryService.benefitsRecommendations}
        firstTitle ={primaryService.fullFace}
        firstTitleDescription={primaryService.fullFaceDescription}
        secondTitle={primaryService.fullFaceSecondOption}
        secondTitleDescription={primaryService.fullFaceSecondOptionDescription}
        btnComponent={primaryService.btnComponent}
        imgSrc='/images/microneedling.jpg'
        customPhotoClass = {MicroneedlingStyles.bannerMiddlePhoto}
        customBottomClass={MicroneedlingStyles.firstBannerBottom}
        customListProp={(
          <ul className="globalCustom-list">
            {(primaryService.benefitsItems || []).map((benefit, index) => (
              <li key={index}><p className="globalBulletsDescription">{benefit}</p></li>
            ))}
          </ul>
        )}
      />
      <MicroneedlingTreatmentGuide
        microneedlingDetails = {microneedlingDetails}
      />
      <Warning
        alertMessage={alertMessage}
      />
    </div>
  );
};
export default Microneedling;
