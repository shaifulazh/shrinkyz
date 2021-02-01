import React, { Component } from 'react'

export default class ProdDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             formdetails :[{name: "", detail : ""}]
        }

    }


    

    render() {
        return (
            <div>

                <form action="" onSubmit={handleSubmit}></form>


                
            </div>
        )
    }
}
