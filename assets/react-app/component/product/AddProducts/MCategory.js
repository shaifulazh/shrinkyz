import Axios from "axios";
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
      data: null,
    };
  }

  componentDidMount() {
    this.mounted = true;
    this.handleAxios();
  }
  componentWillUnmount() {
    this.mounted = false;
  }

  handleAxios() {
    Axios.get("api/admin/product/categories")
      .then((response) => {
        if (this.mounted) {
          console.log(response.data);
          this.setState({
            data: response.data,
          });
        }
      })
      .catch((error) => console.log(error));
  }

  handleAddCategory = () => {
    this.setState({
      categories: [
        ...this.state.categories,
        {
          categoryid: "",
          categoryname: "",
        },
      ],
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

  handleInput = (i) => (e) => {
    console.log(e.target.value);
    const data = this.state.data.find(
      (datas, i) => e.target.value === datas.name
    );
    console.log("kena cari", data);

    const newData = this.state.categories.map((post, idx) => {
      if (i !== idx) return post;
      if (data !== undefined) {
        //this return value if select
        return { ...post, categoryname: data.name, categoryid: data.id };
      } else {
        //this return new value without select
        return { ...post, categoryname: e.target.value, categoryid: null };
      }
    });
    console.log("new data : ", newData);
    this.setState({
      categories: newData,
    });
    this.props.changecategory(newData);
  };

  handleAddSubCategory = (index) => {
    const addsub = this.state.categories.map((cat, cati) => {
      if (index !== cati) return cat;
      return {
        ...cat,
        subcategory: [{ subcategoryid: "", subcategoryname: "" }],
      };
    });
    console.log("add sub", addsub);
    this.setState({ categories: addsub });
  };

  handleAddSubCategoryTwo = (i) => {
    console.log("init addsub2", this.state.categories);
    const addsubtwo = this.state.categories.map((addsubtwocat, itwo) => {
      if (i !== itwo) return addsubtwocat;
      return {
        ...addsubtwocat,
        subcategory: addsubtwocat.subcategory.map((datasub, idxsa) => {
          return {
            ...datasub,
            subcategorytwo: [{ subcategorytwoid: "", subcategorytwoname: "" }],
          };
        }),
      };
    });
    console.log("add sub two", addsubtwo);
    this.setState({
      categories: addsubtwo,
    });
  };

  handleSubInput = (catidx, subidx) => (e) => {
    // const catsel = this.state.categories.find((cat,ind)=>{x===ind})
    const modified = this.state.categories.map((mod, modindx) => {
      if (catidx !== modindx) return mod;
      return {
        ...mod,
        subcategory: mod.subcategory.map((sub, isub) => {
          if (subidx !== isub) return sub;
          return { ...sub, subcategoryname: e.target.value, subcategoryid: "" };
        }),
      };
    });

    console.log("modified :", modified);
    this.setState({
      categories: modified,
    });
  };

  handleSubTwoInput = (incatindx, incatsubidx, incatsubtwoidx) => (event) => {
    const subtwonew = this.state.categories.map((catsubtwo, catsubtwoidx) => {
      if (incatindx !== catsubtwoidx) return catsubtwo;
      return {
        ...catsubtwo,
        subcategory: catsubtwo.subcategory.map((catsub, catsubidx) => {
          if (incatsubidx !== catsubidx) return catsub;
          return {
            ...catsub,
            subcategorytwo: catsub.subcategorytwo.map((subtwo, subtwoidx) => {
              if (incatsubtwoidx !== subtwoidx) return subtwo;
              return { ...subtwo, subcategorytwoname: event.target.value };
            }),
          };
        }),
      };
    });
    console.log("subtwonew cat :", subtwonew);
    this.setState({
      categories: subtwonew,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="">
        {this.state.categories.map((data, index) => (
          <div key={index} className="">
            <input
              type="text"
              list="data"
              required
              size="12"
              onInput={this.handleInput(index)}
              placeholder={`Category #${index + 1}`}
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

            {data.subcategory ? (
              data.subcategory.map((sub, subidx) => (
                <div key={subidx}>
                  <input
                    type="text"
                    size="12"
                    placeholder={`Sub Category#${subidx + 1}`}
                    onInput={this.handleSubInput(index, subidx)}
                  />

                  {sub.subcategorytwo ? (
                    sub.subcategorytwo.map((sub2, indtwo) => (
                      <div key={indtwo}>
                        <input
                          type="text"
                          size="12"
                          placeholder={`Sub Two Category#${indtwo + 1}`}
                          onInput={this.handleSubTwoInput(
                            index,
                            subidx,
                            indtwo
                          )}
                        />
                      </div>
                    ))
                  ) : (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        this.handleAddSubCategoryTwo(index);
                      }}
                      className="btn btn-primary btn-sm p-2 m-2"
                    >
                      Add Sub Category Two
                    </a>
                  )}
                </div>
              ))
            ) : (
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  this.handleAddSubCategory(index);
                }}
                className="btn btn-primary btn-sm p-2 m-2"
              >
                Add Sub Category
              </a>
            )}
          </div>
        ))}
        <datalist id="data">
          {this.state.data &&
            this.state.data.map((item, key) => (
              <option key={key} value={item.name} />
            ))}
        </datalist>

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
