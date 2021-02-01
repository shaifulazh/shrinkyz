import React, { Component } from "react";
import Axios from "axios";
import { NavLink, Link } from "react-router-dom";
import { Table, Spinner, Pagination } from "react-bootstrap";
import { Col, Row } from "reactstrap";

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 10,
      data: null,
      pagination: null,
      active: 0,
      email: null
    };
  }
  formatDate = date => {
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth();
    const day = new Date(date).getDate();
    return `${day}-${month + 1}-${year}`;
  };

  paginate(array, page_size, page_number) {
    console.log(page_size);
    // --page_number; // because pages logically start with 1, but technically with 0
    return array.slice(page_number * page_size, (page_number + 1) * page_size);
  }

  componentDidMount() {
    this.mounted = true;
    Axios.get(`/api/admin/customer`)
      .then(response => {
        if (this.mounted) {
          const { data } = response;
          console.log(data);
          this.setState({
            defaultData: data
          });
          this.paginateData(data);
        }
      })
      .catch(e => console.log(e));
  }
  componentWillUnmount() {
    this.mounted = false;
  }

  paginateData = data => {
    console.log(data);
    const { limit } = this.state;
    const range = Math.ceil(data.length / limit);
    this.setState({
      pagination: this.paginate(data, limit, 0),
      data: data,
      range: range,
      active: 0
    });
  };
  handlePage = page => {
    this.setState({
      pagination: this.paginate(this.state.data, this.state.limit, page),
      active: page
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

  handleClear = () => {
    console.log("clearing");
    this.refs.email.value = "";

    this.setState({
      email: null
    });
  };

  handleSearch = () => {
    const { email } = this.state;
    let data = this.state.defaultData;
    if (email) {
      data = data.filter(
        x => x.email.toLowerCase().indexOf(email.toLowerCase()) !== -1
      );
    }

    this.paginateData(data);
  };

  render() {
    console.log(this.props);
    const { data, active, range, pagination } = this.state;
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
                <label>Email</label>
                <input
                  ref="email"
                  type="text"
                  onChange={e => this.setState({ email: e.target.value })}
                  style={{ width: "12em" }}
                  className="form-control"
                />
              </div>
            </Col>
            <Col xs="12" sm="6" lg="3" />
            <Col xs="12" sm="6" lg="3" />
            <Col xs="12" sm="6" lg="3" />
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
              {pagination && (
                <div>
                  {data && data.length ? (
                    <h6>{data.length} result found</h6>
                  ) : (
                    <h6>No result found</h6>
                  )}
                </div>
              )}
            </div>
            <br />
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Email </th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Registered On</th>
                </tr>
              </thead>
              <tbody>
                {pagination ? (
                  pagination.map((x, i) => (
                    <tr key={i}>
                      <td>{x.email}</td>
                      <td>{x.firstname}</td>
                      <td>{x.lastname}</td>
                      <td>{this.formatDate(x.createdAt)}</td>
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
