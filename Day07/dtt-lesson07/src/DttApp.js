import React, { Component } from 'react';
import './App.css';
import DttFrom6 from './com/DttFrom6';

class DttApp extends Component {
  render() {
    return (
      <div className=" container text text-drak alert alert-warning mt-1 ">
          <div className="   mt-1 ">
        <h1>Đinh Tiến Triển </h1>
        <h3>~Cv dành cho bạn! !</h3>
          </div>
                <div  classz=" text text-drak container border alert mt-1 "> 
                <DttFrom6/>
        </div>
                www.trumcho.com
      </div>
      
    );
  }
}

export default DttApp;