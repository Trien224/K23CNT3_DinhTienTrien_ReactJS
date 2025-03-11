import React, { useEffect, useState } from 'react'

export default function  DttUseEffect
() {const[count, setCount]=useState(0);
    useEffect(()=>
    {
        console.log("chao mung ban,Callback1");
    },)
    useEffect(()=>
        {
            console.log("Callback2 : mot lan duy nhat");
        },[])
     useEffect(()=>
    {
        console.log("Callback3 : Thay doi nhieu lan",count);
    })
  return (
    <div className='alert alert-primary'>
<button onClick={()=>setCount(count+1)}>Nhan</button>
    </div>
  )
}
