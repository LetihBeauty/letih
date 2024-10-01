import React from "react";
import "../../src/shared/common.css";


const ItemList = ({ items }) => {
  /**
* Checks if the provided `bodyDetoxBenefitsDescription` is an array
* and whether it contains any elements. If not, it returns a message
* indicating that no benefits are available.
*/
  if (!Array.isArray(items) || items.length === 0) {
    return <p>No benefits available.</p>;  // Handles the undefined case
  }

  return (
    <div>
      {items.map((item) => {
        // Checks if the item is valid and has a title or description
        if (!item || (!item.title && !item.description)) {
          return null; // Ignores the item if it is not valid
        }
        return (
          <div key={item.id}>
            {item.title && <h4 className="">{item.title}</h4>}
            {item.description && <p className="">{item.description}</p>}
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
