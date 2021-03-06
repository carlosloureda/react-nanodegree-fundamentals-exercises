import React from "react";

import AddPlayer from "./AddPlayer";
import Players from "./Players";

class AllTogetherExercise1Solution extends React.Component {
  state = {
    players: {
      //   carlosloureda: {
      //     firstName: "Carlos",
      //     lastName: "Loureda",
      //     username: "carlosloureda",
      //     gamesPlayedCount: 0
      //   }
    }
  };
  onAddNewPlayer = player => {
    if (player.username in this.state.players) {
      return {
        error: `The username ${player.username} is already on the system`
      };
    }

    this.setState({
      players: {
        ...this.state.players,
        [player["username"]]: player
      }
    });
    return { error: null };
  };
  render() {
    return (
      <div>
        <h1>AllTogetherExercise1Solution</h1>
        <h2>Add and List some players</h2>
        <AddPlayer onAddNewPlayer={this.onAddNewPlayer} />
        <Players players={this.state.players} />
      </div>
    );
  }
}

export default AllTogetherExercise1Solution;
