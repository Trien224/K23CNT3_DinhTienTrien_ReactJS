
import './App.css';
import React, { Component } from 'react';
import DttFuncEvent1 from './components/DttFuncEvent1';
import DttClassEvent1 from './components/DttClassEvent1';
import DttFuncProps from './components/DttFuncProps';
import DttClassProps from './components/DttClassProps';
import DttClassState from './components/DttClassState';
import DttClassPostDate from './components/DttClassPostDate';

class DttApp extends Component {
  //ham xu ly sk khi con comp up date
  DttClassPostDate=(content)=>{
    alert(content);

  }
  render() {
    return (
     
      <div className="text-center container border alert alert-light mt-3 ">

        <h1 className=' text-center my-3'>K23-CNT3 </h1>
        <h1 className=' text-center my-3'> Dinh Tien Trien</h1>
        
          <hr/>  
        <h3 className=' alert alert-dark mx-4 my-4'>Function -Event
        <div className='A'>
          <DttFuncEvent1/>
          </div>
        </h3>

          <hr/>
        <h3 className=' alert alert-dark mx-4 my-4'>Class -Event
        <div className='A'>
          <DttClassEvent1/>
        </div>
        </h3>

          <hr/>
        <h4 className=' alert alert-dark mx-4 my-4'>Function -Props
        <div className='A'>
          <DttFuncProps DttRenderName="Trien ne!"/>
        </div>
        </h4>

          <hr/>
        <h4 className=' alert alert-dark mx-4 my-4'>Class -Props
        <div className='A'>
          <DttClassProps DttRenderTite=" Fuck you"/>
        </div>
        </h4>

        <h4 className=' alert alert-dark mx-4 my-4'>Class -State
        <div className='A'>
          <DttClassState/>
        </div>
        </h4>

        <h4 className=' alert alert-dark mx-4 my-4'>Class -Post Data
        <div className='A'> <h1>{this.setState.FullName}</h1>
          <DttClassPostDate onDttDataToApp={this.DttClassPostDate}/>
         
        </div>
        </h4>

</div>
    );
  }
}

export default DttApp;