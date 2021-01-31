import React, { Component } from "react";
import Axios from "axios";
import { NavLink, Link } from "react-router-dom";

export default class Categories extends Component {
  state = {
    data: null,
    show: true,
    categoryData: null
  };
  componentDidMount() {
    this.mounted = true;
    this.handleAxios();
  }
  componentWillUnmount() {
    this.mounted = false;
  }

  handleAxios() {
    Axios.get("api/admin/product/categories")
      .then(response => {
        if (this.mounted) {
          console.log(response.data);
          this.setState({
            data: response.data
          });
        }
      })
      .catch(error => console.log(error));
  }

  handleCategory = () => {
    this.setState({ data: null });
    Axios({
      method: "post",
      url: "api/admin/products/categories",
      data: {
        name: this.state.category,
        details: this.state.details
      }
    })
      .then(response => {
        console.log(response.data);
        this.setState({ categoryData: response.data, show: true }, () => {
          this.handleAxios();
          this.props.selected(this.state.categoryData.id);
        });

        // this.setState({ category: "", details: "", show: true });
      })
      .catch(error => console.log(error));
  };
  render() {
    console.log(this.state);
    const { data, show, categoryData } = this.state;
    return (
      <div>
        {data && show && (
          <select
            onChange={e => this.props.selected(e.target.value)}
            defaultValue={categoryData ? categoryData.id : null}
          >
            {data !== null && show && (
              <option value="false">Please Select A Category</option>
            )}

            {data !== null && show ? (
              data.map(data => (
                <option key={data.id} value={data.id}>
                  {data.name}
                </option>
              ))
            ) : (
              <option value="LOADING">LOADING..</option>
            )}
          </select>
        )}

        {show ? (
          <div>
            <br />
            <button
              className="btn btn-primary"
              onClick={() => this.setState({ show: false })}
            >
              Add New Category
            </button>
            <br />
            <br />
            <p>
              <Link className="btn btn-primary" to="/category">
                <i className="fas fa-edit" /> Category List
              </Link>
            </p>
          </div>
        ) : (
          <div>
            <div>
              <input
                onChange={e => this.setState({ category: e.target.value })}
                type="text"
                placeholder="Category Name"
              />
              <input
                onChange={e => this.setState({ details: e.target.value })}
                type="text"
                placeholder="Category Details"
              />
              <br />
              <button onClick={() => this.setState({ show: true })}>
                Cancel Add Category
              </button>
              <button onClick={this.handleCategory}>Save</button>
            </div>
          </div>
        )}
        {/* {!show && (
          <div>
            <br />
          </div>
        )} */}
      </div>
    );
  }
}
