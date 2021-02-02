import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export default class MobileSideBar extends Component {
  render() {
    return (
      <Navbar sticky="top" className="navbar navbar-dark bg-dark">
          <div className="row">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink
              to="/admin"
              exact
              activeClassName="active"
              className="nav-link "
            >
              <i className="fas fa-home" /> 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/product"
              activeClassName="active"
              className="nav-link"
            >
              <i className="fas fa-boxes" /> 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/orders" activeClassName="active" className="nav-link">
              <i className="fas fa-shopping-cart" /> 
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/customer"
              activeClassName="active"
              className="nav-link"
            >
              <i className="fas fa-users" /> 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/formredux"
              activeClassName="active"
              className="nav-link"
            >
              <i className="fas fa-boxes" /> 
            </NavLink>
          </li>
        </ul>
        </div>
      </Navbar>
    );
  }
}
