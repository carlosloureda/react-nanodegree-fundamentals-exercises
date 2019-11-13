import React from "react";
import AddPlayer from "./AddPlayer";
import Players from "./Players";
import { Link } from "react-router-dom";

class AllTogetherExercide1 extends React.Component {
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
        {/* Router is outside the Lesson 3 exercises, just added for having all the exercises together */}
        <Link to="/">Go Home</Link>
        <h1>AllTogetherExercide1</h1>
        <h2>Add and List some players</h2>
        <AddPlayer onAddNewPlayer={this.onAddNewPlayer} />
        <Players players={this.state.players} />
      </div>
    );
  }
}

export default AllTogetherExercide1;
