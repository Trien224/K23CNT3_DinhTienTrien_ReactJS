import React, { Component } from 'react';
import './App.css';
import DttControl from './com/DttControl';
import DttForm from './com/DttForm';
import DttStudentList from './com/DttStudentList';

class DttApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      DttStudents:[
        {DttId:"SV01",DttStudentName:"Đinh Tiến Triển",DttAge:20,DttGender:"Nam",DttBirthday:"12/04/2005",DttBirthPlace:"Ninh Bình", DttAddress:"Gia Lạc -Gia Viễn-Ninh Bình"},
        {DttId:"SV02",DttStudentName:"Bùi Đức Hiếu ",DttAge:18,DttGender:"Nam",DttBirthday:"25/05/2005",DttBirthPlace:"Việt Nam", DttAddress:"Việt Nam "},
        {DttId:"SV03",DttStudentName:"SonGoku",DttAge:56,DttGender:"Nam",DttBirthday:"25/05/1779",DttBirthPlace:"Nhật", DttAddress:"Nhật "},
        {DttId:"SV04",DttStudentName:"Vegetoto",DttAge:56,DttGender:"Nam",DttBirthday:"25/05/1779",DttBirthPlace:"Nhật", DttAddress:"Nhật"},
      ],
      DttStudent:"",
    }
  }
  // Hàm xử lý sự kiện view Student
  DttHandleView = (DttStudent)=>{
    this.setState({
      DttStudent:DttStudent,
    })
  }

  render() {
    // log
    console.log("View Student:", this.state.DttStudent);
    
    return (
      <div className="container text text-light alert mt-1">
        <h1 className="text-center alert alert-warning">
          Đinh Tiến Triển - K23CNT3 - Mini Project1
        </h1>
          <section className="container-fluid mt-3">
              <div className="col-lg-7 grid-margin stretch-card">
                <div className="card">
                  <DttControl/>

                  <DttStudentList  renderDttStudents={this.state.DttStudents} onDttHandleView={this.DttHandleView}/>
                </div>
              </div>
              <div className="col-5 grid-margin">
   
                <DttForm  renderDttStudent = {this.state.DttStudent}/>
              </div>
          </section>
      </div>
    );
  }
}


export default DttApp;