import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import DttNavRar from './com/DttNavRar'
import DttHome from './com/DttHome'
import DttAbout from './com/DttAbout'
import DttContact from './com/DttContact'
import DttUser from './com/DttUser'
import DttFrom from './com/DttFrom'
export default function DttApp() {

 const Users =[
  {id:"Svxx", DttFullName:"Din tien trien",DttUserName:"Tumtrum",DttPass:"12345"},
 ]

const[DttUsers, setDttUsers]=useState(Users)

///xuly sk new

const Haddnew =(DttParam)=>{
  console.log("Haddnew:", DttParam);

  setDttUsers(prev =>{
    return[
      ...prev,
      DttParam,
    ]
  })
}


  return (
    <div className='container border alert alert-danger'><h1>
      Trang Chu Home DttApp</h1>
      <h2>Demo-React Router -Dom CNTT3</h2>
      <h3>Dinh tien trien</h3>
      <Router>
        <DttNavRar/>
          <Routes>
<Route path='/' element ={<DttHome/>}/>
<Route path='/about' element ={<DttAbout/>}/>
<Route path='/contact' element ={<DttContact/>}/>
<Route path='/user' element ={<DttUser renderDttUsers={DttUsers}/>}/>
<Route path='/create' element ={<DttFrom AddNew={Haddnew}/>}/>
        </Routes>   
      </Router>
      </div>
  )
}
