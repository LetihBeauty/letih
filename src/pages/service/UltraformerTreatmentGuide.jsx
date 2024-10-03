import React from "react";
import Ultraformerstyles from'./Ultraformer.module.css';
import "../../shared/common.css";
import ItemList from "/home/victor/code/victorfonsecass/letih/src/components/Itemlist.jsx";

const UltraformerTreatmentGuide = ({
  supplementaryServiceInfo,
  classMapping,
  HIFUTreatmentAreasDescription,
  tariffs
}) => {

  return (
    <div>
      <div className={Ultraformerstyles.ServiceIncluded}>
        <div className="globalServiceIncludedContent">
          <div className="globalTreatment">
            <ItemList
              items={HIFUTreatmentAreasDescription}
              titleComponent={({ children }) => (
                <h3 className="globalMainBottomTitle">{children}</h3>
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
                <div style={{ display: 'flex', alignItems: 'center' }} className="globalBenefits">
                  <h5 className={classMapping[item.id]}>{children}
                  <span className="descriptionStyle"> {item.description}</span></h5>
                </div>
              )}
              descriptionComponent={({ children }) => ( // Does not render the description component if it has already been displayed in titleComponent
                null
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
      <div className={Ultraformerstyles.secondBannerBottom}></div>
    </div>
  );
};

export default UltraformerTreatmentGuide;
