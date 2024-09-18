import React from "react";
import './Service.css';
import ServiceMobileNavbar from "../../components/ServiceNavBar.js";

const BannerService = ({
  title,
  whatIs,
  whatIsDescription,
  benefits,
  benefitsDescription,
  benefitsRecommendations,
  timeDescription,
  priceDescription,
  btnComponent,
  imgSrc,
}) => {
  return (
    <div className="containerService">
      <div className="mobile-navbar-wrapper">
        <ServiceMobileNavbar />
      </div>
      <div className="banner-middle">
        <div className="banner-middle-content">
          <div className="title">
            <h2>{title}</h2>
          </div>
          <div className="title-description">
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
    </div>
  );
};

export default BannerService;
