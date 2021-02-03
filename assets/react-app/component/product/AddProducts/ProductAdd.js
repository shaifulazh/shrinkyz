import React, { Component } from "react";
import { Card, CardBody, Col, Row, Spinner } from "reactstrap";
import MCategory from "./MCategory";
import PDetails from "./PDetails";
import Picture from "./Picture";

export default class ProductAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      details: [],
      categories: [],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
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
  handleNewDetails = (details) => {
    console.log(details);
    this.setState({
      details: details,
    });
  };

  handleRemoveDetail = (remove) => {
    console.log(e);
    this.setState({
      details: remove,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="container">
        {/* Top Row */}
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Col xs="12" md="6" xl="6">
              <label>Product Name</label>
              <input
                required
                type="text"
                onChange={(e) => this.setState({ price: e.target.value })}
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
            </Col>
          </Row>
          <button>Button</button>
        </form>
      </div>
    );
  }
}
