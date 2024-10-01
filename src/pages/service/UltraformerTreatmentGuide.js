import React from "react";
import Ultraformerstyles from'./Ultraformer.module.css';
import "../../shared/common.css";

const UltraformerTreatmentGuide = ({
  supplementaryServiceInfo,
  classMapping,
  HIFUTreatmentAreasDescription,
  tariffs
}) => {

  return (
    <div>
      <div className="globalServiceIncluded">
        <div className={Ultraformerstyles.serviceIncludedContent}>
          <div className={Ultraformerstyles.hifuTreatment}>
            {HIFUTreatmentAreasDescription.map((item) => (
              <div key={item.id}>
                <h4 className={Ultraformerstyles.hifuTitle}>
                  {item.title}
                </h4>
                <p className={Ultraformerstyles.hifuDescrDescription}>
                  {item.description}
                </p>
              </div>
            ))
            }
          </div>
          <div className={Ultraformerstyles.serviceSteps}>
            {supplementaryServiceInfo.map((item) => (
              <h5 key={item.id} className={`${classMapping[item.id]}`}>
                {item.title}
                <span className={Ultraformerstyles.descriptionStyle}>{item.description}</span>
              </h5>
            ))
            }
          </div>
          <div className={`${Ultraformerstyles.prices}`}>
            <div className={Ultraformerstyles.pricesContainer}>
              <h2>Prices</h2>
              <div>
                {Array.isArray(tariffs) && tariffs.slice(0,2).map((item) => (
                  <div key={item.id}>
                    <div className={Ultraformerstyles.pricesDescription}>
                      <h5>{item.title}</h5>
                      <p>{item.time}</p>
                      <div className={Ultraformerstyles.priceInfo}>
                        <p>{item.includes}</p>
                        <hr className={Ultraformerstyles.myLine}/>
                        <p className={Ultraformerstyles.serviceRates}>{item.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                {Array.isArray(tariffs) && tariffs.slice(2,5).map((item) => (
                  <div key={item.id}>
                    <div className={Ultraformerstyles.pricesDescription}>
                      <h5>{item.title}</h5>
                      <div className={Ultraformerstyles.priceInfo}>
                        <p>{item.time}</p>
                        <hr className={Ultraformerstyles.myLine}/>
                        <p className={Ultraformerstyles.serviceRates}>{item.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="globalBannerBottom"></div>
    </div>
  );
};

export default UltraformerTreatmentGuide;
