import React, { Component } from 'react';
import './App.css';
import DttFrom2 from './com/DttFrom2';
import DttFrom1 from './com/DttFrom1';
import DttFrom3 from './com/DttFrom3';
import DttFrom4 from './com/DttFrom4';
import DttFrom5 from './com/DttFrom5';
import DttFrom6 from './com/DttFrom6';
import DttRenderCondition from './com/DttRenderCondition';
import DttRenderArray from './com/DttRenderArray';
import DttRenderListObject from './com/DttRenderListObject';

class DttApp extends Component {
  render() {
    return (
      <div className=" container text text-light alert alert-warning mt-1 ">
          <div className="   mt-1 ">
        <h1>Đinh Tiến Triển </h1>
        <h3>~Cv dành cho bạn! !</h3>
          </div>
                <div  class=" text text-light container border alert mt-1 "> 
<DttFrom1/>

<DttFrom2/>

<DttFrom3/>

<DttFrom4/>

<DttFrom5/>

<DttFrom6/>

        <DttRenderCondition/>

        <DttRenderArray/>

        <DttRenderListObject/>

        </div>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
    www.trumcho.com
</a>

      </div>
      
    );
  }
}

export default DttApp;