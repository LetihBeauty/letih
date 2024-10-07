import React from "react";
import {serviceRoseDeMer, warnings} from "../../components/constants/index.js"
import RoseDeMerStyles from "../service/RoseDeMer.module.css";
import "../../shared/common.css";
import Warning from "../../components/Warning.jsx";
import Banner from "../../components/Banner.js";
import Treatments from "./Treatments.jsx";

const RoseDeMer = () => {
  const primaryService = serviceRoseDeMer[0];
  const roseDemerPeelGuidelines = primaryService.roseDemerPeelGuidelines;
  const alertMessage = warnings[2]?.warningRoseDeMer[0]|| {title: "No warnings available.",
  items: [],};

  return (
    <div>
      <Banner
        bannerTitle = "Rose de Mer"
      />
      <Treatments
        customNavWrapperClass={RoseDeMerStyles.navbarWrapper}
        title={primaryService.title}
        whatIs={primaryService.whatIs}
        whatIsDescription={primaryService.whatIsDescription}
        whatContains={primaryService.whatContains}
        whatContainsUlProps= {
          <ul className="globalCustom-list">
            {(primaryService.whatContainsItems || []).map((contains, index) => (
              <li key={index}>{contains}</li>
            ))}
          </ul>}
        firstSession= {primaryService.firstSessionTitle}
        firstSessionDescription= {primaryService.firstSessionDescription}
        firstSessionTime={primaryService.firstSessionTimeTitle}
        firstSessionTimeDescription={primaryService.firstSessionTimeDescription}
        secondSessionTitle={primaryService.secondSessionTitle}
        secondSessionDescription={primaryService.secondSessionDescription}
        secondSessionUlProp={
          <ul className="globalCustom-list">
            <li className="globalBulletsDescription">
              <p>{primaryService.secondSessionItem}</p>
            </li>
          </ul>
        }
        secondTitle={primaryService.secondSessionTimeTitle}
        secondTitleDescription={primaryService.secondSessionTimeDescription}
        priceProp={primaryService.priceTitle}
        pricePropDescription={primaryService.price}
        btnComponent={primaryService.btnComponent}
        imgSrc='/images/roseDeMer.png'
        customBannerMiddleContentDetailsClass= {RoseDeMerStyles.bannerMiddleContentDetails}
        customdescriptionStyleClass ={RoseDeMerStyles.descriptionStyle}
        customPhotoClass={RoseDeMerStyles.bannerMiddlePhoto}
      />
      <div className={RoseDeMerStyles.firstBannerBottom}></div>
      <div className="globalServiceIncluded">
        <div className="globalServiceIncludedContent">
          <div className={RoseDeMerStyles.serviceSteps}>
            {roseDemerPeelGuidelines.map((item) => (
              <div key={item.id}>
                <h5 className={RoseDeMerStyles.serviceTitle}>
                  {typeof item.title === 'string'? item.title.split(/(NOT|MUST)/gi).map((part, index) => (
                    <span key={index} style={part.toUpperCase() === 'NOT' || part.toUpperCase() === 'MUST' ? { color: 'red' } : {}}>
                      {part}
                    </span>
                  )) : null
                  }
                </h5>
                <ul className="globalCustom-list">
                  {(item.description || []).map((item, index) => (
                    <li key={index} className="globalBulletsDescription">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className={RoseDeMerStyles.servicePhoto}>
              <img src='/images/post-peel.png' alt="img description" />
            </div>
          </div>
        </div>
      </div>
      <Warning
        alertMessage={alertMessage}
      />
    </div>
  );
};

export default RoseDeMer;
