import React, { Component } from "react";
import ItemList from "./ItemList";
import AddItem from "./AddItem";
import DeleteLastItem from "./DeleteLastItem";

class ControlledComponents2Solution extends Component {
  state = {
    items: []
  };

  addItem = item => {
    this.setState(oldState => ({
      items: [...oldState.items, item]
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: prevState.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <AddItem onAddItem={this.addItem} />
        <DeleteLastItem
          onDeleteLastItem={this.deleteLastItem}
          buttonDisabled={this.noItemsFound()}
        />

        <ItemList items={this.state.items} />
      </div>
    );
  }
}

export default ControlledComponents2Solution;
