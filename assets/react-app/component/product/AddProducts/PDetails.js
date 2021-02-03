import React, { Component } from "react";

export default class PDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: [
        {
          detailname: "",
          datadesc: "",
        },
      ],
    };
  }
  handleAdd = () => {
    this.setState({
      details: this.state.details.concat([{ detailname: "", datadesc: "" }]),
    });
  };

  handleRemove = (value) => {
    const remove = this.state.details.filter((data, index) => value !== index);
    this.setState(
      {
        details: remove,
      },
      () => this.props.removedetail(remove)
    );
  };

  handleChangeDetailName = (id) => (event) => {
    const newdetails = this.state.details.map((detail, index) => {
      if (id !== index) return detail;
      return { ...details, detailname: event.target.value };
    });
    this.setState(
      {
        details: newdetails,
      },
      () => this.props.newdetails(newdetails)
    );
  };

  handleChangeDataDesc = (id) => (event) => {
    const newdetaildatadesc = this.state.details.map((detail, index) => {
      if (id !== index) return detail;
      return { ...details, datadesc: event.target.value };
    });
    this.setState(
      {
        details: newdetaildatadesc,
      },
      () => this.props.newdetails(newdetaildatadesc)
    );
  };
  render() {
    console.log(this.state.details);
    return (
      <div>
        {this.state.details.map((data, index) => (
          <div className="ml-4" key={index}>
            <div className="row">
              <input
                size="15"
                className="mr-2 mb-2"
                type="text"
                placeholder={`Detail Name #${index}`}
                onChange={this.handleChangeDetailName}
              />
              <input
                size="15"
                className="mr-2 mb-2"
                type="text"
                placeholder={`Details #${index}`}
                onChange={this.handleChangeDataDesc}
              />
              <div>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    this.handleRemove(index);
                  }}
                  className="btn btn-primary btn-sm p-2 mt-2 mb-2 "
                >
                  X
                </a>
              </div>
            </div>
          </div>
        ))}

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            this.handleAdd();
          }}
          className="btn btn-primary btn-sm btn-block mb-3 mt-3"
        >
          Add More Detail
        </a>
      </div>
    );
  }
}
