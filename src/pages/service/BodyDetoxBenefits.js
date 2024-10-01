import React from "react";
import Ultraformerstyles from './Ultraformer.module.css';
import "../../shared/common.css";
import ItemList from "../../components/Itemlist";

const BodyDetoxBenefits = ({
  bodyDetoxBenefitsTitle,
  bodyDetoxBenefitsDescription,
  okokTitle,
  okok
}) => {


  return (
    <div>
      <div className="globalServiceIncluded">
        <div className={Ultraformerstyles.serviceIncludedContent}>
          <div className={Ultraformerstyles.hifuTreatment}>
            {bodyDetoxBenefitsTitle}
              <ItemList items={bodyDetoxBenefitsDescription} />
            {okokTitle}
              <ItemList items={okok} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyDetoxBenefits;
