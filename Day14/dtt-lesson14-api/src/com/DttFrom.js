import React, { useState } from 'react'

export default function DttFrom({AddNew}) {

    const[DttId,setDttId] = useState('')
    const[DttFullName,setDttFullName] = useState('')
    const[DttUserName,setDttUserName] = useState('')
    const[DttPass,setDttPass] = useState('')

    const DttSubmit=(e)=>{
        e.preventDefault();
        console.log(DttId,DttFullName,DttUserName,DttPass)
        AddNew({DttId,DttFullName,DttUserName,DttPass})
    }
  return (
    <div>DttFrom
        <form>
            <p>Masv:
                <input type='text' name='DttId' value={DttId} onChange={(ev)=>setDttId(ev.target.value)}/>
            </p>
            <p>Hoten:
                <input type='text'name='DttFullName' value={DttFullName} onChange={(ev)=>setDttFullName(ev.target.value)}/>
            </p>
            <p>Taikhoan:
                <input type='text' name='DttUserName' value={DttUserName} onChange={(ev)=>setDttUserName(ev.target.value)}/>
            </p>
            <p>MaKhau:
                <input type='password' name='DttPass' value={DttPass} onChange={(ev)=>setDttPass(ev.target.value)}/>
            </p>
            <button onClick={DttSubmit} name='Dttsave'>Save</button>
        </form>
    </div>
  )
}
