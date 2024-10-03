import React from "react";
import {serviceRoseDeMer, warnings} from "../../components/constants/index.js"
import RoseDeMerStyles from "../service/RoseDeMer.module.css";
import styles from './Treatments.module.css';
import "../../shared/common.css";
import Warning from "../../components/Warning.jsx";
import Banner from "../../components/Banner.js";

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
      <div className={styles.bannerMiddle}>
        <div className={styles.bannerMiddleContent}>
          <div className={RoseDeMerStyles.title}>
            <h2>{primaryService.title}</h2>
          </div>
          <div className={RoseDeMerStyles.titleDescription}>
            <h5>{primaryService.whatIs}</h5>
            <p>{primaryService.whatIsDescription}</p>
            <h5>{primaryService.whatContains}</h5>
            <ul>
              {(primaryService.whatContainsItems || []).map((contains, index) => (
                <li key={index}>{contains}</li>
              ))}
            </ul>

            <div className={styles.bannerMiddleContentDetails}>
              <h5>First Session:<span>{primaryService.firstSession}</span></h5>
              <h5>First Session Time:<span>{primaryService.firstSessionTime}</span></h5>
              <h5>Second Session:<span>{primaryService.secondSession}</span></h5>
              <ul>
                {(primaryService.secondSessionItem || []).map((include, index) => (
                  <li key={index}>{include}</li>
                ))}
              </ul>
              <h5>Second Session Time:<span>{primaryService.secondSessionTime}</span></h5>
              <h5>Price:<span>{primaryService.price}</span></h5>
            </div>
            <div className={styles.bannerButton}>
              {primaryService.btnComponent}
            </div>
          </div>
          <div className={RoseDeMerStyles.bannerMiddlePhoto}>
            <img src={primaryService.imgSrc} alt="" />
          </div>
        </div>
      </div>
      <div className="globalBannerBottom"></div>
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
                <ul>
                  {(item.description || []).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className={RoseDeMerStyles.servicePhoto}>
              <img src={primaryService.secondPhotoimg} alt="" />
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
