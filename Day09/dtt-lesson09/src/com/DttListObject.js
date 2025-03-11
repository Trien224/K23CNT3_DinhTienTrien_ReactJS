import React, { useState } from 'react'

export default function DttListObject() {
    //mockdata
    const  Dtt=[
        {DttId:"SV01",DttName:"Đinh Tiến Triển",DttAge:20,DttGender:"Nam",DttBirthday:"12/04/2005",DttBirthPlace:"Ninh Bình", DttAddress:"Gia Lạc -Gia Viễn-Ninh Bình"},
        {DttId:"SV02",DttName:"Bùi Đức Hiếu ",DttAge:18,DttGender:"Nam",DttBirthday:"25/05/2005",DttBirthPlace:"Việt Nam", DttAddress:"Việt Nam "},
        {DttId:"SV03",DttName:"SonGoku",DttAge:56,DttGender:"Nam",DttBirthday:"25/05/1779",DttBirthPlace:"Nhật", DttAddress:"Nhật "},
        {DttId:"SV04",DttName:"Vegetoto",DttAge:56,DttGender:"Nam",DttBirthday:"25/05/1779",DttBirthPlace:"Nhật", DttAddress:"Nhật"},
      ];
  //tao use state
      const[DttStudents]= useState(Dtt);

          // lấy đối tượng dữ liệu chuyển từ DttStudentList
    let DttElement= DttStudents.map((DttItem,index)=>{
        return (
            <tr>
            <td>{index+1}</td>
            <td>{DttItem.DttId}</td>
            <td>{DttItem.DttStudentName}</td>
            <td>{DttItem.DttAge}</td>
            <td>{DttItem.DttGender}</td>
            <td>
                <button type="button" className="btn btn-outline-success btn-icon-text mx-2">
                    Sửa
                </button>
                <button type="button" className="btn btn-outline-danger btn-icon-text">
                    Xóa
                </button>
            </td>
            </tr>
        )
    })
  return (

    <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>

             {DttElement}
            </tbody>
          </table>
        </div>
      </div>
  )
}
