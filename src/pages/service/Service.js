import React from "react";
import './Service.css';
import {facialDeepCleasing} from "../../components/constants/index.js"
import ServiceMobileNavbar from "../../components/ServiceNavBar.js";

const Service = ({title,
  whatIs,
  whatIsDescription,
  benefits,
  benefitsDescription,
  benefitsRecommendations,
  timeDescription,
  priceDescription,
  btnComponent,
  imgSrc,
  warningMessage }) => {

  const primaryService = facialDeepCleasing[0];
  const supplementaryServiceInfo = primaryService.facialDeepCleasingSupplementary;

  return (

    <div className="containerService">
      <div className="bannerService">
        <div className="mobile-navbar-wrapper">
          <ServiceMobileNavbar></ServiceMobileNavbar>
        </div>
        <div className="banner-middle">
          <div className="banner-middle-content">
            <div className="title">
              <h2>{title}</h2>
            </div>
            <div className="title-description">{/*aqui*/}
              <h5>{whatIs}</h5>
              <p>{whatIsDescription}</p>
              <h5>{benefits}</h5>
              <p>{benefitsDescription}</p>
              <p className="banner-middle-recommendation">{benefitsRecommendations}</p>
              <div className="banner-middle-content-details">
                <div>
                  <h5>Time:</h5>
                  <p>{timeDescription}</p>
                </div>
                <div>
                  <h5>Price:</h5>
                  <p>{priceDescription}</p>
                </div>
              </div>
              <div className="banner-button">
                {btnComponent}
              </div>
            </div>
            <div className="banner-middle-photo">
              <img src={imgSrc} alt="" />
            </div>
          </div>
        </div>
        <div className="banner-bottom"></div>
        <div className="serviceIncluded">
          <div className="serviceIncluded-content">
            <h4 className="service-title">What is included in this service?</h4>
                <div className="serviceSteps">
                  {supplementaryServiceInfo.map((item, index) => (
                    <div key={index}>
                      <h5>{title}:
                        <span class="description-style">{item.descriptions}</span>
                      </h5>
                    </div>
                  ))
                  }
                </div>
            <div className="serviceIncluded-warning">
              <div>
                <span class="material-symbols-outlined">info</span>
                <h6>{warningMessage}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
