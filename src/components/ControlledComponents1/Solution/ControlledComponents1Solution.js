import React, { Component } from "react";

class ControlledComponents1Solution extends Component {
  state = {
    value: ""
  };

  onHandleChange = e => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div className="container">
        <input
          type="text"
          value={this.state.value}
          onChange={this.onHandleChange}
          placeholder="Say Something"
        />
        <p className="echo">Echo:</p>
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default ControlledComponents1Solution;
