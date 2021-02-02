import React, { Component } from "react";
import Axios from "axios";
import { NavLink, Link } from "react-router-dom";
import { Table, Spinner, Pagination } from "react-bootstrap";
import { Col, Row } from "reactstrap";
import ModalProd from "../Old/ModalProd";

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 10,
      data: null,
      pagination: null,
      active: 0,
      product: null,
      categoryData: null,
      categoryFilter: null,
      stockgreat: null,
      stockless: null,
    };
    this.productInput = null;
    this.categoryInput = null;
    this.stockgreatInput = null;
    this.stocklessInput = null;

    this.product = (e) => {
      this.productInput = e;
    };
    this.category = (e) => {
      this.categoryInput = e;
    };
    this.stockgreat = (e) => {
      this.stockgreatInput = e;
    };
    this.stockless = (e) => {
      this.stocklessInput = e;
    };
  }

  paginate(array, page_size, page_number) {
    console.log(page_size);
    // --page_number; // because pages logically start with 1, but technically with 0
    return array.slice(page_number * page_size, (page_number + 1) * page_size);
  }

  componentDidMount() {
    this.mounted = true;
    Axios.get(`/api/admin/products`)
      .then((response) => {
        if (this.mounted) {
          const { data } = response;
          console.log(data);
          this.setState({
            defaultData: data,
          });
          this.paginateData(data);
        }
      })
      .catch((e) => console.log(e));

    Axios.get("api/admin/product/categories")
      .then((response) => {
        if (this.mounted) {
          this.setState({
            categoryData: response.data,
          });
        }
      })
      .catch((error) => console.log(error));
  }
  componentWillUnmount() {
    this.mounted = false;
  }

  paginateData = (data) => {
    console.log(data);
    const { limit } = this.state;
    const range = Math.ceil(data.length / limit);
    this.setState({
      pagination: this.paginate(data, limit, 0),
      data: data,
      range: range,
      active: 0,
    });
  };
  handlePage = (page) => {
    this.setState({
      pagination: this.paginate(this.state.data, this.state.limit, page),
      active: page,
    });
  };

  handleRemove = (id) => {
    console.log("handle remove", id);
    Axios({
      method: "DELETE",
      url: `/api/admin/products/${id}`,
    })
      .then((response) => {
        console.log(response);
        let { data, active } = this.state;
        let deleted = data.filter((x) => x.id !== id);
        this.setState({ data: deleted });
        this.handlePage(active);
      })
      .catch((e) => console.log(e));
  };

  handleEdit(id) {
    this.props.edit(id);
  }

  handleClear = () => {
    console.log("clearing");

    if (this.product) this.productInput.value = "";
    if (this.category) this.categoryInput.value = "";
    if (this.stockgreat) this.stockgreatInput.value = "";
    if (this.stockless) this.stocklessInput.value = "";

    this.setState({
      product: null,
      categoryFilter: null,
      stockgreat: null,
      stockless: null,
    });
  };

  handleSearch = () => {
    const { product, categoryFilter, stockgreat, stockless } = this.state;
    let data = this.state.defaultData;
    if (product) {
      data = data.filter(
        (x) => x.productName.toLowerCase().indexOf(product.toLowerCase()) !== -1
      );
    }

    if (categoryFilter) {
      if (categoryFilter !== "NONE") {
        data = data.filter((x) => x.category.name === categoryFilter);
      }
    }
    if (stockgreat) {
      data = data.filter((x) => x.productStock > parseFloat(stockgreat));
    }
    if (stockless) {
      data = data.filter((x) => x.productStock < parseFloat(stockless));
    }

    this.paginateData(data);
  };

  render() {
    console.log(this.props);
    const { data, active, range, pagination, categoryData } = this.state;
    let items = [];
    if (range) {
      for (let number = 0; number < range; number++) {
        items.push(
          <Pagination.Item
            onClick={() => {
              this.handlePage(number);
            }}
            key={number}
            active={number === active}
          >
            {number + 1}
          </Pagination.Item>
        );
      }
    }

    return (
      <div>
        <div className="p-2 border rounded mb-3">
          <h5>Search</h5>
          <Row>
            <Col xs="12" sm="6" lg="3">
              <div>
                <label>Product Name</label>
                <input
                  ref={this.product}
                  type="text"
                  onChange={(e) => this.setState({ product: e.target.value })}
                  style={{ width: "12em" }}
                  className="form-control"
                />
              </div>
            </Col>
            <Col xs="12" sm="6" lg="3">
              <label>Category</label>
              <select
                ref={this.category}
                onChange={(e) =>
                  this.setState({ categoryFilter: e.target.value })
                }
                className="form-control"
                style={{ width: "12em" }}
              >
                <option value="NONE">Filter By</option>
                {categoryData &&
                  categoryData.map((data) => (
                    <option key={data.id} value={data.name}>
                      {data.name}
                    </option>
                  ))}
              </select>
            </Col>
            <Col xs="12" sm="6" lg="3">
              <div>
                <label>Stock Greater Than</label>
                <input
                  ref={this.stockgreat}
                  type="number"
                  onChange={(e) =>
                    this.setState({ stockgreat: e.target.value })
                  }
                  style={{ width: "12em" }}
                  className="form-control"
                />
              </div>
            </Col>
            <Col xs="12" sm="6" lg="3">
              <div>
                <label>Stock Less Than</label>
                <input
                  ref={this.stockless}
                  type="number"
                  onChange={(e) => this.setState({ stockless: e.target.value })}
                  style={{ width: "12em" }}
                  className="form-control"
                />
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs="12" sm="6" lg="3">
              <div className="pt-3 pb-3">
                <button className="btn btn-info" onClick={this.handleSearch}>
                  <i className="fas fa-search" /> {"  "} Search
                </button>
              </div>
            </Col>

            <Col xs="12" sm="6" lg="3">
              <div className="pt-3 pb-3">
                <button
                  className="btn btn-secondary"
                  onClick={this.handleClear}
                >
                  <i className="fas fa-eraser" /> {"  "} Clear
                </button>
              </div>
            </Col>
            <Col xs="12" sm="6" lg="3">
              <div className="pt-3 pb-3" />
            </Col>
            <Col xs="12" sm="6" lg="3">
              <div className="pt-3 pb-3" />
            </Col>
          </Row>
        </div>
        <div className="container border rounded">
          <div className="m-3">
            <div className="row">
              <Col>
                {pagination && (
                  <div>
                    {data && data.length ? (
                      <h6>{data.length} result found</h6>
                    ) : (
                      <h6>No result found</h6>
                    )}
                  </div>
                )}
              </Col>
              <Col>
                <Link className="btn btn-primary float-right" to="/newproduct">
                  <i className="fas fa-plus-square fa-1x" /> Add Product
                </Link>
              </Col>
            </div>
            <br />
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
                {pagination ? (
                  pagination.map((x, i) => (
                    <tr key={i}>
                      <td>
                        <img
                          src={"/images/" + x.productImage}
                          alt=""
                          style={{ width: "50px", height: "50px" }}
                        />
                      </td>
                      <td>{x.productName}</td>
                      <td>{x.category ? x.category.name : ""}</td>
                      <td>{x.productPrice}</td>
                      <td>{x.productStock}</td>
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
                          name={x.productName}
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
                disabled={active === 0}
              />
              <Pagination>{items}</Pagination>
              <Pagination.Next
                onClick={() => this.handlePage(active + 1)}
                disabled={active === range - 1}
              />
            </Pagination>
          </div>
        </div>
      </div>
    );
  }
}
