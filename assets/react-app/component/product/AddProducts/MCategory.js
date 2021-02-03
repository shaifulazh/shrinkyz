import React, { Component } from "react";

export default class MCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [
        {
          categoryid: "",
          categoryname: "",
        },
      ],
    };
  }

  handleAddCategory = () => {
    console.log("adding category");
    this.setState({
      categories: this.state.categories.concat({
        categoryid: "",
        categoryname: "",
      }),
    });
  };

  handleRemoveCategory = (index) => {
    const removecat = this.state.categories.filter((a, i) => index !== i);
    this.setState(
      {
        categories: removecat,
      },
      this.props.removecategory(removecat)
    );
  };
  handleChangeCategory = (index, catid) => (event) => {
    const newcat = this.state.categories.map((category, i) => {
      if (index !== i) return category;
      return { ...category, categoryname: event.target.value };
    });

    this.setState(
      {
        categories: newcat,
      },
      this.props.changecategory(newcat)
    );
  };

  render() {
    console.log(this.state);
    return (
      <div className="">
        {this.state.categories.map((data, index) => (
          <div key={index} className="">
            <input
              type="text"
              required
              size="12"
              onChange={this.handleChangeCategory(index)}
              placeholder={`Category #${index}}`}
            />

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                this.handleRemoveCategory(index);
              }}
              className="btn btn-primary btn-sm p-2 m-2"
            >
              X
            </a>
          </div>
        ))}

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            this.handleAddCategory();
          }}
          className="btn btn-primary btn-sm btn-block mb-3"
        >
          Add Category
        </a>
      </div>
    );
  }
}
