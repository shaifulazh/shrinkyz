import React, { Component } from "react";
import { Card, CardBody, Col, Row, Spinner } from "reactstrap";
import MCategory from "./MCategory";
import PDetails from "./PDetails";
import Picture from "./Picture";
import Axios from "axios";

export default class ProductAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      details: [],
      categories: [],
      name: null,
      price: null,
      stock: null,
      desc: null,
      details: null,
      showbutton: false,
      showCropperDialog: false,
    };
    this.handSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    const {
      name,
      price,
      stock,
      desc,
      images,
      categories,
      details,
    } = this.state;
    this.setState({ message: "Saving data.. Please Take Deep Breath .." });
    Axios(
      {
        method: "POST",
        url: `/api/admin/products`,
        data: {
          name: name,
          price: price,
          stock: stock,
          desc: desc,
          details: details,
          images: images,
          categories: categories,
        },
      },
      () => {
        console.log("sending data to server....");
      }
    )
      .then((e) => {
        console.log(e);
        alert("Product Saved!!");
        this.props.history.push("/product");
      })
      .catch((e) => {
        this.setState({
          message: "Something Wrong..erorr please contact pulis",
          showbutton: true,
        });
        console.log(e);
      });
  };
  handleUploaded = (images) => {
    this.setState({ images: images });
  };
  handleRemovePicture = (images) => {
    this.setState({ images: images });
  };
  handleChangeCategory = (value) => {
    this.setState({ categories: value });
  };

  handleRemoveCategory = (cat) => {
    console.log(cat);
    this.setState({
      categories: cat,
    });
  };
  handleNewDetails = (e) => {
    console.log(e);
    this.setState({
      details: e,
    });
  };

  handleRemoveDetail = (remove) => {
    console.log(remove);
    this.setState({
      details: remove,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="m-3">
        {/* Top Row */}
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Col xs="12" md="6" xl="6">
              <label>Product Name</label>
              <input
                required
                type="text"
                onChange={(e) => this.setState({ name: e.target.value })}
                className="form-control"
              />
              <label>Price</label>
              <input
                required
                type="number"
                onChange={(e) => this.setState({ price: e.target.value })}
                className="form-control"
                style={{ width: "10em" }}
                min="0"
              />
              <label>Stock</label>
              <input
                required
                style={{ width: "10em" }}
                type="number"
                onChange={(e) => this.setState({ stock: e.target.value })}
                className="form-control"
                min="0"
              />
            </Col>
            <Col xs="12" md="6" xl="6">
              <label>Product Description</label>
              <textarea
                required
                className="form-control mb-3"
                onChange={(e) => this.setState({ desc: e.target.value })}
              />
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="6" xl="6">
              <Picture
                showCrop={this.props.showCrop}
                showPicture={this.handleUploaded}
                closeCrop={this.props.closeCrop}
                removepicture={this.handleRemovePicture}
                showEasyCrop={this.props.showEasyCrop}
              />
            </Col>
            <Col xs="12" md="6" xl="6">
              <MCategory
                removecategory={this.handleRemoveCategory}
                changecategory={this.handleChangeCategory}
              />
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="6" xl="6">
              <PDetails
                removedetail={this.handleRemoveDetail}
                newdetails={this.handleNewDetails}
              />
              <button
                className="btn btn-primary btn-sm btn-block"
                onClick={this.handleSaveButton}
              >
                Save
              </button>
            </Col>
          </Row>
        </form>

        {this.state.message && (
          <div style={submitDialog}>
            <div
              className="col-8 mx-auto col-md-6 col-lg-4 p-2"
              style={divDialog}
            >
              <h3>{this.state.message}</h3>

              {this.state.showbutton && (
                <button onClick={() => this.setState({ message: null })}>
                  Close
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const submitDialog = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0, 0, 0, 0.3)",
};
const divDialog = {
  background: "rgb(255, 255, 255)",
};
