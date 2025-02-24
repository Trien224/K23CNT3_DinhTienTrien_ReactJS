import React, { Component } from 'react';

class DttClassState extends Component {
    constructor(props){
        super(props);
        this.State ={
            DttFullName:"Trumchone!",
            DttAge:20,
        }
    }
    //ham xu ly sk
    DttEventClick2=()=>{
        //lay date trong state
        alert("FullName : " +this.State.DttFullName +"\n Age : "+this.State.DttAge);
    }
    render() {
        return (
            <div className=" alert alert-light mx-2"> 
            <button type="button" class="btn btn-dark  mx-2" onClick={this.DttEventClick2}>Nut 2</button>
            </div>
        );
    }
}

export default DttClassState;