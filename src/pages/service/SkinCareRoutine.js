import React from "react";
import Treatments from "./Treatments.js";
import SkinCareRoutineStyles from "../service/SkinCareRoutine.module.css"
import {serviceSkinCareRoutine} from "../../components/constants/index.js"

const SkinCareRoutine = () => {
  const primaryService = serviceSkinCareRoutine[0];

  return (
    <div className="containerService">
      <div className={SkinCareRoutineStyles.ultraformerBanner}>
        <div className={SkinCareRoutineStyles.centerLogo}>
          <h1>SKIN CARE ROUTINE</h1>
        </div>
      </div>
      <Treatments
        customNavWrapperClass={SkinCareRoutineStyles.navbarWrapper}
        customTitleClass={SkinCareRoutineStyles.title}
        title={primaryService.title}
        customDescriptionClass = {SkinCareRoutineStyles.titleDescription}
        whatIsDescription={primaryService.whatIsDescription}
        benefits={primaryService.benefits}
        benefitsDescription={primaryService.benefitsDescription}
        benefitsRecommendations={primaryService.benefitsRecommendations}
        timeDescription={primaryService.timeDescription}
        priceDescription={primaryService.priceDescription}
        btnComponent={primaryService.btnComponent}
        imgSrc={primaryService.imgSrc}
        customClass={SkinCareRoutineStyles.bannerWrapper}
        customBottomClass={SkinCareRoutineStyles.bannerBottom}
        customBannerMiddleContentDetailsClass = {SkinCareRoutineStyles.timeAndPrice}
      />
      <div  className={SkinCareRoutineStyles.emptySpace}>

      </div>
    </div>
  );
};
export default SkinCareRoutine;
