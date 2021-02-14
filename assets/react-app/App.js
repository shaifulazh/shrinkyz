import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Sidebar from "./router/Sidebar";
import Orders from "./router/Orders";
import Customer from "./router/Customer";
import Dashboard from "./router/Dashboard";
import Product from "./router/Product";
import AddProduct from "./component/product/Old/AddProduct";
import Editing from "./component/product/Old/Editing";
import Cropping from "./Cropping";
import Order from "./component/order/Order";
import CategoryEdit from "./component/product/Old/CategoryEdit";
import FormRedux from "./component/product/reduxForm/FormRedux";
import ProductAdd from "./component/product/AddProducts/ProductAdd";
import MobileSideBar from "./router/MobileSideBar";
import MobileUpload from "./mobilecomp/MobileUpload";
import MobileDashboard from "./mobilecomp/MobileDashboard";
import EasyCrop from "./mobilecomp/EasyCrop";
import Cropperv2 from "./component/product/AddProducts/Cropperv2";
import CategoryList from "./component/product/AddProducts/CategoryList";
import Visitor from "./component/Visitor/Visitor";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCrop: false,
      src: null,
      upload: null,
      idEdit: null,
      mobileView: false,
      showSidebar: true,
      showtopbar: true,
      showEasyCropDialog: false,
    };
    this.updateViewState = this.updateViewState.bind(this);
    this.toggleSideBar = this.toggleSideBar.bind(this);
  }

  handleShowCrop = (payload) => {
    this.setState({
      showCrop: true,
      src: payload.src,
      upload: payload.upload,
      showtopbar: false,
    });
  };

  handleCloseCrop = () => {
    this.setState({ showCrop: false, showtopbar: true });
  };

  toggleSideBar() {
    this.setState({
      showSidebar: !this.state.showSidebar,
    });
  }

  handlecanceltopx = () => {
    this.setState({
      showCrop: false,
      src: null,
      upload: null,
    });
  };

  componentWillMount() {
    this.updateViewState();
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateViewState);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateViewState);
  }

  updateViewState() {
    if (!this.state.mobileView && document.documentElement.clientWidth < 1024) {
      this.setState({
        mobileView: true,
        showSidebar: false,
      });
    } else if (document.documentElement.clientWidth > 1024) {
      this.setState({
        mobileView: false,
        showSidebar: true,
      });
    }
  }

  render() {
    let containerClass = "d-flex";
    if (this.state.mobileView) containerClass = "container";
    return (
      <div>
        {this.state.showtopbar && (
          <div>{this.state.showSidebar ? null : <MobileSideBar />}</div>
        )}
        <div className={containerClass}>
          {this.state.showSidebar ? <Sidebar /> : null}

          <Switch>
            <Route path="/admin" render={(props) => <Dashboard {...props} />} />
            <Route path="/orders" render={(props) => <Orders {...props} />} />
            <Route
              path="/customer"
              render={(props) => <Customer {...props} />}
            />
            <Route path="/product" render={(props) => <Product {...props} />} />
            <Route
              path="/newproduct"
              render={(props) => (
                <AddProduct
                  {...props}
                  showCrop={this.handleShowCrop}
                  closeCrop={this.handleCloseCrop}
                />
              )}
            />
            <Route
              path="/category"
              render={(props) => <CategoryEdit {...props} />}
            />
            <Route path="/vieworder" render={(props) => <Order {...props} />} />
            <Route path="/edit" render={(props) => <Editing {...props} />} />
            <Route
              path="/categories"
              render={(props) => <CategoryList {...props} />}
            />
            <Route
              path="/createproduct"
              render={(props) => <ProductAdd {...props} />}
            />

            <Route path="/visitor" render={(props) => <Visitor {...props} />} />
          </Switch>
          <Cropping
            showCrop={this.state.showCrop}
            src={this.state.src}
            upload={this.state.upload}
            canceltopx={this.handlecanceltopx}
          />
        </div>
      </div>
    );
  }
}
