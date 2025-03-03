import React, { Component } from 'react';

class DttRenderListObject extends Component {
    constructor(props){
        super(props);
        this.state = {
            DttStudents :[
                {DttId:1,DttName:"Dinh Tien Trien", DttAge:46},
                {DttId:2,DttName:"Nguyễn Quang A", DttAge:20},
                {DttId:3,DttName:"Nguyễn Quang B", DttAge:22},
                {DttId:4,DttName:"Nguyễn Quang C", DttAge:21},
            ],
        }
    }

    
    render() {
        // Hiển thị dữ liệu
        let {DttStudents} = this.state;
        let DttElement = DttStudents.map((DttItem)=>{
            return (
                <li>{DttItem.DttId} - {DttItem.DttName}</li>
            );
        })

        let DttRenderElement = DttStudents.map((DttItem,index)=>{
            return (
                <tr key={index}>
                    <td>{DttItem.DttId}</td>
                    <td>{DttItem.DttName}</td>
                    <td>{DttItem.DttAge}</td>
                    <td>
                        <button className='btn btn-success mx-1'>Sửa</button>
                        <button className='btn btn-danger mx-1'>Xóa</button>
                    </td>
                </tr>
            )
        })
        return (
            <div>
                <h2>Danh sách sinh viên</h2>
                <ul>
                {DttElement}
              </ul>
                <h2> Thông tin chung</h2>
                <table className='btn btn-dark p-3 mt-2 '>
                    <thead>
                        <tr>
                            <th>DttID</th>
                            <th>DttName</th>
                            <th>DttAge</th>
                            <th>DttAction</th>
                        </tr>
                    </thead>
                    <tbody>
                       {DttRenderElement}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DttRenderListObject;