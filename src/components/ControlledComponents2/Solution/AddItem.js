import React, { Component } from "react";

class AddItem extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  inputIsEmpty = () => {
    return this.state.value === "";
  };

  onAddItem = e => {
    e.preventDefault();
    this.props.onAddItem(this.state.value);
    this.setState({
      value: ""
    });
  };

  render() {
    return (
      <div>
        <h2>Shopping List</h2>
        <form onSubmit={this.onAddItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>
      </div>
    );
  }
}

export default AddItem;
