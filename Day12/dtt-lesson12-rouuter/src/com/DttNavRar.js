import React from 'react'
import {Link} from 'react-router-dom'
export default function DttNavRar() {
  return (
    <div>
<ul>
    <Link to={'/'}>Home</Link>
    <Link to={'/about'}>About</Link>
    <Link to={'/contact'}>Contact</Link>
    <Link to={'/user'}>Users</Link>
    <Link to={'/create'}>Save</Link>
</ul>
    </div>
  )
}
