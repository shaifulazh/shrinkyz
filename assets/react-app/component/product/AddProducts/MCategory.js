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
    if (this.state.categories.length < 2) return;
    const removecat = this.state.categories.filter((a, i) => index !== i);
    this.setState(
      {
        categories: removecat,
      },
      this.props.removecategory(removecat)
    );
  };

  handleRemoveSubCategory = (cati, subi) => {
    const removed = this.state.categories.map((mod, modindx) => {
      if (cati !== modindx) return mod;
      return {
        ...mod,
        subcategory: mod.subcategory.filter((sub, isub) => subi !== isub),
      };
    });
    this.setState({ categories: removed });
  };

  handleRemoveSubTwoCategory = (x, y, z) => {
    const removesubtwo = this.state.categories.map((addsubtwocat, itwo) => {
      if (x !== itwo) return addsubtwocat;
      return {
        ...addsubtwocat,
        subcategory: addsubtwocat.subcategory.map((adst, adsti) => {
          if (y !== adsti) return adst;
          return {
            ...adst,
            subcategorytwo: adst.subcategorytwo.filter((fil, ind) => z !== ind),
          };
        }),
      };
    });
    this.setState({ categories: removesubtwo });
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

  handleAddSubCategoryTwo = (i, s) => {
    console.log("init addsub2", this.state.categories);
    const addsubtwo = this.state.categories.map((addsubtwocat, itwo) => {
      if (i !== itwo) return addsubtwocat;
      return {
        ...addsubtwocat,
        subcategory: addsubtwocat.subcategory.map((adst, adsti) => {
          if (s !== adsti) return adst;
          return {
            ...adst,
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

  handleAddMoreSub = (butcat) => {
    const addmoresub = this.state.categories.map((addmore, aidx) => {
      if (butcat !== aidx) return addmore;
      return {
        ...addmore,
        subcategory: [
          ...addmore.subcategory,
          { subcategoryid: "", subcategoryname: "" },
        ],
      };
    });
    console.log("addmoresub", addmoresub);
    this.setState({ categories: addmoresub });
  };

  handleAddMoreSubTwo = (addcat, butsub, subtwoindx) => {
    const addmoresubtwo = this.state.categories.map((addmoresub, amsi) => {
      if (addcat !== amsi) return addmoresub;
      return {
        ...addmoresub,
        subcategory: addmoresub.subcategory.map((subcatinit, scidx) => {
          if (butsub !== scidx) return subcatinit;
          return {
            ...subcatinit,
            subcategorytwo: [
              ...subcatinit.subcategorytwo,
              { subcategorytwoid: "", subcategorytwoname: "" },
            ],
          };
        }),
      };
    });
    console.log(addmoresubtwo);
    this.setState({
      categories: addmoresubtwo,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="">
        {this.state.categories.map((data, index) => (
          <div key={index} className="">
            <h5>Category#{index + 1}</h5>
            <input
              type="text"
              list="data"
              value={data.categoryname}
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
                  <h5>
                    Sub Category#{subidx + 1} of Category#{index + 1}
                  </h5>
                  <input
                    type="text"
                    size="12"
                    required
                    value={sub.subcategoryname}
                    placeholder={`Sub Category#${subidx + 1}`}
                    onInput={this.handleSubInput(index, subidx)}
                  />
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      this.handleRemoveSubCategory(index, subidx);
                    }}
                    className="btn btn-primary btn-sm p-2 m-2"
                  >
                    X
                  </a>

                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      this.handleAddMoreSub(index);
                    }}
                    className="btn btn-primary btn-sm p-2 m-2"
                  >
                    Add More Sub Category
                  </a>

                  {sub.subcategorytwo ? (
                    sub.subcategorytwo.map((sub2, indtwo) => (
                      <div key={indtwo}>
                        <h5>
                          Sub 2nd Category#{indtwo + 1} under Sub Category#
                          {subidx + 1} of Category#{index + 1}
                        </h5>
                        <input
                          type="text"
                          size="12"
                          required
                          value={sub2.subcategorytwoname}
                          placeholder={`Sub Two Category#${indtwo + 1}`}
                          onInput={this.handleSubTwoInput(
                            index,
                            subidx,
                            indtwo
                          )}
                        />
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            this.handleRemoveSubTwoCategory(
                              index,
                              subidx,
                              indtwo
                            );
                          }}
                          className="btn btn-primary btn-sm p-2 m-2"
                        >
                          X
                        </a>

                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            this.handleAddMoreSubTwo(index, subidx, indtwo);
                          }}
                          className="btn btn-primary btn-sm p-2 m-2"
                        >
                          Add More Sub Two Category
                        </a>
                      </div>
                    ))
                  ) : (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        this.handleAddSubCategoryTwo(index, subidx);
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
