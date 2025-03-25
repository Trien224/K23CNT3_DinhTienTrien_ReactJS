import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function DttUser() {
  // khởi tạo state 
  const [DttListUser, setDttListUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // Đoạn mã mới
  const [formData, setFormData] = useState({
    // Đoạn mã mới
    Dtt_Name: "",
    Dtt_Email: "",
    Dtt_Phone: "",
    Dtt_Active: false,
  });
  // api
  const DttApiOnline = "https://67da645435c87309f52c311c.mockapi.io/Cntt3-dinhtientrien/Dtt_Users"
  // Đọc dữ liệu từ api bằng axios
  useEffect(()=>{
      axios
          .get(DttApiOnline)
          .then((Dtt_response)=>{
              setDttListUser(Dtt_response.data)
          })
          .catch((error)=>{
              console.log("Lỗi phát sinh");
          });
  },[]);
  const handleEdit = (user) => {
    // Đoạn mã mới
    setSelectedUser(user);
    setFormData({
      Dtt_Name: user.Dtt_Name,
      Dtt_Email: user.Dtt_Email,
    Dtt_Phone: user.Dtt_Phone,
    Dtt_Active: user.Dtt_Active,
    });
  };
  const handleChange = (e) => {
    // Đoạn mã mới
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    // Đoạn mã mới
    e.preventDefault();
    axios
      .put(`${DttApiOnline}/${selectedUser.id}`, formData)
      .then((response) => {
        const updatedUsers = DttListUser.map((user) =>
          user.id === selectedUser.id ? response.data : user
        );
        setDttListUser(updatedUsers);
        setSelectedUser(null);
        setFormData({
          Dtt_Name: "",
          Dtt_Email: "",
          Dtt_Phone: "",
          Dtt_Active: false,
        });
      })
      .catch((error) => {
        console.error("Lỗi khi cập nhật dữ liệu:", error);
      });
  };

  const handleDelete = (id) => {
    // Đoạn mã mới
    axios
      .delete(`${DttApiOnline}/${id}`)
      .then(() => {
        const updatedUsers = DttListUser.filter((user) => user.id !== id);
        setDttListUser(updatedUsers);
      })
      .catch((error) => {
        console.error("Lỗi khi xóa dữ liệu:", error);
      });
  };
  // view data
  const DttElementUser = DttListUser.map((Dtt_item, index)=>{
      return(
          <tr>
              <td>{Dtt_item.id}</td>
              <td>{Dtt_item.Dtt_Name}</td>
              <td>{Dtt_item.Dtt_Email}</td>
              <td>{Dtt_item.Dtt_Phone}</td>
              <td>{Dtt_item.Dtt_Active ? 'Hoạt động' : 'Khóa' }</td>
              <td>
          <button
            className="btn btn-success"
            onClick={() => handleEdit(Dtt_item)}
          >
            Sửa
          </button>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(Dtt_item.id)} // Đoạn mã mới
          >
            Xóa
          </button>
        </td>
          </tr>
      )
  })
return (
  <div className=' text-center'>
      <h2>Danh sách</h2>
      <hr/>
      <table className='table table-bordered'>
          <thead>
              <tr>
                  <th>User ID</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Phone</th>
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
  {selectedUser && ( // Đoạn mã mới
        <div>
          <h3>Cập nhật thông tin người dùng</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Tên:</label>
              <input
                type="text"
                name="Dtt_Name"
                className="form-control"
                value={formData.Dtt_Name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="Dtt_Email"
                className="form-control"
                value={formData.Dtt_Email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Điện thoại:</label>
              <input
                type="text"
                name="Dtt_Phone"
                className="form-control"
                value={formData.Dtt_Phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Trạng thái:</label>
              <input
                type="checkbox"
                name="Dtt_Active"
                checked={formData.Dtt_Active}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Cập nhật
            </button>
          </form>
        </div>
      )}
    </div>
)
}