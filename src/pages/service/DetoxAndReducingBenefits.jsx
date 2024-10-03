import React from "react";
import "../../shared/common.css";
import ItemList from "../../components/Itemlist";

const DetoxAndReducingBenefits  = ({
  title,
  secondTitle,
  subtitle,
  items,
  includesItems

}) => {
  return (
    <div>
      {title && <h5 className="globalMainBottomTitle">{title}</h5>}
      <ItemList items={items} />
      {secondTitle && <h5 className="globalMainBottomTitle">{secondTitle}</h5>}
      {subtitle && <p className="globalMainBottomTitleDescription">{subtitle}</p>}
      <ItemList items={includesItems} />
    </div>
  );
};

export default DetoxAndReducingBenefits;
