import React, { Component } from 'react';

class DttStudent extends Component {
    constructor(props){
        super(props);
    }
    // Hàm xử lý chức năng xem
    DttHandleView = (DttStudent)=>{
        // Chuyển lên DttStudentList
        this.props.onDttHandleView(DttStudent);
    }
  render() {
    // lấy đối tượng dữ liệu chuyển từ DttStudentList
    let {renderDttStudent, key} = this.props;
    console.log("Student:",renderDttStudent);
    
    return (
      <>
        <tr>
          <td>{key}</td>
          <td>{renderDttStudent.DttId}</td>
          <td>{renderDttStudent.DttStudentName}</td>
          <td>{renderDttStudent.DttAge}</td>
          <td>{renderDttStudent.DttGender}</td>
          <td>
            <div className="template-demo">
              <button type="button" className="btn btn-outline-primary btn-icon-text mx-1" 
                    onClick={()=>this.DttHandleView(renderDttStudent)}
                    >
                Xem
              </button>
              <button type="button" className="btn btn-outline-success btn-icon-text mx-2">
                Sửa
              </button>
              <button type="button" className="btn btn-outline-danger btn-icon-text">
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}

export default DttStudent;
