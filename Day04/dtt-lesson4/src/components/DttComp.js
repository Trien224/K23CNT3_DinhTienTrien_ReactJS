import React from 'react'

export default function DttComp(props) {
  return (
    <div>
        <h2>Props is object</h2>
        <p><i>Info:{props.renderInfo.age}</i></p>
        <p>Name:{props.renderInfo.FullName}</p>
    </div>
  )
}
