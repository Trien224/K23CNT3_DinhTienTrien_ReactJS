import React from 'react'

export default function DttFuncEvent1() {
    // const DttEventButton1Clik = () => {
        // alert("Nut1");};
    const DttEventButton2Clik = () => {
        alert("Nut2");
    };
    const DttEventButton3Clik=(name)=>{
        alert("Name:" + name)
    }
  return (
    <div className=" alert alert-light mx-2">
        
        {/*<button className='btn btn-primary' onClick={DttEventButton1Clik()}>1</button*/}
       <button type="button" class="btn btn-dark  mx-2" onClick={DttEventButton2Clik}>Nut 2</button>
        {/* <button className='btn btn-success' onClick={DttEventButton3Clik("Trum Trien")}>3</button> */}
        <button className="text-center my-3 btn btn-outline-dark  mx-2 "  onClick={()=>DttEventButton3Clik("Dinh Tien Trien")}>Nut 4</button>
     
        </div>
  )
}
