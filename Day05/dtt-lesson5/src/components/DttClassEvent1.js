import React, { Component } from 'react';

class DttClassEvent1 extends Component {
    //var sk
    DttEventClick1 =()=>{
        alert("Nut 1");
    }
    DttEventClick2 =(name)=>{
        alert(""+name);
    }
    render() {
        return (
            <div className=" alert alert-light mx-2"> 
            <button type="button" class="btn btn-outline-dark  mx-2"onClick={this.DttEventClick1}>Nut 1</button>
            <button type="button" class="btn btn-dark  mx-2" onClick={()=>this.DttEventClick2('Reset')}>Nut 2</button>
            </div>
        );
    }
}

export default DttClassEvent1;