import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Orders from "./router/Orders";
import Customer from "./router/Customer";
import Dashboard from "./router/Dashboard";
import Product from "./router/Product";
import AddProduct from "./component/product/Old/AddProduct";
import Editing from "./component/product/Old/Editing";
import Cropping from "./Cropping";
import Order from "./component/order/Order";
import CategoryEdit from "./component/product/Old/CategoryEdit";
import ProductAdd from "./component/product/AddProducts/ProductAdd";
import MobileSideBar from "./router/MobileSideBar";

export default class Mobile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCrop: false,
      src: null,
      upload: null,
      idEdit: null,
      mobileView: false,
      showSidebar: true,
    };
    this.updateViewState = this.updateViewState.bind(this);
    this.toggleSideBar = this.toggleSideBar.bind(this);
  }

  handleShowCrop = (payload) => {
    console.log(payload);
    this.setState({ showCrop: true, src: payload.src, upload: payload.upload });
  };

  handleCloseCrop = () => {
    this.setState({ showCrop: false });
  };

  toggleSideBar() {
    this.setState({
      showSidebar: !this.state.showSidebar,
    });
  }

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
    return <div>
      <MobileSideBar/>
     <div className="container-fluid">
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
              path="/formredux"
              render={(props) => <ProductAdd {...props} />}
            />
          </Switch>
          <Cropping
            showCrop={this.state.showCrop}
            closeCrop={this.handleCloseCrop}
            src={this.state.src}
            upload={this.state.upload}
          />
        </div>
       
    </div>;
  }
}

