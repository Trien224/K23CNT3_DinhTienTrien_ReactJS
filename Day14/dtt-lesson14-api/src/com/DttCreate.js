// Thêm mới dữ liệu 
import React, { useState } from 'react'
import axios from 'axios'
export default function DttCreate() {
    // khởi tạo state
    const [Dtt_Name,setDtt_Name] = useState('')
    const [Dtt_Email,setDtt_Email] = useState('')
    const [Dtt_Phone,setDtt_Phone] = useState(0)
    const [DttActive,setDttActive] = useState(true)

    // api post
    const DttCreateUserApi = "https://67da645435c87309f52c311c.mockapi.io/Cntt3-dinhtientrien/Dtt_Users"
    // khi submit form        
    const DttHandleSubmit = (event)=>{
        event.preventDefault();
        console.log("DttActive:",DttActive);
        let DttNewUser = {Dtt_Name,Dtt_Email,Dtt_Phone,DttActive};
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
                <label for="Dtt_Name">Full Name</label>
                <input type='text' name='Dtt_Name' id="Dtt_Name" 
                    value={Dtt_Name}
                    onChange={(ev)=>setDtt_Name(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="Dtt_Email">Email :</label>
                <input type='text' name='Dtt_Email' id="Dtt_Email" 
                    value={Dtt_Email}
                    onChange={(ev)=>setDtt_Email(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="Dtt_Phone">Phone</label>
                <input type='number' name='Dtt_Phone' id="Dtt_Phone" 
                    value={Dtt_Phone}
                    onChange={(ev)=>setDtt_Phone(ev.target.value)} />
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