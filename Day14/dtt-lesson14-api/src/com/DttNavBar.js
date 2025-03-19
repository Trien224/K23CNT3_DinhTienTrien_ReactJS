import React from 'react'
import {Link} from 'react-router-dom'
export default function DttNavRar() {
  return (
    <div>
<ul>
    <Link to={'/'}>Trang Chủ</Link>
    <Link to={'/user'}>Danh Sách Users</Link>
    <Link to={'/create'}>Thêm mới Users</Link>
</ul>
    </div>
  )
}
