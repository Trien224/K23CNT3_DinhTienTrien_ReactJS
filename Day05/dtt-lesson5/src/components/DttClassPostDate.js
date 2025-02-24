import React, { Component } from 'react';

class DttClassPostDate extends Component {
   constructor(props){
    super(props);
    this.state={
    FullName:"Met roi!"
    };
   }
   
    //ham xu ly sk
    DttEventHandleClick1=()=>{
        //chuyen date up app aurod props
        this.props.onDttDataToApp ("Du lieu DttClassPostDate");
       }
    render() {
        return (
            <div className=" alert alert-light mx-2"> 
            <button type="button" class="btn btn-outline-dark  mx-2"onClick={this.DttEventHandleClick1}>Nut 1</button>
            </div>
        );
    }
}

export default DttClassPostDate;