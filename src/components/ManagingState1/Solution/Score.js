import React from "react";
import PropTypes from "prop-types";

const Score = ({ totalAnswers, totalCorrectAnswers }) => {
  return (
    <p className="text">
      Your Score: {totalCorrectAnswers}/{totalAnswers}
    </p>
  );
};

Score.propTypes = {
  totalAnswers: PropTypes.number.isRequired,
  totalCorrectAnswers: PropTypes.number.isRequired
};

export default Score;
