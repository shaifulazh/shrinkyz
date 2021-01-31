import React, { Component } from "react";
import Axios from "axios";

export default class ImageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }
  componentWillUnmount() {
    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;
    this.handleAxios();
  }
  handleAxios() {
    Axios({
      method: "GET",
      url: "/api/admin/images/"
    }).then(res => {
      this.setState({
        data: res.data
      });
    });
  }

  imageClicked = image => {
    Axios({
      method: "DELETE",
      url: `/api/admin/products/${image}/image`
    })
      .then(response => {
        console.log(response);
        this.setState({ data: null }, () => {
          this.handleAxios();
        });
      })
      .catch(error => console.log(error));
  };
  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div>
        <h4>Image List</h4>
        <div className="row">
          {data &&
            data.map((x, y) => (
              <div className="col p-2" key={y}>
                <button
                  onClick={e => {
                    e.preventDefault;
                    this.imageClicked(x.id);
                  }}
                >
                  X
                </button>
                <img
                  src={"/images/" + x.filename}
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
            ))}
        </div>
      </div>
    );
  }
}
