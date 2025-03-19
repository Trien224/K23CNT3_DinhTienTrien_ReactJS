import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function DttReadMock() {
  // khởi tạo state 
  const [DttListUser, setDttListUser] = useState([])
  // api
  const DttApiOnline = "https://67da645435c87309f52c311c.mockapi.io/Cntt3-dinhtientrien/Dtt_users"
  // Đọc dữ liệu từ api bằng axios
  useEffect(()=>{
      axios
          .get(DttApiOnline)
          .then((Dtt_response)=>{
              setDttListUser(Dtt_response.data)
          })
          .catch((error)=>{
              console.log("Lỗi phát sinh");
          })
  },[])

  // view data
  const DttElementUser = DttListUser.map((Dtt_item, index)=>{
      return(
          <tr>
              <td>{Dtt_item.id}</td>
              <td>{Dtt_item.DttfullName}</td>
              <td>{Dtt_item.Dttage}</td>
              <td>{Dtt_item.Dttclass}</td>
              <td>{Dtt_item.DttActive?'Hoạt động':'Khóa'}</td>
              <td>
                  <button>Sửa</button>
                  <button>Xóa</button>
              </td>
          </tr>
      )
  })
return (
  <div className='alert alert-danger'>
      <h2>Danh sách</h2>
      <table className='table table-bordered'>
          <thead>
              <tr>
                  <th>Id</th>
                  <th>FullName</th>
                  <th>Age</th>
                  <th>Class</th>
                  <th>Active</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>
              {
                 DttElementUser
              }
          </tbody>
      </table>
  </div>
)
}