import React from "react";
import "../../src/shared/common.css";

const ItemList = ({ items, titleComponent: TitleComponent, descriptionComponent: DescriptionComponent, containerClass, isList }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return <p>No benefits available.</p>;
  }

  return (
    <div className={containerClass}>
      {isList ? (
        <ul>
          {items.map((item) => {
            if (!item || (!item.title && !item.description)) {
              return null;
            }
            return (
              <li key={item.id}>
                {TitleComponent ? (
                  <TitleComponent item={item}>{item.title}</TitleComponent>
                ) : (
                  <h4>{item.title}</h4>
                )}
                {DescriptionComponent ? (
                  <DescriptionComponent>{item.description}</DescriptionComponent>
                ) : (
                  <p>{item.description}</p>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        items.map((item) => {
          if (!item || (!item.title && !item.description)) {
            return null;
          }
          return (
            <div key={item.id}>
              {TitleComponent ? (
                <TitleComponent item={item}>{item.title}</TitleComponent>
              ) : (
                <h4>{item.title}</h4>
              )}
              {DescriptionComponent ? (
                <DescriptionComponent>{item.description}</DescriptionComponent>
              ) : (
                <p>{item.description}</p>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default ItemList;
