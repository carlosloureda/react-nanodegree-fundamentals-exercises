import React, { Component } from "react";
import PropTypes from "prop-types";
import "./AddPlayer.css";

class AddPlayer extends Component {
  state = {
    player: {
      firstName: "",
      lastName: "",
      username: "",
      gamesPlayedCount: 0
    },
    errorMessage: "",
    showSuccess: false
  };
  onSubmit = e => {
    e.preventDefault();
    const { player } = this.state;
    let response = this.props.onAddNewPlayer(player);
    if (response.error) {
      console.error(`response.error: ${response.error}`);
      this.setState({
        errorMessage: response.error
      });
    } else {
      this.setState(
        {
          player: {
            firstName: "",
            lastName: "",
            username: "",
            gamesPlayedCount: 0
          },

          errorMessage: "",
          //   Show toast
          showSuccess: true
        },
        () => {
          //   Hide toast
          setTimeout(() => {
            this.setState({ showSuccess: false });
          }, 1000);
        }
      );
    }
  };
  onChangeField = e => {
    const { value, name } = e.target;
    this.setState({
      player: {
        ...this.state.player,
        [name]: value
      }
    });
  };
  render() {
    const {
      firstName,
      lastName,
      username,
      gamesPlayedCount
    } = this.state.player;

    const submitBtnIsEnabled =
      username !== "" && firstName !== "" && lastName !== "";
    return (
      <form>
        {/* <legend>AddPlayers</legend> */}
        <div>
          {this.state.errorMessage && (
            <span className="error">Error: {this.state.errorMessage}</span>
          )}
          {this.state.showSuccess && (
            <span className="success">Player added successfully</span>
          )}
        </div>
        <div>
          <label htmlFor="">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={e => this.onChangeField(e)}
          />
        </div>
        <div>
          <label htmlFor="">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.onChangeField}
          />
        </div>
        <div>
          <label htmlFor="">Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.onChangeField}
          />
        </div>
        <div>
          <label htmlFor="">Games played:</label>
          <input
            type="number"
            min="0"
            name="gamesPlayedCount"
            value={gamesPlayedCount}
            onChange={this.onChangeField}
          />
        </div>
        <button onClick={e => this.onSubmit(e)} disabled={!submitBtnIsEnabled}>
          Add Player
        </button>
      </form>
    );
  }
}

AddPlayer.propTypes = {
  onAddNewPlayer: PropTypes.func.isRequired
};

export default AddPlayer;
