import React from "react";
import "./Service.css";
import { facialDeepCleasing, facialDeepCleasingSupplementary,treatmentContraindications} from "../../components/constants/index.js"
import ServiceMobileNavbar from "../../components/ServiceNavBar.js";

const Service = () => {
  const primaryService = facialDeepCleasing[0];
  const supplementaryServiceInfo = facialDeepCleasingSupplementary;
  const facialTreatmentPrecautions =  treatmentContraindications[0];

  return (

    <div className="containerService">
      <div className="bannerService">
        <div className="mobile-navbar-wrapper">
          <ServiceMobileNavbar></ServiceMobileNavbar>
        </div>
        <div className="banner-middle">
          <div className="banner-middle-content">
            {/* Exibindo diretamente os detalhes do serviço */}
            <div className="title">
              <h2>{primaryService.title}</h2>
            </div>
            <div className="title-description">{/*aqui*/}
              <h5>{primaryService.whatIs}</h5>
              <p>{primaryService.whatIsDescription}</p>
              <h5>{primaryService.benefits}</h5>
              <p>{primaryService.benefitsDescription}</p>
              <p className="banner-middle-recommendation">{primaryService.benefitsRecommendations}</p>
              <div className="banner-middle-content-details">
                <div>
                  <h5>Time:</h5>
                  <p>{primaryService.timeDescription}</p>
                </div>
                <div>
                  <h5>Price:</h5>
                  <p>{primaryService.priceDescription}</p>
                </div>
              </div>
              <div className="banner-button">
                {primaryService.btnComponent}
              </div>
            </div>
            <div className="banner-middle-photo">
              <img src={primaryService.imgSrc} alt="" />
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
                      <h5>{item.title}:
                        <span class="description-style">{item.description}</span>
                      </h5>
                    </div>
                  ))}
                </div>
            <div className="serviceIncluded-warning">
              <div>
                <span class="material-symbols-outlined">info</span>
                <h6>{facialTreatmentPrecautions.warning}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
