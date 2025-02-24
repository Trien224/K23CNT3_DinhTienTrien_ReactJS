import React from 'react'

export default function DttFuncProps(Dttprops) {
  const DttHanEventClick1=()=>{
    //xu lay sk
    alert("Data props "+Dttprops.DttRenderName);
        console.log("Hi",Dttprops.DttRenderName);
  }
  const DttHanEventClick2=(param)=>{
    //lay date psops
    alert("Date props (Reset):"+Dttprops.DttRenderName);
    //date tu tham so
    console.log('===========');
    console.log("hi",param);
    console.log('===========');
    
  }
  return (
    <div className=" alert alert-light mx-2"> 
       <button type="button" class="btn btn-dark  mx-2"onClick={DttHanEventClick1}>Nut 1</button>
       <button type="button" class="btn btn mx-2" onClick={()=>DttHanEventClick2('Reset')}>Nut 2</button>
    </div>
  )
}
