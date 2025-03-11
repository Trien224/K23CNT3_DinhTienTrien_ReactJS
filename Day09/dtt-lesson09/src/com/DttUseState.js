import React, { useState } from 'react'

export default function DttUseState() {
  const [count,setCount]=useState(0);

  const DttTang=()=>{
    setCount(count+1);
  }
  const danh_sach =[10,15,20];

  const[list,setList]=useState(danh_sach);

  const DttAdd=()=>{
    // setList(prev=>{
    //   return[...prev,
    //     parseInt(Math.random()*100)
    //   ]

    // })

    setList([
      ...list,
      parseInt(Math.random()*1000)
    ])
  }
  return (
    <div className='alert alert-primary'>
      <h1>useState</h1>
      <div>
        <b>Count: {count}</b>
        <button onClick={DttTang}>Tăng</button>
        <button onClick={()=>setCount(count-1)}>Giảm</button>
        <button onClick={()=>setCount(0)}>Đặt lại</button>
      </div>
      <div>
        <p>List:{list.toString()}
          <button onClick={DttAdd}>Ramdom </button>
        </p>
      </div>
      </div>
  )
}
