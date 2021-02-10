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
    this.props.changecategory(this.state.categories);
  };

  handleRemoveCategory = (index) => (e) => {
    e.preventDefault();
    if (this.state.categories.length < 2) return;
    const removecat = this.state.categories.filter((a, i) => index !== i);
    this.setState(
      {
        categories: removecat,
      },
      this.props.removecategory(removecat)
    );
  };

  handleRemoveSubCategory = (cati, subi) => (e) => {
    e.preventDefault();
    const removed = this.state.categories.map((mod, modindx) => {
      if (cati !== modindx) return mod;
      if (cati === 0 && subi === 0) {
        return { ...mod, subcategory: "" };
      }
      return {
        ...mod,
        subcategory: mod.subcategory.filter((sub, isub) => subi !== isub),
      };
    });

    this.setState({ categories: removed });
    this.props.removecategory(removed);
  };

  handleRemoveSubTwoCategory = (x, y, z) => (e) => {
    e.preventDefault();
    const removesubtwo = this.state.categories.map((addsubtwocat, itwo) => {
      if (x !== itwo) return addsubtwocat;
      return {
        ...addsubtwocat,
        subcategory: addsubtwocat.subcategory.map((adst, adsti) => {
          if (y !== adsti) return adst;
          return {
            ...adst,
            subtwocategory: adst.subtwocategory.filter((fil, ind) => z !== ind),
          };
        }),
      };
    });
    this.setState({ categories: removesubtwo });
    this.props.removecategory(removesubtwo);
  };

  handleInput = (i) => (e) => {
    console.log(e.target.value);
    const data = this.state.data.find(
      (datas, idx) => e.target.value === datas.name
    );
    console.log("kena cari", data);

    const newData = this.state.categories.map((post, idx) => {
      if (i !== idx) return post;
      if (data !== undefined) {
        //this return value if select
        return { ...post, categoryname: data.name, categoryid: data.id };
      } else {
        //this return new value without select
        return { ...post, categoryname: e.target.value, categoryid: "" };
      }
    });
    console.log("new data : ", newData);
    this.setState({
      categories: newData,
    });
    this.props.changecategory(newData);
  };

  handleAddSubCategory = (index) => (e) => {
    e.preventDefault();
    const addsub = this.state.categories.map((cat, cati) => {
      if (index !== cati) return cat;
      return {
        ...cat,
        subcategory: [{ subcategoryid: "", subcategoryname: "" }],
      };
    });
    console.log("add sub", addsub);
    this.setState({ categories: addsub });
    this.props.changecategory(addsub);
  };

  handleAddsubtwocategory = (i, s) => (e) => {
    e.preventDefault();
    console.log("init addsub2", this.state.categories);
    const addsubtwo = this.state.categories.map((addsubtwocat, itwo) => {
      if (i !== itwo) return addsubtwocat;
      return {
        ...addsubtwocat,
        subcategory: addsubtwocat.subcategory.map((adst, adsti) => {
          if (s !== adsti) return adst;
          return {
            ...adst,
            subtwocategory: [{ subtwocategoryid: "", subtwocategoryname: "" }],
          };
        }),
      };
    });
    console.log("add sub two", addsubtwo);
    this.setState({
      categories: addsubtwo,
    });
    this.props.changecategory(addsubtwo);
  };

  handleSubInput = (catidx, subidx) => (e) => {
    // const catsel = this.state.categories.find((cat,ind)=>{x===ind})
    console.log("target subcat", e.target.value);
    const data = this.state.data.map((datas, datidx) => {
      return datas.subcategory.find(
        (sub, si) => sub.subcategoryname === e.target.value
      );
    });

    console.log("data categori", data);
    const subdata = data.filter((x, y) => {
      x !== undefined;
    });

    console.log(subdata);

    const modified = this.state.categories.map((mod, modindx) => {
      if (catidx !== modindx) return mod;
      return {
        ...mod,
        subcategory: mod.subcategory.map((sub, isub) => {
          if (subidx !== isub) return sub;

          if (data) {
            return {
              ...sub,
              subcategoryname: subdata.subcategoryname,
              subcategoryid: subdata.id,
            };
          } else {
            return {
              ...sub,
              subcategoryname: e.target.value,
              subcategoryid: "",
            };
          }
        }),
      };
    });

    console.log("modified :", modified);
    this.setState({
      categories: modified,
    });
    this.props.changecategory(modified);
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
            subtwocategory: catsub.subtwocategory.map((subtwo, subtwoidx) => {
              if (incatsubtwoidx !== subtwoidx) return subtwo;
              return { ...subtwo, subtwocategoryname: event.target.value };
            }),
          };
        }),
      };
    });
    console.log("subtwonew cat :", subtwonew);
    this.setState({
      categories: subtwonew,
    });
    this.props.changecategory(subtwonew);
  };

  handleAddMoreSub = (butcat) => (e) => {
    e.preventDefault();
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
    this.props.changecategory(addmoresub);
  };

  handleAddMoreSubTwo = (addcat, butsub, subtwoindx) => (e) => {
    e.preventDefault();
    const addmoresubtwo = this.state.categories.map((addmoresub, amsi) => {
      if (addcat !== amsi) return addmoresub;
      return {
        ...addmoresub,
        subcategory: addmoresub.subcategory.map((subcatinit, scidx) => {
          if (butsub !== scidx) return subcatinit;
          return {
            ...subcatinit,
            subtwocategory: [
              ...subcatinit.subtwocategory,
              { subtwocategoryid: "", subtwocategoryname: "" },
            ],
          };
        }),
      };
    });
    console.log(addmoresubtwo);
    this.setState({
      categories: addmoresubtwo,
    });
    this.props.changecategory(addmoresubtwo);
  };

  render() {
    console.log(this.state);
    return (
      <div className="">
        {this.state.categories.map((data, index) => (
          <div key={index} className="">
            <h5>{`Categori #${index + 1} - ${data.categoryname}`}</h5>
            <input
              type="text"
              list="data"
              value={data.categoryname}
              required
              size="12"
              onChange={this.handleInput(index)}
              placeholder={`Category #${index + 1}`}
            />

            <a
              href="#"
              onClick={this.handleRemoveCategory(index)}
              className="btn btn-sm btn-primary  p-2 m-2"
            >
              X
            </a>

            {data.subcategory ? (
              data.subcategory.map((sub, subidx) => (
                <div key={subidx}>
                  <h5>
                    {`Sub Category ${sub.subcategoryname}#${
                      subidx + 1
                    } of Category ${data.categoryname} #${index + 1}`}
                  </h5>
                  <input
                    type="text"
                    size="12"
                    list={`${data.categoryname}${data.categoryid}`}
                    required
                    // value={sub.subcategoryname}
                    placeholder={`Sub Category#${subidx + 1}`}
                    onChange={this.handleSubInput(index, subidx)}
                  />

                  <datalist id={`${data.categoryname}${data.categoryid}`}>
                    {this.state.data.map((db, dbix) => {
                      if (db.id === data.categoryid) {
                        return db.subcategory.map((dbs, dbi) => (
                          <option key={dbi} value={dbs.subcategoryname} />
                        ));
                      }
                    })}
                  </datalist>

                  <a
                    href="#"
                    onClick={this.handleRemoveSubCategory(index, subidx)}
                    className="btn btn-sm btn-primary  p-2 m-2"
                  >
                    X
                  </a>

                  <a
                    href="#"
                    onClick={this.handleAddMoreSub(index)}
                    className="btn btn-sm btn-primary  p-2 m-2"
                  >
                    Add More Sub Category
                  </a>

                  {sub.subtwocategory ? (
                    sub.subtwocategory.map((sub2, indtwo) => (
                      <div key={indtwo}>
                        <h5>
                          {`Sub 2nd Category ${sub2.subtwocategoryname} #${
                            indtwo + 1
                          } Sub Category ${sub.subcategoryname}#${
                            subidx + 1
                          } of Category ${data.categoryname} #${index + 1}`}
                        </h5>
                        <input
                          type="text"
                          size="12"
                          required
                          list="datasubtwo"
                          value={sub2.subtwocategoryname}
                          placeholder={`Sub Two Category#${indtwo + 1}`}
                          onChange={this.handleSubTwoInput(
                            index,
                            subidx,
                            indtwo
                          )}
                        />
                        <a
                          href="#"
                          onClick={this.handleRemoveSubTwoCategory(
                            index,
                            subidx,
                            indtwo
                          )}
                          className="btn btn-sm btn-primary btn-sm p-2 m-2"
                        >
                          X
                        </a>

                        <a
                          href="#"
                          onClick={this.handleAddMoreSubTwo(
                            index,
                            subidx,
                            indtwo
                          )}
                          className="btn btn-sm btn-primary  p-2 m-2"
                        >
                          Add More Sub Two Category
                        </a>
                      </div>
                    ))
                  ) : (
                    <div>
                      {sub.subcategoryname && (
                        <a
                          href="#"
                          onClick={this.handleAddsubtwocategory(index, subidx)}
                          className="btn btn-sm btn-primary  p-2 m-2"
                        >
                          Add Sub Two Category
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div>
                {data.categoryname && (
                  <a
                    href="#"
                    onClick={this.handleAddSubCategory(index)}
                    className="btn btn-sm btn-primary  p-2 m-2"
                  >
                    Add Sub Category
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
        <datalist id="data">
          {this.state.data &&
            this.state.data.map((item, key) => (
              <option key={key} value={item.name} />
            ))}
        </datalist>

        <datalist id="datasubtwo">
          {this.state.data &&
            this.state.data.map((item, key) =>
              item.subcategory.map((sub, subkey) =>
                sub.Subtwocategory.map((subtwo, subtwokey) => (
                  <option key={subtwokey} value={subtwo.subtwocategoryname} />
                ))
              )
            )}
        </datalist>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            this.handleAddCategory();
          }}
          className="btn btn-sm btn-primary btn-block mb-3"
        >
          Add Category
        </a>
      </div>
    );
  }
}
