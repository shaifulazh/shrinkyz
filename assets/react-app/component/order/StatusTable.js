import React, { Component } from "react";
import axios from "axios";

export default class StatusTable extends Component {
  constructor(props) {
    super(props);

    this.state = { status: props.status };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e, id) {
    console.log("handle change is fired", e, id);
    axios
      .patch(`/api/admin/orders/${id}/status`, { status: e })
      .then(response => {
        console.log("response", response);
        this.setState({ status: e });
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    const { id } = this.props;
    return (
      <td>
        <select
          value={this.state.status}
          onChange={event => this.handleChange(event.target.value, id)}
        >
          <option value="PENDING">PENDING</option>
          <option value="DELIVERING">DELIVERING</option>
          <option value="PROCESSING">PROCESSING</option>
          <option value="COMPLETED">COMPLETED</option>
        </select>
      </td>
    );
  }
}
