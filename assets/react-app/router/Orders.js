import React, { Component } from "react";
import PaginateOrder from "../component/order/PaginateOrder";
export default class Orders extends Component {
  render() {
    return (
      <div className="container" style={{ flex: 1, padding: "20px" }}>
        <h4>
          <i className="fas fa-shopping-cart" /> Orders
        </h4>
        <p />
        <PaginateOrder />
      </div>
    );
  }
}
