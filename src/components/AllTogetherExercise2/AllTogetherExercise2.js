import React from "react";
// import AddPlayer from "./AddPlayer";
// import Players from "./Players";
import { Link } from "react-router-dom";
import logo from "./../../logo.svg";
import "./AllTogetherExercise2.css";
import ChatWindow from "./ChatWindow";
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
          {users.map(user => (
            <ChatWindow key={user.username} user={user} messages={messages} />
          ))}
        </div>
      </div>
    );
  }
}

export default AllTogetherExercide2;
