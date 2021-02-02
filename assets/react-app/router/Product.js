import React, { Component } from "react";
import ProductList from "../component/product/Old/ProductList";
export default class Product extends Component {
  render() {
    return (
      <div className="container" style={{ flex: 1, padding: "20px" }}>
        <h4>
          <i className="fas fa-boxes" /> Product
        </h4>
        <p />
        <ProductList />
      </div>
    );
  }
}
