import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export default class MobileSideBar extends Component {
  render() {
    return (
      <Navbar fixed="bottom" bg="dark" variant="dark" className="m-0 p-0 pl-3">
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
                to="/categories"
                activeClassName="active"
                className="nav-link p-1 m-1"
              >
                <i class="fas fa-paw"></i>
              </NavLink>
            </li>
            <li className="nav-item p-1 m-1">
              <NavLink
                to="/createproduct"
                activeClassName="active"
                className="nav-link p-1 m-1"
              >
                <i class="fas fa-list-alt"></i>
              </NavLink>
            </li>
            <li className="nav-item p-1 m-1">
              <NavLink
                to="/visitor"
                activeClassName="active"
                className="nav-link p-1 m-1"
              > <i class="far fa-eye"></i>
                
              </NavLink>
            </li>



           
          </ul>
        </div>
      </Navbar>
    );
  }
}
