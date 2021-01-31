import React, { Component } from "react";
import Axios from "axios";
import { Table, Pagination, Row, Col, Spinner } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import Modal from "./Modal";

export default class PaginateOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 10,
      data: null,
      pagination: null,
      active: 0,
      email: null,
      statusFilter: null,
      toDate: null,
      fromDate: null
    };
  }
  paginate(array, page_size, page_number) {
    console.log(page_size);
    // --page_number; // because pages logically start with 1, but technically with 0
    return array.slice(page_number * page_size, (page_number + 1) * page_size);
  }

  componentDidMount() {
    this.mounted = true;
    Axios.get(`/api/admin/order`)
      .then(response => {
        if (this.mounted) {
          const { data } = response;
          console.log("data res", data);
          this.setState({ defaultData: data });
          this.paginateData(data);
        }
      })
      .catch(e => {
        console.log(e);
      });
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

  filterItems = (arr, query) => {
    return arr.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  };

  formatDate = date => {
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth();
    const day = new Date(date).getDate();
    return `${day}-${month + 1}-${year}`;

    // let toFormat = new Date(date);
    // let formatDate =
    //   toFormat.getDate() +
    //   "-"(toFormat.getMonth() + 1) +
    //   toFormat.getFullYear();
  };

  handleSearch = () => {
    const {
      email,
      statusFilter,
      fromDate,
      toDate,
      orderId,
      greater,
      less
    } = this.state;
    let data = this.state.defaultData;
    if (email) {
      data = data.filter(
        x => x.user.email.toLowerCase().indexOf(email.toLowerCase()) !== -1
      );
    }

    if (statusFilter) {
      if (statusFilter !== "NONE") {
        data = data.filter(x => x.status === statusFilter);
      }
    }

    if (fromDate && toDate) {
      if (new Date(fromDate).getTime() === new Date(toDate).getTime()) {
        let dateSame = new Date(toDate);
        dateSame.setDate(dateSame.getDate() + 1);
        data = data.filter(item => {
          return (
            new Date(item.createdAt).getTime() >=
              new Date(fromDate).getTime() &&
            new Date(item.createdAt).getTime() <= dateSame.getTime()
          );
        });
      } else {
        data = data.filter(item => {
          return (
            new Date(item.createdAt).getTime() >=
              new Date(fromDate).getTime() &&
            new Date(item.createdAt).getTime() <= new Date(toDate).getTime()
          );
        });
      }
    }

    if (orderId) {
      data = data.filter(x => x.id === parseInt(orderId));
    }

    if (greater) {
      data = data.filter(x => x.total > parseFloat(greater));
    }
    if (less) {
      data = data.filter(x => x.total < parseFloat(less));
    }
    this.paginateData(data);
  };

  handleDelete = value => {
    console.log(value);
    Axios({
      method: "DELETE",
      url: `/api/admin/orders/${value}`
    })
      .then(res => {
        console.log(res);
        let { data, active } = this.state;
        let deleted = data.filter(x => x.id !== value);
        this.setState({ data: deleted });
        this.handlePage(active);
      })
      .catch(e => console.log(e));
  };

  handleClear = () => {
    console.log("clearing");
    this.refs.email.value = "";
    this.refs.status.value = "NONE";
    this.refs.order.value = "";
    this.refs.greater.value = "";
    this.refs.less.value = "";
    this.setState({
      email: null,
      statusFilter: null,
      fromDate: null,
      toDate: null,
      orderId: null,
      greater: null,
      less: null
    });
  };

  render() {
    const { data, range, active, pagination, statusFilter } = this.state;
    console.log(statusFilter);
    let items = [];
    if (range) {
      for (let number = 0; number < range; number++) {
        items.push(
          <Pagination.Item
            onClick={() => this.handlePage(number)}
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
            <Col xs="12" sm="6" lg="3">
              <label>Status</label>
              <select
                ref="status"
                onChange={e => this.setState({ statusFilter: e.target.value })}
                className="form-control"
                style={{ width: "12em" }}
              >
                <option value="NONE">Filter By</option>
                <option value="PENDING">PENDING</option>
                <option value="DELIVERING">DELIVERING</option>
                <option value="PROCESSING">PROCESSING</option>
                <option value="COMPLETED">COMPLETED</option>
              </select>
            </Col>
            <Col xs="12" sm="6" lg="3">
              <label>From</label>
              <div>
                <DatePicker
                  style={{ width: "12em" }}
                  selectsStart
                  className="form-control"
                  placeholderText="Click to select a date"
                  onChange={e => this.setState({ fromDate: e })}
                  selected={this.state.fromDate}
                  startDate={this.state.fromDate}
                  endDate={this.state.toDate}
                  dateFormat="dd/MM/yyyy"
                  maxDate={this.state.toDate}
                  isClearable={true}
                />
              </div>
            </Col>
            <Col xs="12" sm="6" lg="3">
              <label>To</label>
              <div>
                <DatePicker
                  style={{ width: "12em" }}
                  selectsEnd
                  className="form-control"
                  placeholderText="Click to select a date"
                  onChange={e => this.setState({ toDate: e })}
                  selected={this.state.toDate}
                  startDate={this.state.fromDate}
                  endDate={this.state.toDate}
                  dateFormat="dd/MM/yyyy"
                  minDate={this.state.fromDate}
                  isClearable={true}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="6" lg="3">
              <div className="pt-2 pb-2">
                <label>Order Id</label>
                <input
                  ref="order"
                  onChange={e => this.setState({ orderId: e.target.value })}
                  style={{ width: "12em" }}
                  className="form-control"
                />
              </div>
            </Col>
            <Col xs="12" sm="6" lg="3">
              <div className="pt-2 pb-2">
                <label>Total Greater Than</label>
                <input
                  ref="greater"
                  onChange={e => this.setState({ greater: e.target.value })}
                  style={{ width: "12em" }}
                  className="form-control"
                />
              </div>
            </Col>
            <Col xs="12" sm="6" lg="3">
              <div className="pt-2 pb-2">
                <label>Total Less Than</label>
                <input
                  ref="less"
                  onChange={e => this.setState({ less: e.target.value })}
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
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>User Email</th>
                    <th>Order Id</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Date Created</th>
                    <th>Action</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {pagination ? (
                    pagination.map((x, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{x.user.email}</td>
                        <td>{x.id}</td>
                        <td>{x.total}</td>
                        <td>{x.status}</td>
                        <td>{this.formatDate(x.createdAt)}</td>
                        <td>
                          <Link
                            className="btn btn-primary"
                            to={{ pathname: "/vieworder", state: { data: x } }}
                          >
                            <i className="fas fa-pen-square" />
                            {"  "}View
                          </Link>
                        </td>
                        <td>
                          <div>
                            <button
                              type="button"
                              className="btn btn-warning"
                              data-toggle="modal"
                              data-target={"#modal" + x.id}
                            >
                              <i className="far fa-1x fa-trash-alt" /> Delete
                            </button>

                            <Modal delete={this.handleDelete} id={x.id} />
                          </div>
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
      </div>
    );
  }
}
