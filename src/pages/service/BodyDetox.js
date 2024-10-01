import React from "react";
import Treatments from "./Treatments.js";
import {serviceBodyDetox, warnings} from "../../components/constants/index.js"
import BodyDetoxStyles from "../service/BodyDetox.module.css";
import "../../shared/common.css";
import BodyDetoxBenefits from "../service/BodyDetoxBenefits.js"
import Warning from "../../components/Warning.js";
import Banner from "../../components/Banner.js";

const BodyDetox = () => {

  const primaryService = serviceBodyDetox[0];
  const bodyDetoxDetails = primaryService.benefits;
  const alertMessage = warnings[1]?.warningUltraformer[0]|| {};
  /**
  * Maps over the mainDescription array to create a list of benefit items, displaying the title and description if they
  * exist, and defaults to an empty array if mainDescription is undefined.
  */
  const benefitsArray = bodyDetoxDetails?.treatmentBenefits?.mainDescription?.map(item => (
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
        customDescriptionClass = {BodyDetoxStyles.titleDescription}
        whatIsDescription={primaryService.whatIsDescription}
        additionalWhatIsDescriptionProp= {<p>{primaryService.additionalWhatIsDescription}</p>}
        customBannerMiddleContentDetailsClass = {BodyDetoxStyles.bannerMiddleContentDetails}
        firstTitle ={primaryService.timeTitle}
        firstTitleDescription={primaryService.timeDescription}
        secondTitle={primaryService.PriceTitle}
        secondTitleDescription={primaryService.priceDescription}
        packagePriceProp={<h5>{primaryService.packagePriceTitle}:<span>{primaryService.packagePrice}</span></h5>}
        benefits={benefitsArray}
        benefitsDescription={primaryService.benefits.benefitsDescription}
        benefitsRecommendations={primaryService.benefits.benefitsRecommendations}
        btnComponent={primaryService.btnComponent}
        imgSrc={primaryService.imgSrc}
        customBottomClass="globalBannerBottom"
      />
      <BodyDetoxBenefits
        bodyDetoxBenefitsTitle = {bodyDetoxDetails?.treatmentBenefits?.mainTitle|| []}
        bodyDetoxBenefitsDescription={bodyDetoxDetails?.treatmentBenefits?.mainDescription || []}
        okokTitle = {bodyDetoxDetails?.includesInBodyDetox?.mainTitle || []}
        okok = {bodyDetoxDetails?.includesInBodyDetox?.mainDescription || []}

      />
      <Warning
        alertMessage={alertMessage}
      />
    </div>
  );
};
export default BodyDetox;
