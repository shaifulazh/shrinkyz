import React, { Component } from "react";
import Axios from "axios";
import FormRedux from "./reduxForm/FormRedux";


export default class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showadd: false,
      formdata : [5],
    };
  }

  handleShow = () => {
    this.setState(
      {
        showadd: true,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  addcount = () =>{
    const { data } = formdata;
    this.setState({
      

    })
  }


  handleSubmit = (e) => {
    console.log(e);
    // Axios({
    //   method: "POST",
    //   url: `api/admin/test/tests`,
    //   data: {
    //     test: {
    //       name: "setan",
    //       data: [
    //         {
    //           name: "saantut",
    //         },
    //         { detail: "XXL" },
    //         "hello workl",
    //         4,
    //         5,
    //         6,
    //       ],
    //     },
    //   },
    // })
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((e) => console.log(e));
  };

  render() {
    const { showadd , formdata } = this.state;
    console.log(showadd);

    return (
      <div>
        <button onClick={this.handleShow}>Add Product Details</button>
        <button onClick={this.addcount}>Addcount</button>


        {showadd ? (
          <div>
{/* new idea 'for'!!! */}
      {/* {formdata ?  ({formdata.( (form,i) => {
            const { data } = form;
            <input
            type="text"
            onChange={e=> this.setState({data = e.target.value})}
            className="form-control"
          />

          })}): null }    */}


          </div>    
        ) : (
          <h1>false</h1>
        )}
       
      </div>
    );
  }
}
