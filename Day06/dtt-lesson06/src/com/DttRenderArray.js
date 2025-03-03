import React from 'react'

export default function DttRenderArray() {

    const DttNumbers = [10,20,30,40,50];
    const DttElement = DttNumbers.map((item)=>{
        return <li>{item}</li>
    })
  return (
    <div className='mt-1'><h1>Array</h1>
        {DttElement}
    </div>
  )
}