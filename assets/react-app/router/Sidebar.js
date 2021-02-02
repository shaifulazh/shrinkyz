import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="border sidebar-wrapper" style={{ minheight: "100vh" }}>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <NavLink
              to="/admin"
              exact
              activeClassName="active"
              className="list-group-item list-group-item-action"
            >
              <i className="fas fa-home" /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              activeClassName="active"
              className="list-group-item list-group-item-action"
            >
              <i className="fas fa-boxes" /> Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders"
              activeClassName="active"
              className="list-group-item list-group-item-action"
            >
              <i className="fas fa-shopping-cart" /> Order
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/customer"
              activeClassName="active"
              className="list-group-item list-group-item-action"
            >
              <i className="fas fa-users" /> Customer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/formredux"
              activeClassName="active"
              className="list-group-item list-group-item-action"
            >
              <i className="fas fa-boxes" /> DevOps
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
