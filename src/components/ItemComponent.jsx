import React from 'react';

const ItemComponent = ({ item }) => {
  console.log(item);
  return (
    <h5 key={item.id}>
      {item.title}
      <span>
        <p>{item.description}</p>
      </span>
    </h5>
  );
};

export default ItemComponent;
