import React from "react";
import './Service.css';

const ServiceIncluded = ({
  title,
  supplementaryServiceInfo,
  warningMessage,
}) => {
  return (
    <div className="bannerService">
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
  );
};

export default ServiceIncluded;
