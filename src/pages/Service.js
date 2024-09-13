import React from "react";
import "./Service.css";
import { facialDeepCleasing, facialDeepCleasingSupplementary,treatmentContraindications} from "../components/constants/index.js"

const Service = () => {
  const primaryService = facialDeepCleasing[0];
  const supplementaryServiceInfo = facialDeepCleasingSupplementary;
  const facialTreatmentPrecautions =  treatmentContraindications[0];

  return (
    <div className="containerService">
      <div className="bannerService">
        <div className="banner-top">
          <h1>Service Page</h1>
          <p>Learn more Service us on this page.</p>
        </div>

        <div className="banner-middle">
          <div className="banner-middle-content">
            {/* Exibindo diretamente os detalhes do serviço */}
            <h2>{primaryService.title}</h2>
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
        <div className="banner-bottom"></div>
        <div className="serviceIncluded">
          <div className="serviceIncluded-content">
            <h5>What is included in this service?</h5>
                <div className="serviceSteps">
                  {supplementaryServiceInfo.map((item, index) => (
                    <div key={index} className="detail-item">
                      <h5>{item.title}:</h5>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
            <div className="serviceIncluded-warning">
            {facialTreatmentPrecautions.warning}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
