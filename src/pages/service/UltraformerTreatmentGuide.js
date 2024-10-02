import React from "react";
import Ultraformerstyles from'./Ultraformer.module.css';
import "../../shared/common.css";
import ItemList from "/home/victor/code/victorfonsecass/letih/src/components/Itemlist.js";

const UltraformerTreatmentGuide = ({
  supplementaryServiceInfo,
  classMapping,
  HIFUTreatmentAreasDescription,
  tariffs
}) => {

  return (
    <div>
      <div className="globalServiceIncluded">
        <div className="globalServiceIncludedContent">
          <div className="globalTreatment">
            <ItemList
              items={HIFUTreatmentAreasDescription}
              titleComponent={({ children }) => (
                <h4 className="globalMainBottomTitle">{children}</h4>
              )}
              descriptionComponent={({ children }) => (
                <p className="globalMainBottomTitleDescription">{children}</p>
              )}
              containerClass="globalMainBottomTreatment"
              isList={false}
            />
            <ItemList
              items={supplementaryServiceInfo}
              titleComponent={({ item, children }) => (
                <h5 className={classMapping[item.id]}>{children}</h5>
              )}
              descriptionComponent={({ children }) => (
                <span>{children}</span>
              )}
              containerClass="globalServiceSteps"
              isList={false}
            />
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
