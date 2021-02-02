import React, { Component } from "react";

export default class EditProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: null,
    };
  }

  componentDidMount() {
    this.setState({ details: this.props.fordetails });
  }

  handleDetailChange = (index) => (event) => {
    const newData = this.state.details.map((data, dataindex) => {
      if (index !== dataindex) return data;
      return { ...data, detailname: event.target.value };
    });
    this.setState({ details: newData }, () => {
      this.props.datachange(newData);
    });
  };
  handleDetailValueChange = (index) => (event) => {
    const newData = this.state.details.map((data, dataindex) => {
      if (index !== dataindex) return data;
      return { ...data, datadesc: event.target.value };
    });
    this.setState({ details: newData }, () => {
      this.props.datachange(newData);
    });
  };

  handleRemoveItem = (index) => (event) => {
    console.log(index);
  };

  handleAddDetails = () => {
    this.setState({
      details: this.state.details.concat([
        { detailname: "", datadesc: "", id: "" },
      ]),
    });
  };
  render() {
    console.log(this.state);
    const { details } = this.state;
    return (
      <div>
        <h4>Product Detail(s)</h4>
        {details
          ? details.map((data, index) => (
              <div className="shareholder" key={index}>
                <input
                  type="text"
                  defaultValue={data.detailname}
                  onChange={this.handleDetailChange(index)}
                />
                <input
                  type="text"
                  defaultValue={data.datadesc}
                  onChange={this.handleDetailValueChange(index)}
                />
                <button
                  type="button"
                  onClick={this.handleRemoveItem(data.id ? data.id : null)}
                  className="small"
                >
                  -
                </button>
              </div>
            ))
          : null}

        <button type="button" onClick={this.handleAddDetails} className="small">
          Add Product Detail
        </button>
      </div>
    );
  }
}
