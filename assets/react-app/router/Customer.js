import React, { Component } from "react";
import CustomerList from "../component/customer/index";
export default class Customer extends Component {
  render() {
    return (
      <div className="container-fluid" style={{ flex: 1, padding: "20px" }}>
        <h4>
          <i className="fas fa-users" />
          {"  "}
          Customer
        </h4>
        <CustomerList />
      </div>
    );
  }
}
