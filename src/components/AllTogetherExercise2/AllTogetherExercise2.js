import React from "react";
// import AddPlayer from "./AddPlayer";
// import Players from "./Players";
import { Link } from "react-router-dom";
import logo from "./../../logo.svg";
import "./AllTogetherExercise2.css";
/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: "Amy" }, { username: "John" }];

const messages = [
  { username: "Amy", text: "Hi, Jon!" },
  { username: "Amy", text: "How are you?" },
  { username: "John", text: "Hi, Amy! Good, you?" }
];

class AllTogetherExercide2 extends React.Component {
  state = {};
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return false;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        {/* Router is outside the Lesson 3 exercises, just added for having all the exercises together */}
        <Link to="/">Go Home</Link>
        <h1>AllTogetherExercide2</h1>
        <div className="container">
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{users[0].username}</div>

            <ul className="message-list">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === users[0].username
                      ? "message sender"
                      : "message recipient"
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <form className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your message..."
                />
                <div className="input-group-append">
                  <button
                    className="btn submit-button"
                    disabled={this.isDisabled()}
                  >
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{users[1].username}</div>
            <ul className="message-list">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === users[1].username
                      ? "message sender"
                      : "message recipient"
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <form className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your message..."
                />
                <div className="input-group-append">
                  <button
                    className="btn submit-button"
                    disabled={this.isDisabled()}
                  >
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllTogetherExercide2;
