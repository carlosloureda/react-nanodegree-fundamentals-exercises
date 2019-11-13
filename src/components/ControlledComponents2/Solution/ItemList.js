import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <>
      <p className="items">Items</p>
      <ol className="item-list">
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </ol>
    </>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemList;
