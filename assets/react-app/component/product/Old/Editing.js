import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import EditCat from "./EditCat";
import Categories from "./Categories";
import Upload from "./Upload";
import ImageList from "./ImageList";
import CropDialog from "./CropDialog";
import { Table, Spinner, Pagination } from "react-bootstrap";
import EditProductDetails from "./EditProductDetails";
import ProductDetails from "./ProductDetails";

export default class Editing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      name: null,
      price: null,
      stock: null,
      desc: null,
      categoryId: null,
      image: null,
      message: null,
      details: null,
      gotnulldata : false,
    };
  }

  componentDidMount() {
    const { id } = this.props.location.state;
    Axios({
      method: "GET",
      url: `/api/admin/products/${id}`
    }).then(response => {
      console.log(response);
      const { data } = response;
      this.setState({
        data: data,
        name: data.productName,
        price: data.productPrice,
        stock: data.productStock,
        desc: data.productDesc,
        details : data.productDetailss,
        gotnulldata : true,


      });
      
    });
  }

  handleCategory = id => {
    this.setState({
      categoryId: id
    });
  };

  handleRemoveImage = () => {
    const { image, data } = this.state;
    Axios({
      method: "DELETE",
      url: `/api/admin/images/${data.id}/file/product`,
      data: {
        image: image
      }
    })
      .then(response => {
        this.setState({ image: null });
      })
      .catch(error => console.log(error));
  };

  handleSave() {
    const { data, name, price, stock, desc} = this.state;
    console.log(data);

    if(name == null)
    {
      name = data.productName;
    }
    if(price == null)
    {
      price = data.productPrice;
    }
    if(stock == null)
    {
      stock = data.productStock;
    }
    if(desc == null)
    {
      desc = data.productDesc;
    }
    
 


    if (name && price && stock && desc) {

      Axios({
        method: "PUT",
        url: `/api/admin/products/${data.id}`,
        data: {
          name: name,
          price: price,
          stock: stock,
          desc: desc,
  
          
        }
      })
        .then(res => {
          console.log(res);
          this.setState({ message: "Data Has Been Saved" });
        })
        .catch(e => {
          console.log(e);
          this.setState({ message: `Data Not Save . Error : ${e}` });
        });
    } else {
      this.setState({
        message: "Data not save. Please Fill All requirement fields"
      });
    }
  }

  handleSelect = value => {
    if (value === "false") {
      this.setState({ categoryId: null });
    } else {
      // console.log("show something here", value);
      this.setState({ categoryId: value });
    }
  };

  handleDetailsNull = e => {
    
    
    this.setState({ details : e , gotnulldata : false})
  }
  handleDetailChange = e => {
    
    this.setState({ details : e, gotnulldata : true })
  }

  handleAddImage = e => {
    // console.log(e);
    this.setState({ imageid: e.id, image: e.image, showAddImage: false });
  };
  render() {
    const { data, message, categoryId, image, details, gotnulldata } = this.state;

    return (
      <div className="container" style={{ flex: 1, padding: "20px" }}>
        <div>
          <div className="row">
            <div className="col-sm">
              <h4>
                <i className="fas fa-boxes" /> {"  "}
                <Link to="/product">Product List</Link>
                {"   "}> {"   "}
                Edit Product
              </h4>
            </div>
          </div>
          {data ? (
            <div />
          ) : (
            <div>
              <Spinner animation="border" />
            </div>
          )}
          {data && (
            <div>
              <div className="p-4 border rounded">
                <div className="row">
                  <div className="col">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={data.productName}
                      onChange={e => this.setState({ name: e.target.value })}
                    />
                    <label>Price</label>
                    <input
                      type="number"
                      className="form-control"
                      style={{ width: "10em" }}
                      min="0"
                      step=".01"
                      defaultValue={data.productPrice}
                      onChange={e => {
                        if (e.target.value < 0) {
                          return;
                        }
                        this.setState({ price: e.target.value });
                      }}
                    />
                    <label>Stock</label>
                    <input
                      style={{ width: "10em" }}
                      type="number"
                      className="form-control"
                      min="0"
                      defaultValue={data.productStock}
                      onChange={e => {
                        if (e.target.value < 0) {
                          return;
                        }
                        this.setState({ stock: e.target.value });
                      }}
                    />
                  </div>
                  <div className="col">
                    <label>Product Description</label>
                    <textarea
                      className="form-control"
                      style={{ width: "30em", height: "10em" }}
                      defaultValue={data.productDesc}
                      onChange={e => this.setState({ desc: e.target.value })}
                    />



                  </div>
                </div>
              </div>
              <br />
              <div className="p-4 border rounded">
                <div className="row">
                  <div className="col">
                    
                  </div>

                

                  <div className="col">
                    <button
                    className="btn btn-primary"
                      onClick={e => {
                        e.preventDefault();
                        this.handleSave();
                      }}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {this.state.showAddImage && (
          <div style={submitDialog}>
            <div
              className="col-8 mx-auto col-md-6 col-lg-4 p-2"
              style={divDialog}
            >
              <CropDialog addImage={this.handleAddImage} />

              <button onClick={() => this.setState({ showAddImage: false })}>
                Close
              </button>
            </div>
          </div>
        )}
        {message && (
          <div style={submitDialog}>
            <div
              className="col-8 mx-auto col-md-6 col-lg-4 p-2"
              style={divDialog}
            >
              <h3>{message}</h3>

              <button onClick={() => this.setState({ message: null })}>
                Close
              </button>
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
  background: "rgba(0, 0, 0, 0.3)"
};
const divDialog = {
  background: "rgb(255, 255, 255)"
};
