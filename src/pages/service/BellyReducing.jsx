import React from "react";
import Treatments from "./Treatments.jsx";
import {serviceBellyReducing, warnings} from "../../components/constants/index.js"
import "../../shared/common.css";
import BellyReducingBenefits from "./BellyReducingBenefits.jsx"
import Warning from "../../components/Warning.jsx";
import Banner from "../../components/Banner.js";
import BellyReducingStyles from "../service//BellyReducing.module.css";

const BellyReducing = () => {

  const primaryService = serviceBellyReducing[0];
  const bellyRedDetails = primaryService.treatmentsRecommended;
  const supplementaryServiceInfo = primaryService.beneditsOfHifu || [];
  const firstThreeItems = supplementaryServiceInfo.slice(0, 3);
  const lastTwoItems = supplementaryServiceInfo.slice(-2);
  const alertMessage = warnings[1]?.warningUltraformer[0]|| {};


  return (
    <div>
      <Banner
        bannerTitle = "Belly Reducing"
      />
      <Treatments
        customNavWrapperClass="globalNavbarWrapper"
        title={primaryService.title}
        whatIsDescription={primaryService.whatIsDescription}
        benefits={primaryService.benefits}
        benefitsDescription={primaryService.benefitsDescription}
        benefitsRecommendations={primaryService.benefitsRecommendations}
        firstTitle ={primaryService.timeTitle}
        firstTitleDescription={primaryService.timeDescription}
        secondTitle={primaryService.PriceTitle}
        secondTitleDescription={primaryService.priceDescription}
        btnComponent={primaryService.btnComponent}
        imgSrc='/images/bellyReducing.jpg'
        customBottomClass=  "globalFirstBannerBottom"
        customPhotoClass = {BellyReducingStyles.bannerMiddlePhoto}

      />
      <BellyReducingBenefits
        mainTitle={bellyRedDetails?.sessionsRecomended?.mainTitle || ""}
        treatmentBenefits={bellyRedDetails?.sessionsRecomended?.mainDescription || []}
        secondMainTitle={bellyRedDetails?.hifuTreats?.mainTitle || ""}
        secondItems={bellyRedDetails?.hifuTreats?.mainDescription || []}
        supplementaryServiceInfo= {supplementaryServiceInfo|| ""}
        thirdMainTitle= {primaryService?.beneditsOfHifuTitle}
        firstThreeItems= {firstThreeItems}
        lastTwoItems= {lastTwoItems}
      />
      <Warning
        alertMessage={alertMessage}
      />
    </div>
  );
};
export default BellyReducing;
