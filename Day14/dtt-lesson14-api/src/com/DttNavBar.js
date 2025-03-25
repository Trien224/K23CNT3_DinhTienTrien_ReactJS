import React from 'react'
import {Link} from 'react-router-dom'
export default function DttNavRar() {
  return (
    <div  > 
<ul className='text-center'>
<Link className='btn btn-outline-warning mx-2 'to={'/'}>Trang Chủ</Link>
<Link className='btn btn-outline-warning mx-2 'to={'/user'}>Danh Sách</Link>
<Link className='btn btn-outline-warning mx-2 'to={'/create'}>Thêm Mới</Link>
    
</ul>
    </div>
  )
}
