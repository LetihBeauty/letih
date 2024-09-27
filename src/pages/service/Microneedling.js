import React from "react";
import Treatments from "./Treatments.js";
import {serviceMicroneedling, warnings} from "../../components/constants/index.js"
import MicroneedlingStyles from "../service/Microneedling.module.css";
import MicroneedlingTreatmentGuide from "./MicroneedlingTreatmentGuide.js";

const Microneedling = () => {

  const primaryService = serviceMicroneedling[0];
  const microneedlingDetails = primaryService.microneedlingInfo;
  const alertMessage = warnings[1]?.warningUltraformer[0]|| {};

  return (
    <div className="containerService">
      <div className={MicroneedlingStyles.ultraformerBanner}>
        <div className={MicroneedlingStyles.centerLogo}>
          <h1>RF MICRONEEDLING</h1>
        </div>
      </div>
      <Treatments
        customNavWrapperClass={MicroneedlingStyles.navbarWrapper}
        title={primaryService.title}
        customDescriptionClass = {MicroneedlingStyles.titleDescription}
        whatIsDescription={primaryService.whatIsDescription}
        benefits={primaryService.benefits}
        benefitsDescription={primaryService.benefitsDescription}
        benefitsRecommendations={primaryService.benefitsRecommendations}
        timeDescription={primaryService.timeDescription}
        priceDescription={primaryService.priceDescription}
        btnComponent={primaryService.btnComponent}
        imgSrc={primaryService.imgSrc}
        customClass={MicroneedlingStyles.bannerWrapper}
        customBottomClass={MicroneedlingStyles.bannerBottom}
        customBannerMiddleContentDetailsClass = {MicroneedlingStyles.timeAndPrice}
      >
        <ul>
          {(primaryService.benefitsItems || []).map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </Treatments>
      <MicroneedlingTreatmentGuide
        customBottomClass={MicroneedlingStyles.bannerBottom}
        microneedlingDetails = {microneedlingDetails}
        alertMessage={alertMessage}
      />
    </div>
  );
};
export default Microneedling;
