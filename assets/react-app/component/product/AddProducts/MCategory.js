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
      subcategory : [
        {
          subcategoryid : "",
          subcategoryname : ""
        }
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
      categories : [
        ...this.state.categories, {
          categoryid: "",
          categoryname: "",
        }
      ]
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
    console.log("kena cari",data);

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
    this.props.changecategory(newData)

  }

  handleAddSubCategory =(index) =>{
    const addsub = this.state.categories.map((cat,cati)=>{
      if (index !== cati) return cat;
      return {...cat,subcategory : [{subcategoryid: "", subcategoryname : ""}]  }

    })
    console.log("add sub",addsub)
    this.setState({categories : addsub})

  }

  handleAddSubCategoryTwo = (i) =>{
    console.log("init addsub2",this.state.categories);
    const addsubtwo = this.state.categories.map((addsubtwocat,itwo)=>{
      if (i !== itwo) return addsubtwocat;
      addsubtwocat.subcategory.map((datasub,idxs)=> {
        return {...datasub , subcategorytwo :[{subcategoryid: "", subcategoryname : ""}] }
      })
      

    })
    console.log("add sub two", addsubtwo);
    this.setState({
      categories : addsubtwo
    })
    
  }
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

            {data.subcategory ? data.subcategory.map((sub,idx)=>(
              <div key={idx}>
                <input type="text" size="12" placeholder={`Sub Category#${idx + 1}`}/>

                {sub.subcategorytwo ? sub.subcategorytwo.map((sub2,ind2)=>(
                  <div key={ind2}>
                    <input type="text" size="12" placeholder={`Sub Two Category#${indtwo + 1}`}/>
                  </div>
                ))
                  
                 : <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              this.handleAddSubCategoryTwo(index);
            }}
            className="btn btn-primary btn-sm p-2 m-2"
          >
            Add Sub Category Two
          </a>}
                



              </div>

            )): <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              this.handleAddSubCategory(index);
            }}
            className="btn btn-primary btn-sm p-2 m-2"
          >
            Add Sub Category
          </a>}
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
