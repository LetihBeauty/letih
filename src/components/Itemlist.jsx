import React from "react";
import "../../src/shared/common.css";

const ItemList = ({
  items,
  titleComponent: TitleComponent,
  descriptionComponent: DescriptionComponent,
  isList,
}) => {
  if (!Array.isArray(items) || items.length === 0) {
    return <p>No benefits available.</p>;
  }

  return (
    <div className="container">
      {isList ? (
        <ul>
          {items.map((item, index) => {
            if (!item || (!item.title && !item.description)) {
              return null;
            }
            return (
              <li key={item.id || index}>
                {TitleComponent ? (
                  <TitleComponent item={item}>{item.title}</TitleComponent>
                ) : (
                  <h3>{item.title}</h3>
                )}
                {item.description &&
                  (DescriptionComponent ? (
                    <DescriptionComponent>
                      {item.description}
                    </DescriptionComponent>
                  ) : (
                    <p>{item.description}</p>
                  ))}
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
            <div key={item.id} className="description">
              {TitleComponent ? (
                <TitleComponent item={item}>{item.title}</TitleComponent>
              ) : (
                <h3>{item.title}</h3>
              )}
              {item.description &&
                (DescriptionComponent ? (
                  <DescriptionComponent>
                    {item.description}
                  </DescriptionComponent>
                ) : (
                  <p>{item.description}</p>
                ))}
            </div>
          );
        })
      )}
    </div>
  );
};

export default ItemList;
