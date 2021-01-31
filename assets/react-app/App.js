import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Sidebar from "./router/Sidebar";
import Orders from "./router/Orders";
import Customer from "./router/Customer";
import Dashboard from "./router/Dashboard";
import Product from "./router/Product";
import AddProduct from "./component/product/AddProduct";
import Editing from "./component/product/Editing";
import Cropping from "./Cropping";
import Order from "./component/order/Order";
import CategoryEdit from "./component/product/CategoryEdit";
import FormRedux from "./component/product/reduxForm/FormRedux";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCrop: false,
      src: null,
      upload: null,
      idEdit: null,
    };
  }

  handleShowCrop = (payload) => {
    console.log(payload);
    this.setState({ showCrop: true, src: payload.src, upload: payload.upload });
  };

  handleCloseCrop = () => {
    this.setState({ showCrop: false });
  };

  render() {
    console.log(this);
    return (
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Switch>
          <Route path="/admin" render={(props) => <Dashboard {...props} />} />
          <Route path="/orders" render={(props) => <Orders {...props} />} />
          <Route path="/customer" render={(props) => <Customer {...props} />} />
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
          <Route path="/formredux" render={(props) => <FormRedux {...props} />} />
        </Switch>
        <Cropping
          showCrop={this.state.showCrop}
          closeCrop={this.handleCloseCrop}
          src={this.state.src}
          upload={this.state.upload}
        />
      </div>
    );
  }
}
