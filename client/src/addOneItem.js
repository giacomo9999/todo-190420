import React, { Component } from "react";

class AddOneItem extends Component {
  state = {
    item_name: "",
    item_order: this.props.item_order
  };

  onChangeItemName(e) {
    this.setState({
      item_name: e.target.value
    });
  }

  onChangeItemOrder(e) {
    this.setState({
      item_order: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(
      `The values are ${this.state.item_name}, ${this.state.item_order}`
    );
    this.setState({
      item_name: "",
      item_order: ""
    });
  }

  render() {
    return (
      <div>
        <h3>Add An Item</h3>
        <form>
          <div>
            <label>Add New Item: </label>
            <input type="text" />
          </div>

          <div>
            <input type="submit" value="Register Item" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddOneItem;
