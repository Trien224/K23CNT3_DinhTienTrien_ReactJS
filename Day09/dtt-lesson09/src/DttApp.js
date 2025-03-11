import React from 'react'
import DttUseState from './com/DttUseState'
import DttListObject from './com/DttListObject'
import DttUseEffect from './com/DttUseEffect'

export default function DttApp() {
  return (
    <div className='Container border mt-3'>
      <h1> Hook </h1>
      <hr/>
      <DttUseState/>
      <DttListObject/>
      <DttUseEffect/>
    </div>
  )
}
