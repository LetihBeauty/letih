import React from "react";
import Treatments from "./Treatments.jsx";
import {serviceBodyDetox, warnings} from "../../components/constants/index.js"
import BodyDetoxStyles from "../service/BodyDetox.module.css";
import "../../shared/common.css";
import BodyDetoxBenefits from "./BodyDetoxBenefits.jsx"
import Warning from "../../components/Warning.jsx";
import Banner from "../../components/Banner.js";

const BodyDetox = () => {

  const primaryService = serviceBodyDetox[0];
  const bodyDetoxDetails = primaryService.benefits;
  const alertMessage = warnings[1]?.warningUltraformer[0]|| {};
  /**
  * Maps over the mainDescription array to create a list of benefit items, displaying the title and description if they
  * exist, and defaults to an empty array if mainDescription is undefined.
  */
  const benefitsArray = bodyDetoxDetails?.treatmentBenefits?.includesInBodyDetox?.map(item => (
    <div key={item.id}>
      {item.title && <h5>{item.title}</h5>}
      {item.description && <p>{item.description}</p>}
    </div>
  )) || [];

  return (
    <div>
      <Banner
        bannerTitle = "Body Detox"
      />
      <Treatments
        customNavWrapperClass="globalNavbarWrapper"
        title={primaryService.title}
        whatIsDescription={primaryService.whatIsDescription}
        additionalWhatIsDescriptionProp= {primaryService.additionalWhatIsDescription}
        firstTitle ={primaryService.timeTitle}
        firstTitleDescription={primaryService.timeDescription}
        secondTitle={primaryService.PriceTitle}
        secondTitleDescription={primaryService.priceDescription}
        packagePriceProp={primaryService.packagePriceTitle}
        packagePricePropDescription={primaryService.packagePrice}
        benefits={benefitsArray}
        benefitsDescription={primaryService.benefitsDescription}
        benefitsRecommendations={primaryService.benefitsRecommendations}
        btnComponent={primaryService.btnComponent}
        imgSrc='/images/bodyDetox.png'
        customDescriptionClass= {BodyDetoxStyles.titleDescription}
        customPhotoClass = {BodyDetoxStyles.bannerMiddlePhoto}
        customBottomClass=  "globalFirstBannerBottom"
        customBannerMiddleContentDetailsClass = {BodyDetoxStyles.bannerMiddleContentDetails}
      />
      <BodyDetoxBenefits
        mainTitle={bodyDetoxDetails?.treatmentBenefits?.mainTitle || ""}
        treatmentBenefits = {bodyDetoxDetails?.treatmentBenefits.mainDescription || []}
        secondMainTitle={bodyDetoxDetails?.includesInBodyDetox?.mainTitle || ""}
        secondItems={bodyDetoxDetails?.includesInBodyDetox?.mainDescription || []}
      />
      <Warning
        alertMessage={alertMessage}
      />
    </div>
  );
};
export default BodyDetox;
