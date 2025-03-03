import React, { Component } from 'react';

class DttFrom6 extends Component {
    constructor(p){
        super(p);
        this.DttName = React.createRef();
        this.DttSex =React.createRef();
        this.DttAge =React.createRef();
    };
    DttSubmit =(e)=>{
        alert('Thong tin cua ban la: '+this.DttName.current.value+"\n"+ this.DttSex.current.value+'\n'+this.DttAge.current.value)
        e.preventDefault();
    }
    render() {
        return (
            <form  onSubmit={this.DttSubmit} >
                <label>
                    Name: <input className='btn btn-light mt-2 mx-2'type='text'  placeholder='Vui lòng viết tên bạn' ref={this.DttName}/>
                </label>
                <label>
                Tuoi: <input className='btn btn-light mt-2 mx-2' type='text'  placeholder='Vui lòng nhập tuổi bạn' ref={this.DttAge}/>
                </label>
                <label >
                    Chon khoa
                    <select className='btn btn-light mt-2 mx-2' defaultValue='hl' ref={this.DttSex}>
                        <option value='html'>HTML</option>
                        <option value='ml'>ML</option>
                        <option value='tml'>TML</option>
                        <option value='hl'>HL</option>
                    </select>
                </label>
                <label>
                    <input className='btn btn-outline-info  mt-2 mx-2' type='submit' value="Submit"/>
                </label>
            </form>
        );
    }
}

export default DttFrom6;