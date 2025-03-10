import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="border">
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
              to="/categories"
              activeClassName="active"
              className="list-group-item list-group-item-action"
            >
              <i class="fas fa-paw"></i> Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/createproduct"
              activeClassName="active"
              className="list-group-item list-group-item-action"
            >
              <i class="fas fa-list-alt"></i> Devops
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/visitor"
              activeClassName="active"
              className="list-group-item list-group-item-action"
            >
              <i class="far fa-eye"></i> Visitor
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
