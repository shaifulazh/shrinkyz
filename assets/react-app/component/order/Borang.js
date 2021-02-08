import React, { Component } from "react";

import StatusTable from "./StatusTable";
import DeleteOrder from "./DeleteOrder";
import { Table, Spinner } from "react-bootstrap";

export default class Borang extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  handleStatus = (value) => {
    console.log(value);
    this.props.filterStatus(value);
    this.props.resetStatusFilter(value);
  };

  render() {
    console.log("render running..", this.props);
    const { data, filter } = this.props;

    return (
      <div className="overflow-auto">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Email</th>
              <th>Total</th>
              <th>Products</th>
              <th>
                Status
                {"  "}{" "}
                <select
                  defaultValue={"NONE"}
                  onChange={(e) => this.handleStatus(e.target.value)}
                >
                  <option
                    selected={this.props.statusFilter === "NONE" ? true : false}
                    value="NONE"
                  >
                    Filter By
                  </option>
                  <option value="PENDING">PENDING</option>
                  <option value="DELIVERING">DELIVERING</option>
                  <option value="PROCESSING">PROCESSING</option>
                  <option value="COMPLETED">COMPLETED</option>
                </select>
              </th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {!data && (
              <tr>
                <td>
                  <Spinner animation="border" />
                </td>
              </tr>
            )}
            {data &&
              data.map((e) => (
                <tr className="container" key={e.id}>
                  <td>{e.user.email}</td>
                  <td>RM:{e.total.toFixed(2)}</td>
                  <td>{e.orderdetails.length}</td>
                  <StatusTable status={e.status} id={e.id} />
                  <td>
                    <DeleteOrder id={e.id} filter={filter} />
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
