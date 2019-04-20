import React, { Component } from "react";

class AddOneItem extends Component {
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
