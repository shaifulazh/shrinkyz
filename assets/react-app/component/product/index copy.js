import React, { Component } from "react";
import Axios from "axios";
import { NavLink, Link } from "react-router-dom";
import { Table, Spinner, Pagination } from "react-bootstrap";
import { Col, Row } from "reactstrap";
import ModalProd from "../product/ModalProd";

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = { data: null, active: 1, total: 5, limit: 10, range: null };
  }

  componentDidMount() {
    const { limit } = this.state;
    this.mounted = true;
    Axios.get(`/api/admin/productpage?page=1&limit=${limit}`)
      .then(response => {
        if (this.mounted) {
          console.log(response.data);
          const { data } = response;
          const range = Math.ceil(data.total_count / limit);
          this.setState({
            data: data.items,
            total: data.total_count,
            range: range
          });
        }
      })
      .catch(e => console.log(e));
  }
  componentWillUnmount() {
    this.mounted = false;
  }
  handlePage = page => {
    console.log(page);
    this.setState({ data: null }, () => {
      Axios.get(`/api/admin/productpage?page=${page}&limit=${this.state.limit}`)
        .then(response => {
          if (this.mounted) {
            console.log(response.data);
            const { data } = response;
            this.setState({ data: data.items });
          }
        })
        .catch(e => console.log(e));

      this.setState({ active: page });
    });
  };

  handleRemove = id => {
    console.log("handle remove", id);
    Axios({
      method: "DELETE",
      url: `/api/admin/products/${id}`
    })
      .then(response => {
        console.log(response);
        this.handlePage(this.state.active);
      })
      .catch(e => console.log(e));
  };

  handleEdit(id) {
    this.props.edit(id);
  }
  render() {
    console.log(this.props);
    const { data, active, range } = this.state;
    let items = [];
    if (range) {
      for (let number = 1; number <= range; number++) {
        items.push(
          <Pagination.Item
            onClick={() => {
              this.handlePage(number);
            }}
            key={number}
            active={number === active}
          >
            {number}
          </Pagination.Item>
        );
      }
    }

    return (
      <div>
        <Row>
          <div className="col-6">
            <h4>
              <i className="fas fa-boxes" /> {"  "}Product List
            </h4>
          </div>
          <div className="col-6">
            <Link className="btn btn-primary float-right" to="/newproduct">
              <i className="fas fa-plus-square fa-1x" /> Add Product
            </Link>
          </div>
        </Row>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>
                Category{" "}
                <Link className="btn btn-primary" to="/category">
                  <i className="fas fa-edit" /> Edit
                </Link>
              </th>
              <th>Price</th>
              <th>Stock</th>
              <th>Edit</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              data.map((x, i) => (
                <tr key={i}>
                  <td>
                    <img
                      src={"/images/" + x.product_image}
                      alt=""
                      style={{ width: "50px", height: "50px" }}
                    />
                  </td>
                  <td>{x.product_name}</td>
                  <td>{x.category ? x.category.name : ""}</td>
                  <td>{x.product_price}</td>
                  <td>{x.product_stock}</td>
                  <td>
                    {/* <button
                      onClick={() => this.handleEdit(x.id)}
                      className="btn btn-primary"
                    >
                      <i className="fas fa-edit fa-1x" /> Edit
                    </button> */}

                    <Link
                      className="btn btn-primary"
                      to={{ pathname: "/edit", state: { id: x.id } }}
                    >
                      <i className="far fa-edit" /> {"  "}Edit
                    </Link>
                  </td>
                  <td>
                    {/* <button
                      onClick={() => this.handleRemove(x.id)}
                      className="btn btn-primary"
                    >
                      <i className="far fa-1x fa-trash-alt" /> Remove
                    </button> */}
                    <button
                      type="button"
                      className="btn btn-warning"
                      data-toggle="modal"
                      data-target={"#product" + x.id}
                    >
                      <i className="far fa-1x fa-trash-alt" /> Remove
                    </button>

                    <ModalProd
                      delete={this.handleRemove}
                      id={x.id}
                      name={x.product_name}
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
        <br />
        <Pagination>
          <Pagination.Prev
            onClick={() => this.handlePage(active - 1)}
            disabled={active === 1 ? true : false}
          />
          <Pagination>{items}</Pagination>
          <Pagination.Next
            onClick={() => this.handlePage(active + 1)}
            disabled={active === range}
          />
        </Pagination>
      </div>
    );
  }
}
