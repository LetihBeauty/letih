import React from "react";
import "../../shared/common.css";
import ItemList from "../../components/Itemlist";

const BodyDetoxBenefits = ({
  title,
  subtitle,
  items,
  includesItems,
  containerClass

}) => {

  return (
    <div className="globalServiceIncluded">
      <div className="globalServiceIncludedContent">
        <div className="globalTreatment">
          {title && <h2 className="globalMainBottomTitle">{title}</h2>}
          <ItemList items={items} />
          {subtitle && <p className="globalMainBottomTitleDescription">{subtitle}</p>}
          <ItemList items={includesItems} />
        </div>
      </div>
    </div>
  );
};

export default BodyDetoxBenefits;
