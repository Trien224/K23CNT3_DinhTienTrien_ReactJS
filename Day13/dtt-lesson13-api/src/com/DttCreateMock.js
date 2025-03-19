// Thêm mới dữ liệu 

import React, { useState } from 'react'
import axios from 'axios'
export default function DttCreateMock() {
    // khởi tạo state
    const [DttfullName,setDttfullName] = useState('')
    const [Dttage,setDttage] = useState(0)
    const [Dttclass,setDttclass] = useState('Cntt3')
    const [DttActive,setDttActive] = useState(true)

    // api post
    const DttCreateUserApi = "https://67da645435c87309f52c311c.mockapi.io/Cntt3-dinhtientrien/Dtt_users"
    // khi submit form        
    const DttHandleSubmit = (event)=>{
        event.preventDefault();
        console.log("DttActive:",DttActive);
        let DttNewUser = {DttfullName,Dttage,Dttclass,DttActive};
        console.log(DttNewUser);

        // ghi dữ liệu vào api
        axios
            .post(DttCreateUserApi, DttNewUser)
            .then((Dtt_response)=>{
                
            })
        
    }
  return (
    <div className='alert alert-info'>
        <h2>Thêm mới users</h2>
        <hr/>
        <form>
            <div className=' mb-1'>
                <label for="DttFullName">Full Name</label>
                <input type='text' name='DttFullName' id="DttFullName" 
                    value={DttfullName}
                    onChange={(ev)=>setDttfullName(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="DttAge">Age</label>
                <input type='number' name='DttAge' id="DttAge" 
                    value={Dttage}
                    onChange={(ev)=>setDttage(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="DttClass">Class</label>
                <input type='text' name='DttClass' id="DttClass" 
                    value={Dttclass}
                    onChange={(ev)=>setDttclass(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="DttActive">Active</label>
                <input type='radio' name='DttActive' id="DttActive_hd" value={'true'} 
                    onChange={(ev)=>setDttActive(ev.target.value)} />
                    <label for="DttActive_hd"> Hoạt động</label>
                <input type='radio' name='DttActive' id="DttActive_kh" value={'false'} 
                    onChange={(ev)=>setDttActive(ev.target.value)}/>
                    <label for="DttActive_kh"> Khóa</label>
            </div>
            <button onClick={DttHandleSubmit}>Create</button>
        </form>
    </div>
  )
}