import React from "react";
import PropTypes from "prop-types";

const DeleteLastItem = ({ onDeleteLastItem, buttonDisabled }) => {
  return (
    <button onClick={onDeleteLastItem} disabled={buttonDisabled}>
      Delete Last Item
    </button>
  );
};

DeleteLastItem.propTypes = {
  buttonDisabled: PropTypes.bool.isRequired,
  onDeleteLastItem: PropTypes.func.isRequired
};

export default DeleteLastItem;
