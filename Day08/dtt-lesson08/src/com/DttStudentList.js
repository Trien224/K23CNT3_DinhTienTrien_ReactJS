import React, { Component } from 'react';
import DttStudent from "./DttStudent";
class DttStudentList extends Component {
    constructor(props){
        super(props);
    }
        // Hàm xử lý sự kiện xêm
    DttHandleView = (DttStudent)=>{
        // Chuyển dữ liệu lên DttApp
        this.props.onDttHandleView(DttStudent);
    }


  render() {
    // lấy dữ liệu trong props từ DttApp chuyển xuống
    let {renderDttStudents} = this.props;
    console.log("List:",renderDttStudents);
    
    // chuyển dữ liệu vào DttStudent để hiển thị
    let DttElementStudent = renderDttStudents.map((DttItem,index)=>{
        return <DttStudent key={index} renderDttStudent={DttItem} onDttHandleView={this.DttHandleView} />
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

             {DttElementStudent}
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default DttStudentList;
