import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export default class MobileSideBar extends Component {
  render() {
    return (
      <Navbar className="navbar navbar-dark bg-dark m-0 p-0 px-4">
        <div className="row">
          <ul className="nav nav-pills">
            <li className="nav-item p-1 m-1 ">
              <NavLink
                to="/admin"
                exact
                activeClassName="active"
                className="nav-link p-1 m-1 "
              >
                <i className="fas fa-home" />
              </NavLink>
            </li>
            <li className="nav-item p-1 m-1">
              <NavLink
                to="/product"
                activeClassName="active"
                className="nav-link p-1 m-1"
              >
                <i className="fas fa-boxes" />
              </NavLink>
            </li>
            <li className="nav-item p-1 m-1">
              <NavLink
                to="/orders"
                activeClassName="active"
                className="nav-link p-1 m-1"
              >
                <i className="fas fa-shopping-cart" />
              </NavLink>
            </li>

            <li className="nav-item p-1 m-1">
              <NavLink
                to="/customer"
                activeClassName="active"
                className="nav-link p-1 m-1"
              >
                <i className="fas fa-users" />
              </NavLink>
            </li>
            <li className="nav-item p-1 m-1">
              <NavLink
                to="/createproduct"
                activeClassName="active"
                className="nav-link p-1 m-1"
              >
                <i className="fas fa-boxes" />
              </NavLink>
            </li>
            <NavLink
              to="/hooks"
              activeClassName="active"
              className="nav-link p-1 m-1"
            >
              <i className="fas fa-boxes" />
            </NavLink>
          </ul>
        </div>
      </Navbar>
    );
  }
}
