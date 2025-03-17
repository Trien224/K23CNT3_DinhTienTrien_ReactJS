import React from 'react'

export default function DttUser({renderDttUsers}) {

    const DttElements =renderDttUsers.map((DttItem, index)=>{

        return(
        <>
        <tr key={index}>
            <td>{index+1}</td>
            <td>{DttItem.id}</td>
            <td> {DttItem.DttFullName}</td>
            <td> {DttItem.DttUserName}</td>
            <td> {DttItem.DttPass}</td>
            </tr>
        </>)
    }) 

  return (
    <div><h2>Danh Sach Tai Khoan DttUser</h2>
        <thead>
            <table className='table table-bordered'>
            <tr>
                <th>#</th>
                <th>ID</th>
                <th>DttFullName</th>
                <th>UserName</th>
                <th>Password</th>
            </tr></table>
            <tbody>
               {DttElements}
            </tbody>
        </thead>
    </div>
    
  )
}
