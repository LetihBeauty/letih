import React from "react";
import styles from'./FacialTreatmentGuide.module.css';
import ItemList from "../../components/Itemlist.jsx";
import ItemComponent from "../../components/ItemComponent.jsx";

const FacialTreatmentGuide = ({
  firstColumnItems,
  secondColumnItems,
  warningMessage
}) => {
  return (
    <div className="globalServiceIncluded">
      <div className="globalTreatment">
        <h3 className="globalMainBottomTitle">
          What is included in this service?
        </h3>
        <div className="globalBannerMiddleContent" >
          <ItemList
            items={firstColumnItems}
            titleComponent={({item }) => (
              <div className="globalDescriptionStyle">
                <ItemComponent item={item}/>
              </div>
            )}
            descriptionComponent={() => null}
            isList={false}
          />
          <ItemList
            items={secondColumnItems}
            titleComponent={({item }) => (
              <div className="globalDescriptionStyle">
                <ItemComponent item={item}/>
              </div>
            )}
            descriptionComponent={() => null}
            isList={false}
          />
        </div>
      </div>
      <div className={styles.serviceIncludedWarning}>
        <div>
          <span className="material-symbols-outlined">info</span>
          <h6>{warningMessage}</h6>
        </div>
      </div>
    </div>
  );
};

export default FacialTreatmentGuide;
