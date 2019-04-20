import React, { Component } from "react";
import OneItem from "./oneItem";
import AddOneItem from "./addOneItem";

class FruitsList extends Component {
  state = {
    items: [
      { name: "Buy Groceries", order: 1 },
      { name: "Take Out Trash", order: 2 },
      { name: "Walk Dog", order: 3 }
    ]
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
        <AddOneItem />
      </div>
    );
  }
}

export default FruitsList;
