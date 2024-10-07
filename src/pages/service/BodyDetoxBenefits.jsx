import React from "react";
import "../../shared/common.css";
import ItemList from "../../components/Itemlist";
import DetoxAndReducingStyles from "../service/DetoxAndReducingBenefits.module.css";
const BodyDetoxBenefits  = ({
  mainTitle='',
  secondMainTitle,
  secondItems='',
  treatmentBenefits
}) => {
  return (
    <div>
      {mainTitle && <h3 className="globalMainBottomTitle">{mainTitle}</h3>}
      <ItemList
        items={treatmentBenefits}
        titleComponent={({ children, item }) => (
          <div className={DetoxAndReducingStyles.benefitItem}>
            <h5>{children}
              <span className={DetoxAndReducingStyles.descriptionStyle}>
                <p>{item.description}</p>
              </span>
            </h5>
          </div>
        )}
        descriptionComponent={() => null}
        containerClass="globalMainBottomTreatment"
        isList={false}
      />
      {secondMainTitle && <h3 className="globalMainBottomTitle" style={{ marginTop: '60px' }}>{secondMainTitle}</h3>}
      <ItemList
        items={secondItems}
        titleComponent={({ children, item }) => (
          <h5 className="globalBenefits">{children}
            {item.title ? (
              <span className={DetoxAndReducingStyles.descriptionStyle}>
                <p>{item.description}</p>
              </span>
            ) : (
              <span className={DetoxAndReducingStyles.withoutTitleStyle}>
                <p>{item.description}</p>
              </span>
            )}
            </h5>

        )}
        descriptionComponent={() => null}
        containerClass="globalMainBottomTreatment"
        isList={false}
      />
    </div>
  );
};

export default BodyDetoxBenefits;
