import React, { Component } from "react";
import { Card, CardBody, Col, Row, Spinner } from "reactstrap";
import MCategory from "./MCategory";
import Picture from "./Picture";

export default class ProductAdd extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      images : []
       
    }
  }
  


  handleSubmit = (event) => {
    event.preventDefault();
    console.log("helo pulis")
  }
  handleUploaded = (images) =>{
    this.setState({images : images})
  }
  handleRemovePicture = (images) =>{
    this.setState({images : images})
  }
  handleChangeCategory = (value) =>{
    this.setState({categories : value})
  }

  handleRemoveCategory = () =>{
    console.log("sfdsaf")
  }

  render() {
    console.log(this.state.images);
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
          <Col>
              <Picture showCrop={this.props.showCrop} showPicture={this.handleUploaded} closeCrop={this.props.closeCrop} removepicture={this.handleRemovePicture}/>
          </Col>
          <Col>
            <MCategory removecategory={this.handleRemoveCategory}  changecategory={this.handleChangeCategory} />
          </Col>
        </Row>
        <button>Button</button>
        </form>
      </div>
    );
  }
}
