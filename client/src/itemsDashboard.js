import React, { Component } from "react";
import OneItem from "./oneItem";
import AddOneItem from "./addOneItem";

class ItemsDashboard extends Component {
  state = {
    items: [
      { name: "Buy Groceries", order: 1 },
      { name: "Take Out Trash", order: 2 },
      { name: "Walk Dog", order: 3 }
    ]
  };

  handleAddItemFormSubmit = list => {
    // console.log('ListDashboard now handling CreateFormSubmit.');
    this.createList(list);
  };

  render() {
    const allItems = this.state.items.map((item, index) => {
      console.log(index);
      return (
        <div key={"Item_" + index}>
          <OneItem name={item.name} order={item.order} />
        </div>
      );
    });

    return (
      <div>
        <h1>To Do List</h1>
        {allItems}
        <AddOneItem item_order={this.state.items.length} />
      </div>
    );
  }
}

export default ItemsDashboard;
