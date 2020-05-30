import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Players extends Component {
  state = {
    showGameScore: true
  };
  onToggleGameVisibility = () => {
    this.setState({
      showGameScore: !this.state.showGameScore
    });
  };
  render() {
    const { showGameScore } = this.state;
    if (Object.entries(this.props.players).length === 0) {
      return <h1>Not players added to our app</h1>;
    }

    return (
      <div>
        <h1>Players on the app</h1>
        <button onClick={() => this.onToggleGameVisibility()}>
          {showGameScore ? "Hide" : "Show"} the Number of Games Played
        </button>
        <ul>
          {Object.values(this.props.players).map(player => {
            return (
              <li key={player.username}>
                {player.username} played{" "}
                {showGameScore ? player.gamesPlayedCount : "*"} games.
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

Players.propTypes = {
  players: PropTypes.shape({
    firstName: PropTypes.string,
    lasttName: PropTypes.string,
    username: PropTypes.string,
    gamesPlayedCount: PropTypes.number
  }).isRequired
};
