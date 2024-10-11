import React from "react";
import "../../shared/common.css";
import ItemList from "../../components/Itemlist.jsx";
import ItemComponent from "../../components/ItemComponent.jsx";
import BodyDetoxStyles from "../service/BodyDetox.module.css";

const BodyDetoxBenefits  = ({
  mainTitle='',
  secondMainTitle,
  secondItems='',
  treatmentBenefits
}) => {
  return (
    <div className="globalServiceIncluded">
      <div className="globalServiceIncludedContent">
        <div className="globalTreatment">
          {mainTitle && <h3 className="globalMainBottomTitle">{mainTitle}</h3>}
          <ItemList
            items={treatmentBenefits}
            titleComponent={({item}) => (
              <div className={BodyDetoxStyles.BdDescriptionStyle}>
                <ItemComponent item={item}/>
              </div>
            )}
            descriptionComponent={() => null}
            isList={false}
          />
          {secondMainTitle && <h3 className="globalMainBottomTitle" style={{ marginTop: '60px' }}>{secondMainTitle}</h3>}
          <ItemList
            items={secondItems}
            titleComponent={({ children, item }) => (
              <h5 className="globalBenefits">{children}
                {item.title ? (
                  <span className={BodyDetoxStyles.BdDescriptionStyle} >
                    <p>{item.description}</p>
                  </span>
                ) : (
                  <span >
                    <p>{item.description}</p>
                  </span>
                )}
              </h5>
            )}
            descriptionComponent={() => null}
            isList={false}
          />

        </div>
      </div>
    </div>
  );
};

export default BodyDetoxBenefits;
