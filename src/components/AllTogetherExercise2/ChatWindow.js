import React, { Component } from "react";
import PropTypes from "prop-types";
import Messages from "./Messages";
import NewMessage from "./NewMessage";

class ChatWindow extends Component {
  render() {
    const { user, messages } = this.props;
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user.username}</div>
        <Messages messages={messages} user={user} />
        <NewMessage />
      </div>
    );
  }
}
ChatWindow.propTypes = {
  //   onMessage: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired
};

export default ChatWindow;
