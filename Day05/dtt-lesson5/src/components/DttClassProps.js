import React, { Component } from 'react';

class DttClassProps extends Component {
  // ham xu ly sk
  DttHanldeClick1=()=>{
    alert("Hey bro!"+ this.props.DttRenderTite);
  }
  render() {
    return (
      <div className=" alert alert-light mx-2"> 
       <button type="button" class="btn btn mx-2" onClick={this.DttHanldeClick1} >Nut 1  </button>
    </div>
    );
  }
}

export default DttClassProps;