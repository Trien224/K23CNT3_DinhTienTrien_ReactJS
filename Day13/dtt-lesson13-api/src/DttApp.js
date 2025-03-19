import React from 'react'
// import DttRead from './com/DttRead'
import DttReadMock from './com/DttReadMock'

import DttCreateMock from './com/DttCreateMock'
export default function DttApp() {
  return (
    <div className='container border my-3 p-3'>
        {/* <h1> ReactJS - API - Dinh Tien Trien</h1> 
        <hr/>
        <DttRead />
        <hr/>*/}
        <h2>Đọc dữ liệu từ MockAPi (mockapi.io)</h2>
        <DttReadMock/>
        <DttCreateMock/>
    </div>
  )
}