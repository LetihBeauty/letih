import React from "react";
import Ultraformerstyles from './Ultraformer.module.css';
import "../../shared/common.css";

const BodyDetoxBenefits = ({
  bodyDetoxBenefitsTitle,
  bodyDetoxBenefitsDescription,
  okokTitle,
  okok
}) => {
/**
* Checks if the provided `bodyDetoxBenefitsDescription` is an array
* and whether it contains any elements. If not, it returns a message
* indicating that no benefits are available.
*/
  if (!Array.isArray(bodyDetoxBenefitsDescription) || bodyDetoxBenefitsDescription.length === 0) {
    return <p>No benefits available.</p>;  // Handles the undefined case
  }

  return (
    <div>
      <div className="globalServiceIncluded">
        <div className={Ultraformerstyles.serviceIncludedContent}>
          <div className={Ultraformerstyles.hifuTreatment}>
            {bodyDetoxBenefitsTitle}
            {bodyDetoxBenefitsDescription.map((item) => {
              // Checks if the item is valid and has a title or description
              if (!item || (!item.title && !item.description)) {
                return null; // Ignores the item if it is not valid
              }
              return (
                <div key={item.id}>
                  {item.title && <h4 className={Ultraformerstyles.hifuTitle}>{item.title}</h4>}
                  {item.description && <p className={Ultraformerstyles.hifuDescrDescription}>{item.description}</p>}
                </div>
              );
            })}
            {okokTitle}
            {okok.map((item) => {
              // Checks if the item is valid and has a title or description
              if (!item || (!item.title && !item.description)) {
                return null; // Ignores the item if it is not valid
              }
              return (
                <div key={item.id}>
                  {item.title && <h4 className={Ultraformerstyles.hifuTitle}>{item.title}</h4>}
                  {item.description && <p className={Ultraformerstyles.hifuDescrDescription}>{item.description}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyDetoxBenefits;
