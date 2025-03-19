import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import DttUser from './com/DttUser'
import DttHome from './com/DttHome'
import DttNavRar from './com/DttNavBar'
import DttCreate from './com/DttCreate'

export default function DttApp() { 
  const[DttUsers]=useState('')

///xuly sk new

const Haddnew =(DttParam)=>{
  console.log("Haddnew:", DttParam);

}
  return (
    <div className='container border alert alert-danger'>
      <h1>Đinh Triến Triển CNTT3 - Mini Project</h1>
     
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
