import React, { Component } from "react";
import Game from "./Game";
import Score from "./Score";

class ManagingState1Problem extends Component {
  state = {
    totalAnswers: 0,
    totalCorrectAnswers: 0
  };

  checkAnswer = userAnswer => {
    this.setState(state => ({
      totalAnswers: state.totalAnswers + 1,
      totalCorrectAnswers: userAnswer
        ? state.totalCorrectAnswers + 1
        : state.totalCorrectAnswers
    }));
  };

  render() {
    const { totalAnswers, totalCorrectAnswers } = this.state;
    return (
      <div className="game">
        <h2>Mental Math</h2>
        <Game checkAnswer={this.checkAnswer} />
        <Score
          totalAnswers={totalAnswers}
          totalCorrectAnswers={totalCorrectAnswers}
        />
      </div>
    );
  }
}

export default ManagingState1Problem;
