import React from "react";
import ServiceMobileNavbar from "../../components/ServiceNavBar.js";
import {serviceRoseDeMer, warnings} from "../../components/constants/index.js"
import RoseDeMerStyles from "/home/victor/code/victorfonsecass/letih/src/pages/service/RoseDeMer.css";

const RoseDeMer = () => {
  const primaryService = serviceRoseDeMer[0];
  const hifuTreatmentDetails = primaryService.HIFUTreatmentInfo;
  const supplementaryServiceInfo = primaryService.serviceUltraformerSupplementary;
  const alertMessage = warnings[2]?.warningRoseDeMer[0]|| {};

  return (
    <div className="containerService">
      <div className="roseDeMerBanner">
        <div className="centerLogo">
          <h1>Rose de Mer</h1>
      </div>
      </div>
      <div className="bannerMiddle">
        <div className="bannerMiddleContent">
          <div className="title">
            <h2>{primaryService.title}</h2>
          </div>
          <div className="titleDescription">
            <h5>{primaryService.whatIs}</h5>
            <p>{primaryService.whatIsDescription}</p>
            <h5>{primaryService.whatContains}</h5>
            <ul>
              {(primaryService.whatContainsItems || []).map((contains, index) => (
                <li key={index}>{contains}</li>
              ))}
            </ul>
            <h5>{primaryService.firstSession}</h5>
            <div className="bannerMiddleContentDetails">
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
            <div className="bannerButton">
              {primaryService.btnComponent}
            </div>
          </div>
          <div className="bannerMiddlePhoto">
            <img src={primaryService.imgSrc} alt="" />
          </div>
        </div>
      </div>
      <div className="bannerBottom"></div>
    </div>
  );
};

export default RoseDeMer;
