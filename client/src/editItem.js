import React, { Component } from "react";

class EditItem extends Component {
  state = {
    item_name: this.props.name,
    item_order: this.props.order
  };

  render() {
    return (
      <div>
        <h3 align="center">Update Item</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Item Name: </label>
            <input
              type="text"
              value={this.state.item_name}
              onChange={this.onChangeItemName}
            />
          </div>
          <div>
            <label>Item Order </label>
            <input
              type="text"
              value={this.state.item_order}
              onChange={this.onChangeItemOrder}
            />
          </div>

          <div>
            <input type="submit" value="Update Item" />
          </div>
        </form>
      </div>
    );
  }
}

export default EditItem;
