import React, { Component } from "react";

class ControlledComponents1Solution extends Component {
  render() {
    return (
      <div className="container">
        <input type="text" placeholder="Say Something" />
        <p className="echo">Echo:</p>
        <p>This should mirror the text you typed into the input field.</p>
      </div>
    );
  }
}

export default ControlledComponents1Solution;
