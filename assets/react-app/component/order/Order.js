import React, { Component } from "react";
import { Table, Pagination, Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";
import ModalOrder from "./ModalOrder";

export default class Order extends Component {
  constructor(props) {
    super(props);

    this.state = { data: null, status: null };
  }

  componentDidMount() {
    const { data } = this.props.location.state;
    this.setState({
      data: data,
      status: data.status
    });
  }

  handlePENDING = id => {
    console.log("handle change is fired", id);
    Axios.patch(`/api/admin/orders/${id}/status`, { status: "PENDING" })
      .then(response => {
        console.log("response", response);
        this.setState({ status: "PENDING" });
      })
      .catch(e => {
        console.log(e);
      });
  };
  handleCompleted = id => {
    console.log("handle change is fired", id);
    Axios.patch(`/api/admin/orders/${id}/status`, { status: "COMPLETED" })
      .then(response => {
        console.log("response", response);
        this.setState({ status: "COMPLETED" });
      })
      .catch(e => {
        console.log(e);
      });
  };
  handleDelivering = id => {
    console.log("handle change is fired", id);
    Axios.patch(`/api/admin/orders/${id}/status`, { status: "DELIVERING" })
      .then(response => {
        console.log("response", response);
        this.setState({ status: "DELIVERING" });
      })
      .catch(e => {
        console.log(e);
      });
  };

  handleProcessing = id => {
    console.log("handle change is fired", id);
    Axios.patch(`/api/admin/orders/${id}/status`, { status: "PROCESSING" })
      .then(response => {
        console.log("response", response);
        this.setState({ status: "PROCESSING" });
      })
      .catch(e => {
        console.log(e);
      });
  };

  render() {
    const { data, status } = this.state;
    console.log(data);
    return (
      <div className="container" style={{ flex: 1, padding: "20px" }}>
        <div>
          <div className="row">
            <div className="col-sm">
              <h4>
                <i className="fas fa-shopping-cart" /> {"  "}
                <Link to="/orders">Order</Link>
                {"   "}> {"   "}
                View Order
              </h4>
            </div>
          </div>
          <div className="border rounded p-3 mt-3">
            {data && (
              <div className="container">
                <h4>Order List</h4>
                <table className="table table-sm table-dark">
                  <thead>
                    <tr>
                      <td>#</td>
                      <th>Item</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.orderdetails.map(x => (
                      <tr key={x.id}>
                        <td>
                          <img
                            src={"/images/" + x.productImage}
                            style={{ width: "50px", height: "50px" }}
                          />
                        </td>
                        <td>{x.productName}</td>
                        <td>{x.qty}</td>
                        <td>{x.productPrice}</td>
                      </tr>
                    ))}
                    <tr>
                      <td />
                      <td />
                      <th>Total</th>
                      <th>{data.total}</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {/* {JSON.stringify(this.state.data)} */}
            <div className="border p-3">
              <h5>Customer Details</h5>
              <Row>
                <Col xs="12" sm="6" lg="3">
                  First Name :
                </Col>
                <Col xs="12" sm="6" lg="3">
                  {data && data.address.firstName}
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="6" lg="3">
                  Last Name :
                </Col>
                <Col xs="12" sm="6" lg="3">
                  {data && data.address.lastName}
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="6" lg="3">
                  Address :
                </Col>
                <Col xs="12" sm="6" lg="3">
                  {data && data.address.address}
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="6" lg="3">
                  City :
                </Col>
                <Col xs="12" sm="6" lg="3">
                  {data && data.address.city}
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="6" lg="3">
                  State :
                </Col>
                <Col xs="12" sm="6" lg="3">
                  {data && data.address.state}
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="6" lg="3">
                  Postcode :
                </Col>
                <Col xs="12" sm="6" lg="3">
                  {data && data.address.postcode}
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="6" lg="3">
                  Country :
                </Col>
                <Col xs="12" sm="6" lg="3">
                  {data && data.address.country}
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="6" lg="3">
                  Phone Number :
                </Col>
                <Col xs="12" sm="6" lg="3">
                  {data && data.address.phoneNumber}
                </Col>
              </Row>
            </div>

            <div className="border p-3">
              <h5>Order Details</h5>
              <Row>
                <Col xs="12" sm="6" lg="3">
                  Order Date :
                </Col>
                <Col xs="12" sm="6" lg="3">
                  {data && data.createdAt}
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="6" lg="3">
                  Payment Method :
                </Col>
                <Col xs="12" sm="6" lg="3">
                  {data && data.paymentMethod}
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="6" lg="3">
                  Status :
                </Col>
                <Col xs="12" sm="6" lg="3">
                  <div className="text-danger">
                    <h6>{status && status}</h6>
                  </div>
                </Col>
              </Row>
              {/* <Row>
                <Col xs="12" sm="6" lg="3">
                  Updated At :
                </Col>
                <Col xs="12" sm="6" lg="3">
                  {data && data.update_at}
                </Col>
              </Row> */}
            </div>






            <div className="border p-3">
              <h5>PayPal Details</h5>
              <Row>
                <Col xs="12" sm="6" lg="3">
                  Amount :
                </Col>
                <Col xs="12" sm="6" lg="3">
                  {data && data.paypal.amount}
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="6" lg="3">
                  Currency :
                </Col>
                <Col xs="12" sm="6" lg="3">
                  {data && data.paypal.currency}
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="6" lg="3">
                  Status :
                </Col>
                <Col xs="12" sm="6" lg="3">
                  <div className="text-danger">
                    <h6>{status && data.paypal.status}</h6>
                  </div>
                </Col>
              </Row>
          
            </div>











            <div className="border p-3">
              <h5>Action</h5>
              <Row>
                <Col xs="12" sm="6" lg="3">
                  {/* <button
                    className="btn btn-primary"
                    onClick={() => this.handlePENDING(data.id)}
                  >
                    PENDING
                  </button> */}
                  {data && (
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target={"#modalorderPENDING" + data.id}
                      >
                        PENDING
                      </button>

                      <ModalOrder
                        delete={this.handlePENDING}
                        id={data.id}
                        name={"PENDING"}
                      />
                    </div>
                  )}
                </Col>
                <Col xs="12" sm="6" lg="3">
                  {/* <button
                    className="btn btn-info"
                    onClick={() => this.handleProcessing(data.id)}
                  >
                    PROCESSING
                  </button> */}

                  {data && (
                    <div>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-toggle="modal"
                        data-target={"#modalorderPROCESSING" + data.id}
                      >
                        PROCESSING
                      </button>

                      <ModalOrder
                        delete={this.handleProcessing}
                        id={data.id}
                        name={"PROCESSING"}
                      />
                    </div>
                  )}
                </Col>
                <Col xs="12" sm="6" lg="3">
                  {/* <button
                    className="btn btn-secondary"
                    onClick={() => this.handleDelivering(data.id)}
                  >
                    DELIVERING
                  </button> */}
                  {data && (
                    <div>
                      <button
                        type="button"
                        className="btn btn-info"
                        data-toggle="modal"
                        data-target={"#modalorderDELIVERING" + data.id}
                      >
                        DELIVERING
                      </button>

                      <ModalOrder
                        delete={this.handleDelivering}
                        id={data.id}
                        name={"DELIVERING"}
                      />
                    </div>
                  )}
                </Col>

                <Col xs="12" sm="6" lg="3">
                  {/* <button
                    className="btn btn-success"
                    onClick={() => this.handleCompleted(data.id)}
                  >
                    COMPLETED
                  </button> */}
                  {data && (
                    <div>
                      <button
                        type="button"
                        className="btn btn-warning"
                        data-toggle="modal"
                        data-target={"#modalorderCOMPLETED" + data.id}
                      >
                        COMPLETED
                      </button>

                      <ModalOrder
                        delete={this.handleCompleted}
                        id={data.id}
                        name={"COMPLETED"}
                      />
                    </div>
                  )}
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
