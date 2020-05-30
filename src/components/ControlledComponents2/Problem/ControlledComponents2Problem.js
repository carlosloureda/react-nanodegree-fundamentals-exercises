import React, { Component } from "react";

class ControlledComponents2Problem extends Component {
  state = {

  };

  render() {
    return (
      <div className="App">
        <h2>Shopping List</h2>
        <form>
          <input
            type="text"
            placeholder="Enter New Item"
          />
          <button>Add</button>
        </form>

        <button>
          Delete Last Item
        </button>

        <p className="items">Items</p>
        <ol className="item-list">

        </ol>
      </div>
    );
  }
}

export default ControlledComponents2Problem;
