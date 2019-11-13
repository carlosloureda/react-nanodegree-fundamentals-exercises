import React, { Component } from "react";
import PropTypes from "prop-types";

class Game extends Component {
  constructor(props) {
    super(props);
    const question = this.calculateNumbers();
    this.state = {
      value1: question[0],
      value2: question[1],
      value3: question[2],
      proposedAnswer: question[3]
    };
  }

  calculateNumbers = () => {
    let value1 = Math.floor(Math.random() * 100);
    let value2 = Math.floor(Math.random() * 100);
    let value3 = Math.floor(Math.random() * 100);
    let proposedAnswer =
      Math.floor(Math.random() * 3) + value1 + value2 + value3;

    return [value1, value2, value3, proposedAnswer];
  };

  onHandleAnswer = userAnswer => {
    let answerSolution =
      this.state.proposedAnswer ===
      this.state.value1 + this.state.value2 + this.state.value3;

    const question = this.calculateNumbers();
    this.setState({
      value1: question[0],
      value2: question[1],
      value3: question[2],
      proposedAnswer: question[3]
    });
    this.props.checkAnswer(answerSolution);
  };

  render() {
    const { value1, value2, value3, proposedAnswer } = this.state;
    return (
      <div>
        <div className="equation">
          <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
        </div>
        <button onClick={() => this.onHandleAnswer(true)}>True</button>
        <button onClick={() => this.onHandleAnswer(false)}>False</button>
      </div>
    );
  }
}

Game.propTypes = {
  checkAnswer: PropTypes.func.isRequired
};

export default Game;
