import React, { useState } from 'react';
import axios from 'axios';

export default function DttCreate() {
    // Khởi tạo state
    const [Dtt_Name, setDtt_Name] = useState('');
    const [Dtt_Email, setDtt_Email] = useState('');
    const [Dtt_Phone, setDtt_Phone] = useState('+(84)');
    const [Dtt_Active, setDtt_Active] = useState();

    // API post
    const DttCreateUserApi = "https://67da645435c87309f52c311c.mockapi.io/Cntt3-dinhtientrien/Dtt_Users";

    // Khi submit form        
    const DttHandleSubmit = (ev) => {
        ev.preventDefault();
        console.log("Dtt_Active:");
        let DttNewUser = { Dtt_Name, Dtt_Email, Dtt_Phone, Dtt_Active };
        console.log(DttNewUser);

        // Ghi dữ liệu vào API
        axios
            .post(DttCreateUserApi, DttNewUser)
            .then((Dtt_response) => {
                console.log("Thêm mới thành công:", Dtt_response.data);
            })
            .catch((error) => {
                console.error("Lỗi khi thêm người dùng:", error);
            });
    };

    return (
        <div className='text-center'>
            <h2>Thêm mới</h2>
            <hr />
            <form onSubmit={DttHandleSubmit}>
                <div className='mb-1'>
                    <label htmlFor="Dtt_Name">Full Name :</label>
                    <input
                        className='btn btn-outline-warning'
                        type='text'
                        name='Dtt_Name'
                        id="Dtt_Name"
                        value={Dtt_Name}
                        onChange={(ev) => setDtt_Name(ev.target.value)} />
                </div>
                <div className='mb-1'>
                    <label className='mx-3' htmlFor="Dtt_Email">Email :</label>
                    <input
                        className='btn btn-outline-warning mx-3'
                        type='text'
                        name='Dtt_Email'
                        id="Dtt_Email"
                        value={Dtt_Email}
                        onChange={(ev) => setDtt_Email(ev.target.value)} />
                </div>
                <div className='mb-1'>
                    <label className='mx-3' htmlFor="Dtt_Phone">Phone :</label>
                    <input
                        className='btn btn-outline-warning mx-3 mb-1'
                        type='tel'
                        name='Dtt_Phone'
                        id="Dtt_Phone"
                        value={Dtt_Phone}
                        onChange={(ev) => setDtt_Phone(ev.target.value)} />
                </div>
                <div className='mb-1'>
                    <input
                        type='radio'
                        name='Dtt_Active'
                        id="DttActive_hd"
                        className='btn btn-outline-warning mx-2'
                        value={true}
                        checked={Dtt_Active === true}
                        onChange={() => setDtt_Active(true)}
                    />
                    <label htmlFor="DttActive_hd"> Hoạt động</label>

                    <input
                        type='radio'
                        name='Dtt_Active'
                        id="DttActive_kh"
                        className='btn btn-outline-warning mx-2'
                        value={false}
                        checked={Dtt_Active === false}
                        onChange={() => setDtt_Active(false)}
                    />
                    <label htmlFor="DttActive_kh"> Khóa </label>
                </div>

                <button type="submit" className='btn btn-outline-info mb-2'>Create</button>
            </form>
        </div>
    );
}
