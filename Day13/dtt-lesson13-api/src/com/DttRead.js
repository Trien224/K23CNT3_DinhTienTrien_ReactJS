import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function DttRead() {
    //Sate
    const [DttUser, setDttUser]=useState([])
    //doc du lu ng dung
    const apiUrl ='http://localhost:3001/students'
    //lay ds  apiurl
    useEffect(()=>{
        axios
            .get(apiUrl)
            .then((DttResponse)=>{
                setDttUser(DttResponse.data)
            })
            .catch((error)=>{
                console.log("loi");
            })
    },[])
  return ( 
    <div><h2>Read Date of DttRead</h2>
    <table className='table table-bordered'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            {
                DttUser.map((DttItem, index)=>{
                    return (
                        <tr>
                        <td>{DttItem.studentId}</td>
                        <td>{DttItem.studentName}</td>
                        
                        </tr>

                    )
                })
            }
        </tbody>
    </table>
    </div>
  )
}
