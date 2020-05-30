import React, { Component } from 'react';
import './AllTogetherExercise2Exercise.css';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `README.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

const messages = [
  { username: 'Amy', text: 'Hi, Jon!' },
  { username: 'Amy', text: 'How are you?' },
  { username: 'John', text: 'Hi, Amy! Good, you?' },
];


class AllTogetherExercise2Exercise extends Component {
  /*
   If the user did not type anything, he/she should not be
   allowed to submit.
   */
  isDisabled = () => {
    return false;
  };

  render() {
    return (
      <div className="container">
        <div className="chat-window">
          <h2>Super Awesome Chat</h2>
          <div className="name sender">{users[0].username}</div>

          <ul className="message-list">
            {messages.map((message, index) => (
              <li
                key={index}
                className={
                  message.username === users[0].username ? 'message sender' : 'message recipient'
                }
              >
                <p>{`${message.username}: ${message.text}`}</p>
              </li>
            ))}
          </ul>

          <div>
            <form className="input-group">
              <input type="text" className="form-control" placeholder="Enter your message..." />
              <div className="input-group-append">
                <button className="btn submit-button" disabled={this.isDisabled()}>
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
                  message.username === users[1].username ? 'message sender' : 'message recipient'
                }
              >
                <p>{`${message.username}: ${message.text}`}</p>
              </li>
            ))}
          </ul>

          <div>
            <form className="input-group">
              <input type="text" className="form-control" placeholder="Enter your message..." />
              <div className="input-group-append">
                <button className="btn submit-button" disabled={this.isDisabled()}>
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AllTogetherExercise2Exercise;
