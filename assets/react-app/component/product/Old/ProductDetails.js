import React, { Component } from "react";


export default class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      shareholders: [{ detailname: "", datadesc: "" }],
      detailnamehasinput: false,
      datadeschasinput: false,
    };
  }

  handleShareholderNameChange = (idx) => (evt) => {
    const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, detailname: evt.target.value };
    });

    this.setState({ shareholders: newShareholders }, () => {
      this.props.detailname(newShareholders);
    });
  };

  handleShareholderDescChange = (idx) => (evt) => {
    const newShareholderdesc = this.state.shareholders.map(
      (shareholder, sidx) => {
        if (idx !== sidx) return shareholder;
        return { ...shareholder, datadesc: evt.target.value };
      }
    );

    this.setState({ shareholders: newShareholderdesc }, () => {
      this.props.detailname(newShareholderdesc);
    });
  };

  handleAddShareholder = () => {
    this.setState({
      shareholders: this.state.shareholders.concat([
        { detailname: "", datadesc: "" },
      ]),
    });
  };

  handleRemoveShareholder = (idx) => () => {
    const removed = this.state.shareholders.filter((s, sidx) => idx !== sidx);
    this.setState(
      {
        shareholders: removed,
      },
      () => {
        this.props.detailname(removed);
      }
    );

    this.props.detailname(removed);
  };

  render() {
    return (
      <div>
        <h4>Product Detail(s)</h4>

        {this.state.shareholders.map((shareholder, idx) => (
          <div className="shareholder" key={idx}>
            <input
              required
              size="12"
              type="text"
              placeholder={`Name Of Detail #${idx + 1}`}
              value={shareholder.detailname}
              onChange={this.handleShareholderNameChange(idx)}
            />
            {this.state.detailnamehasinput
              ? "Name of detail is required"
              : null}
            <br />

            <input
              required
              size="12"
              type="text"
              placeholder={`Detail Data #${idx + 1} `}
              value={shareholder.datadesc}
              onChange={this.handleShareholderDescChange(idx)}
            />

            {this.state.datadeschasinput ? "Detail data is required" : null}
            <button
              type="button"
              onClick={this.handleRemoveShareholder(idx)}
              className="small"
            >
              X
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={this.handleAddShareholder}
          className="small"
        >
          Add Product Detail
        </button>
      </div>
    );
  }
}
