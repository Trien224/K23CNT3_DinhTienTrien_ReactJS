import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import DttUser from './com/DttUser'
import DttHome from './com/DttHome'
import DttNavRar from './com/DttNavBar'
import DttCreate from './com/DttCreate'
import './App.css';
export default function DttApp() { 
  const[DttUsers]=useState('')

///xuly sk new

const Haddnew =(DttParam)=>{
  console.log("Haddnew:", DttParam);

}
  return (
    <div className='container border text text-warning mt-3'>
      <h2><img className='container border mx-3'
        src="https://www.pngplay.com/wp-content/uploads/10/Garena-Free-Fire-Logo-PNG-HD-Images.png"
        alt="Website Logo"
        style={{
          width: '60px',
          height: 'auto',
          borderRadius: '20px',
          border: '8px solid rgba(103,207,255,0.5)',
          boxShadow: '3px 3px 10px rgba(103, 207, 255, 0.5)',
          transition: 'transform 0.3s ease'
        }}
      />Đinh Triến Triển CNTT3 - Mini Project</h2>
     
      <Router>
        <DttNavRar/>
          <Routes>
<Route path='/' element ={<DttHome/>}/>
<Route path='/user' element ={<DttUser renderDttUsers={DttUsers}/>}/>
<Route path='/create' element ={<DttCreate AddNew={Haddnew}/>}/>
        </Routes>   
      </Router>
      </div>
  )
}
