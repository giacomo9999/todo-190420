import React, { Component } from "react";

class OneItem extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>{this.props.name}</h3>
        <h5>Item Order:{this.props.order}</h5>
        <h5>---</h5>
      </div>
    );
  }
}

export default OneItem;
