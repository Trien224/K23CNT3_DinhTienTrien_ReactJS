import React, { Component } from 'react';
import './App.css';
import DttFrom2 from './com/DttFrom2';
import DttFrom1 from './com/DttFrom1';
import DttFrom3 from './com/DttFrom3';
import DttFrom4 from './com/DttFrom4';
import DttFrom5 from './com/DttFrom5';

class DttApp extends Component {
  render() {
    return (
      <div className=" container border alert alert-warning mt-1 ">
          <div className="  text text-dark mt-1 ">
        <h1>Đinh Tiến Triển </h1>
        <h3>~Cv Of You!</h3>
          </div>
                <div className=" container border text text-dark alert alert-info mt-1 ">
        <DttFrom1/>
        
        <DttFrom3/>
        
         <DttFrom2/>
       
        <DttFrom4/>
        
        <DttFrom5/>
                </div>
      </div>
    );
  }
}

export default DttApp;