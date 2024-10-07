import React from "react";
import Treatments from "./Treatments.jsx";
import SkinCareRoutineStyles from "../service/SkinCareRoutine.module.css"
import {serviceSkinCareRoutine} from "../../components/constants/index.js"
import "../../shared/common.css";
import Banner from "../../components/Banner.js";

const SkinCareRoutine = () => {
  const primaryService = serviceSkinCareRoutine[0];

  return (
    <div>
      <Banner
        bannerTitle = "SKIN CARE ROUTINE"
      />
      <Treatments
        customNavWrapperClass="globalNavbarWrapper"
        title={primaryService.title}
        customDescriptionClass = {SkinCareRoutineStyles.titleDescription}
        whatIsDescription={primaryService.whatIsDescription}
        benefits={primaryService.benefits}
        benefitsDescription={primaryService.benefitsDescription}
        benefitsRecommendations={primaryService.benefitsRecommendations}
        firstTitle ={primaryService.timeTitle}
        firstTitleDescription={primaryService.timeDescription}
        secondTitle={primaryService.PriceTitle}
        secondTitleDescription={primaryService.priceDescription}
        btnComponent={primaryService.btnComponent}
        imgSrc='/images/skinCareRoutine.png'
        customBottomClass="globalFirstBannerBottom"
        customPhotoClass = {SkinCareRoutineStyles.bannerMiddlePhoto}
      />
      <div className={SkinCareRoutineStyles.emptySpace}></div>
    </div>
  );
};
export default SkinCareRoutine;
