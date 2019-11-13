import React, { Component } from "react";

class NewMessage extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  state = {
    message: ""
  };

  isDisabled = () => this.state.message === "";

  onMessageChange = e => {
    this.setState({
      message: e.target.value
    });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    this.props.onNewMessage(this.state.message);
    this.setState({
      message: ""
    });
  };

  render() {
    const { message } = this.state;
    return (
      <div>
        <form className="input-group" onSubmit={this.onHandleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            value={message}
            onChange={this.onMessageChange}
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewMessage;
