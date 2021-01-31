import React, { Component } from "react";
import axios from "axios";

export default class DeleteOrder extends Component {
  constructor(props) {
    super(props);

    this.state = { status: null };

    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete = id => {
    console.log("deleteing", id);
    axios
      .delete(`/api/admin/orders/${id}`)
      .then(e => {
        console.log(e);
        this.props.filter(id);
      })
      .catch(e => console.log(e));
  };
  render() {
    return (
      <div>
        <button
          className="btn btn-danger"
          onClick={() => this.handleDelete(this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}
