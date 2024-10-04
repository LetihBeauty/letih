import React from "react";
import {serviceRoseDeMer, warnings} from "../../components/constants/index.js"
import RoseDeMerStyles from "../service/RoseDeMer.module.css";
import styles from './Treatments.module.css';
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
        firstSession={<h5>First Session:<span><p>{primaryService.firstSession}</p></span></h5>}
        firstSessionTime={<h5>First Session Time:<span><p>{primaryService.firstSessionTime}</p></span></h5>}
        secondSession={<h5>Second Session:<span><p>{primaryService.secondSession}</p></span></h5>}
        secondSessionUlProp={
          <ul>
            {(primaryService.secondSessionItem || []).map((include, index) => (
              <li key={index} className="globalBulletsDescription">{include}</li>
            ))}
          </ul>
          }
        secondSessionTime={<h5>Second Session Time:<span>{primaryService.secondSessionTime}</span></h5>}
        priceProp={<h5>Price:<span>{primaryService.price}</span></h5>}
        btnComponent={primaryService.btnComponent}
        imgSrc='/images/roseDeMer.png'
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
        <Warning
          alertMessage={alertMessage}
        />
      </div>
    </div>
  );
};

export default RoseDeMer;
