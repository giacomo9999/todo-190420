import React, { Component } from "react";

class AddOneItem extends Component {
  state = {
    person_name: "",
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
