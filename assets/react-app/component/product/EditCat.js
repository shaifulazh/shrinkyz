import React, { Component } from "react";
import Axios from "axios";

export default class EditCat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      categoryId: null
    };
  }

  componentDidMount() {
    this.mounted = true;
    Axios.get("api/admin/product/categories")
      .then(response => {
        if (this.mounted) {
          console.log(response.data);
          this.setState({
            data: response.data,
            categoryId: this.props.categoryId
          });
        }
      })
      .catch(error => console.log(error));
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { data, categoryId } = this.state;
    console.log("props of EditCat", this.props);
    return (
      <div>
        <div>
          {data && (
            <select
              onChange={event => this.props.handleCategory(event.target.value)}
              defaultValue={categoryId}
            >
              {data.map((x, y) => (
                <option key={y} value={x.id}>
                  {x.name}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
    );
  }
}
