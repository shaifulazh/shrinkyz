import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Categories from "./Categories";
import { Row } from "reactstrap";
import ProductDetails from "./ProductDetails";

export default class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageid: null,
      name: null,
      price: null,
      stock: null,
      saveButton: "disabled",
      categoryId: null,
      imageid: null,
      desc: null,
      details : []
    };
  }

  handleAddProduct = () => {

    console.log(this.state.details)
    const { imageid, name, price, stock, categoryId, desc , details} = this.state;
    if (imageid && name && price && stock && categoryId && desc) {
      Axios({
        method: "POST",
        url: `/api/admin/products/${categoryId}`,
        data: {
          name: name,
          price: price,
          stock: stock,
          imageid: imageid,
          desc: desc,
          details : details
        },
      },()=>{console.log('sending data to server....')})
        .then((e) => {
          if (this.mounted) {
            console.log(e);
            this.props.history.push("/product");
          }
        })
        .catch((e) => console.log(e));
    }
  };

  handleRemoveImage = () => {
    Axios({
      method: "DELETE",
      url: `/api/admin/products/${this.state.imageid}/image`,
    })
      .then((response) => {
        console.log(response);
        this.setState({ imageid: null, image: null });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    const { imageId } = this.state;
    this.mounted = false;
    if (imageId) {
      this.handleRemoveImage();
    }
  }

  handleAddImage = (e) => {
    console.log("image upload", e);
    this.setState({ imageid: e.id, image: e.image });
  };

  handleSelect = (value) => {
    if (value === "false") {
      this.setState({ categoryId: null });
    } else {
      console.log("show something here", value);
      this.setState({ categoryId: value });
    }
  };

  onSelectFile = (e) => {
    if (e.target.files[0].size > 8388608) {
      alert("Image File too big.. Please Put less than 8mb");
      e.target.value = "";
      return;
    }
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        const payload = {
          src: reader.result,
          upload: this.handleUpload,
        };
        this.props.showCrop(payload);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  handleUpload = (imageBlob, loader) => {
    const formData = new FormData();
    formData.append("image", imageBlob);

    Axios({
      method: "post",
      url: "/api/admin/products/images",
      data: formData,
    })
      .then((response) => {
        console.log(response);
        this.handleAddImage(response.data);
        this.props.closeCrop();
        loader();
      })
      .catch((response) => {
        console.log(response);
        this.props.closeCrop();
        loader();
      });
  };

  handleDetailName = e => {
    // console.log("from ProductDetails.js DetailName: ", e)
    this.setState({ details : e })
    
  }

  // handleDetailDesc = e =>{
  //   console.log("from ProductDetails.js DetailDesc: ", e)
  //   this.setState({ details : e })
  // }

  render() {
    const {
      imageid,
      image,
      saveButton,
      categoryId,
      name,
      price,
      stock,
      desc,
      
    } = this.state;

    return (
      <div className="container" style={{ flex: 1, padding: "20px" }}>
        <div>
          <div className="row">
            <div className="col-sm">
              <h4>
                <i className="fas fa-boxes" /> {"  "}
                <Link to="/product">Product List</Link> {"> New Product"}
              </h4>
            </div>
          </div>
          <div className="p-4 border rounded">
            <div className="row">
              <div className="col">
                <label>Name</label>
                <input
                  type="text"
                  onChange={(e) => this.setState({ name: e.target.value })}
                  className="form-control"
                />
                <label>Price</label>
                <input
                  type="number"
                  onChange={(e) => this.setState({ price: e.target.value })}
                  className="form-control"
                  style={{ width: "10em" }}
                  min="0"
                />
                <label>Stock</label>
                <input
                  style={{ width: "10em" }}
                  type="number"
                  onChange={(e) => this.setState({ stock: e.target.value })}
                  className="form-control"
                  min="0"
                />
              </div>
              <div className="col">
                <label>Product Description</label>
                <textarea
                  className="form-control mb-3"
                  onChange={(e) => this.setState({ desc: e.target.value })}
                  style={{ width: "30em", height: "5em" }}
                />

                  <ProductDetails detailname={this.handleDetailName} />
              </div>
            </div>
          </div>
          <br />
          <div className="p-4 border rounded">
            <div className="row">
              <div className="col">
                {imageid === null ? (
                  <div>
                    <label>Product Image</label>
                    <input
                      type="file"
                      accept="image/png, image/jpeg"
                      onChange={this.onSelectFile}
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="p-2"
                      src={`/images/${image}`}
                      alt=""
                      style={{ width: "130px", height: "130px" }}
                    />
                    <div>
                      <button
                        className="btn btn-warning"
                        onClick={this.handleRemoveImage}
                      >
                        <i className="fas fa-trash-alt" /> Remove Image
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="col">
                <Categories selected={this.handleSelect} />
              </div>
              <div className="col">
                {imageid &&
                name &&
                price &&
                price >= 0 &&
                stock &&
                stock >= 0 &&
                categoryId &&
                desc ? (
                  <div>
                    <div className="p-2">
                      <button
                        className="btn btn-primary "
                        onClick={() => this.handleAddProduct()}
                      >
                        <i className="fas fa-save fa-2x " />
                      </button>
                    </div>
                    <p>Save Product</p>
                  </div>
                ) : (
                  <div>
                    <div className="p-2">
                      <button
                        className="btn btn-primary "
                        onClick={() => this.handleAddProduct()}
                        disabled={saveButton}
                      >
                        <i className="fas fa-save fa-2x" />
                      </button>
                    </div>
                    <div className="alert alert-primary">
                      Please Fill All Fields
                    </div>
                  </div>
                )}
                {stock < 0 && (
                  <div className="alert alert-primary">
                    Please Enter Stock Amount more than 0
                  </div>
                )}
                {price < 0 && (
                  <div className="alert alert-primary">
                    Please put price more than 0
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
