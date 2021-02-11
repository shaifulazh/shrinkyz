import { UndoRounded } from "@material-ui/icons";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function CategoryList(props) {
  const [data, setData] = useState(null);
  const [subcategory, setsubcategory] = useState(null);
  const [subtwo, setsubtwo] = useState(null);
  const [delcat, setdelcat] = useState(null);
  const [delsub, setdelsub] = useState(null);
  const [delsubtwo, setdelsubtwo] = useState(null);

  useEffect(() => {
    axios({
      method: "GET",
      url: "/api/admin/product/allcategories",
    }).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  function onSelectCategory(params) {
    resetDeleteItem();
    let target = params.target.value;
    setsubtwo(null);
    axios({
      method: "GET",
      url: `/api/admin/products/${target}/subcategories`,
    })
      .then((response) => {
        console.log(response.data);
        if (response.data.length < 1) {
          setdelcat(parseInt(target));
        } else {
          setdelcat(null);
        }
        setsubcategory(response.data);
      })
      .catch((e) => console.log(e));
  }

  const resetDeleteItem = () => {
    setdelcat(null);
    setdelsub(null);
    setdelsubtwo(null);
  };

  const subCategorySelect = (e) => {
    resetDeleteItem();
    let target = e.target.value;
    axios({
      method: "GET",
      url: `/api/admin/products/${target}/subtwocategories`,
    })
      .then((response) => {
        console.log(response.data);
        if (response.data.length < 1) {
          setdelsub(parseInt(target));
        } else {
          setdelsub(null);
        }
        setsubtwo(response.data);
      })
      .catch((e) => console.log(e));
  };

  const subtwoCategorySelect = (e) => {
    resetDeleteItem();
    setdelsubtwo(parseInt(e.target.value));
    console.log(delsubtwo);
  };

  const deleteCategory = () => {
    axios({
      method: "DELETE",
      url: `/api/admin/categories/${delcat}`,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    const newcat = data.filter((s, i) => delcat !== s.id);
    console.log(newcat);
    setData(newcat);
  };

  const deleteSubCategory = () => {
    axios({
      method: "DELETE",
      url: `/api/admin/subcategories/${delsub}`,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    const newsub = subcategory.filter((s, i) => delsub !== s.id);
    console.log(newsub);
    setsubcategory(newsub);
  };

  const deleteSubtwoCategory = () => {
    axios({
      method: "DELETE",
      url: `/api/admin/subtwocategories/${delsubtwo}`,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    const newsubtwo = subtwo.filter((s, i) => delsubtwo !== s.id);
    setsubtwo(newsubtwo);
  };
  console.log(data);
  return (
    <div className="container">
      <p>this is category list</p>
      <div className="row">
        <div className="col">
          {" "}
          <label htmlFor="">Category</label>
          <br />
          <select
            onChange={onSelectCategory}
            size="20"
            style={{ minWidth: "150px" }}
          >
            {data &&
              data.map((data, i) => {
                return (
                  <option key={i} value={data.id}>
                    {data.name}
                    {" >"}
                  </option>
                );
              })}
          </select>
          <br />
          <button
            disabled={delcat === null ? true : false}
            onClick={deleteCategory}
          >
            Delete Category
          </button>
        </div>
        <div className="col">
          <label htmlFor="">Sub Category</label>
          <br />
          <select
            size="20"
            style={{ minWidth: "150px" }}
            onChange={subCategorySelect}
          >
            {subcategory &&
              subcategory.map((sub, is) => {
                return (
                  <option key={is} value={sub.id}>
                    {sub.subcategoryname} {" >"}
                  </option>
                );
              })}
          </select>
          <br />
          <button
            disabled={delsub === null ? true : false}
            onClick={deleteSubCategory}
          >
            Delete Sub Category
          </button>
        </div>
        <div className="col">
          <label htmlFor="">SubTwo Category</label>
          <br />
          <select
            size="20"
            style={{ minWidth: "150px" }}
            onChange={subtwoCategorySelect}
          >
            {subtwo &&
              subtwo.map((subt, is) => {
                return (
                  <option key={is} value={subt.id}>
                    {subt.subtwocategoryname}
                  </option>
                );
              })}
          </select>
          <div />
          <button
            disabled={delsubtwo === null ? true : false}
            onClick={deleteSubtwoCategory}
          >
            Delete Subtwo Category
          </button>
        </div>
      </div>
    </div>
  );
}
