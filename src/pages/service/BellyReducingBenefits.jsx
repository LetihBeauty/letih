import React from "react";
import "../../shared/common.css";
import ItemList from "../../components/Itemlist";
import BellyReducingStyles from "../service/BellyReducing.module.css";
import ItemComponent from "../../components/ItemComponent.jsx";

const BellyReducingBenefits = ({
  mainTitle = '',
  secondMainTitle,
  secondItems = '',
  treatmentBenefits,
  firstThreeItems,
  lastTwoItems,
  thirdMainTitle
}) => {

return (
    <div className="globalServiceIncluded">
      <div className="globalServiceIncludedContent">
        <div className={BellyReducingStyles.bdtreatment}>
          {mainTitle && <h3 className="globalMainBottomTitle">{mainTitle}</h3>}

          <ItemList
            items={treatmentBenefits}
            titleComponent={({item } ) => <ItemComponent item={item} />}
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
                  <span className="globalDescriptionStyle">
                    <p>{item.description}</p>
                  </span>
                ) : (
                  <span className="globalDescriptionStyle">
                    <p>{item.description}</p>
                  </span>
                )}
              </h5>
            )}
            descriptionComponent={() => null}
            containerClass="globalMainBottomTreatment"
            isList={false}
          />

          {thirdMainTitle && <h3 className="globalMainBottomTitle" style={{ marginTop: '60px' }}>{thirdMainTitle}</h3>}
          <div className="globalBannerMiddle">
            <div className="globalBannerMiddleContent">
              <ItemList
                items={firstThreeItems}
                titleComponent={({item }) => (
                  <div className="globalDescriptionStyle">
                    <ItemComponent item={item}/>
                  </div>
                )}
                descriptionComponent={() => null}
                isList={false}
              />
              <ItemList
                items={lastTwoItems}
                titleComponent={({item } ) => (
                  <div className="globalDescriptionStyle">
                    <ItemComponent item={item} />
                  </div>
                )}
                descriptionComponent={() => null}
                isList={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BellyReducingBenefits;
