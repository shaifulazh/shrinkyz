import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table, Spinner, Pagination } from "react-bootstrap";
import Axios from "axios";
import ModalCat from "../product/ModalCat";

export default class CategoryEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    this.mounted = true;
    this.handleAxios();
  }
  componentWillUnmount() {
    this.mounted = false;
  }

  handleAxios() {
    Axios.get("api/admin/product/categories")
      .then(response => {
        if (this.mounted) {
          console.log(response.data);
          this.setState({
            data: response.data
          });
        }
      })
      .catch(error => console.log(error));
  }

  handleRemove = id => {
    console.log("removing ", id);
    Axios({
      method: "DELETE",
      url: `/api/admin/categories/${id}`
    })
      .then(response => {
        console.log(response);
        this.handleAxios();
      })
      .catch(e => console.log(e));
  };
  render() {
    const { data } = this.state;
    return (
      <div className="container" style={{ flex: 1, padding: "20px" }}>
        <h4>
          <i className="fas fa-boxes" /> {"  "}
          <Link to="/product">Product</Link>
          {"   "}> {"   "}
          Category List
        </h4>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Category Name</th>
              <th>details</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              data.map((x, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{x.name}</td>
                  <td>{x.details}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning"
                      data-toggle="modal"
                      data-target={"#category" + x.id}
                    >
                      <i className="far fa-1x fa-trash-alt" /> Remove
                    </button>

                    <ModalCat
                      delete={this.handleRemove}
                      id={x.id}
                      name={x.name}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>
                  <Spinner animation="border" />
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}
