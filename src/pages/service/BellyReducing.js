import React from "react";
import Treatments from "./Treatments.js";
import {serviceBellyReducing, warnings} from "../../components/constants/index.js"
import "../../shared/common.css";
import DetoxAndReducingBenefits from "./DetoxAndReducingBenefits.js"
import Warning from "../../components/Warning.js";
import Banner from "../../components/Banner.js";
import ItemList from "/home/victor/code/victorfonsecass/letih/src/components/Itemlist.js";
import BellyReducingStyles from "../service//BellyReducing.module.css";
const BellyReducing = () => {

  const primaryService = serviceBellyReducing[0];
  const bellyRedDetails = primaryService.treatmentsRecommended;
  const supplementaryServiceInfo = primaryService.beneditsOfHifu || [];
  const alertMessage = warnings[1]?.warningUltraformer[0]|| {};

  const classMapping = {
    1: 'globalServiceSteps',
    2: 'globalServiceSteps',
    3: 'globalServiceSteps',
    4: 'globalServiceSteps',
    5: 'globalServiceSteps',
  };
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
        imgSrc={primaryService.imgSrc}
        customBottomClass="globalBannerBottom"
      />
      <div className="globalServiceIncluded">
        <div className="globalServiceIncludedContent">
          <div className="globalTreatment">
            <DetoxAndReducingBenefits
              title={bellyRedDetails?.sessionsRecomended?.mainTitle || ""}
              items={bellyRedDetails?.sessionsRecomended?.mainDescription || []}
              secondTitle={bellyRedDetails?.hifuTreats?.mainTitle || ""}
              includesItems={bellyRedDetails?.hifuTreats?.mainDescription || []}
            />
            <ItemList
              items={supplementaryServiceInfo}
              titleComponent={({ item, children }) => (
                <h5 className={classMapping[item.id]}>{children}</h5>
              )}
              descriptionComponent={({ children }) => (
                <span className={""}>{children}</span>
              )}
              containerClass={"globalServiceSteps"}
              isList={false}
            />
          </div>
        </div>
      </div>
      <Warning
        alertMessage={alertMessage}
      />
    </div>
  );
};
export default BellyReducing;
