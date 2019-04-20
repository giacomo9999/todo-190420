import React, { Component } from "react";

class AddOneItem extends Component {
  render() {
    return (
      <div>
        <h3>Add An Item</h3>
        <form>
          <div className="form-group">
            <label>Add New Item: </label>
            <input type="text" className="form-control" />
          </div>
          
          <div className="form-group">
            <input
              type="submit"
              value="Register Item"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AddOneItem;
