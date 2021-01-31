import { Provider } from "react-redux";
import store from "./store";
import FieldArraysForm from "./FieldArraysForm";

import React, { Component } from "react";

export default class FormRedux extends Component {
  handleSubmit = (e) => {
    console.log(e);
    alert(e);
  };
  render() {
    return (
      <div>
        <div>
          <Provider store={store}>
            <div style={{ padding: 15 }}>
              <h2>Simple Form</h2>

            

              <FieldArraysForm onSubmit={this.handleSubmit} />
            </div>
          </Provider>
        </div>
      </div>
    );
  }
}
