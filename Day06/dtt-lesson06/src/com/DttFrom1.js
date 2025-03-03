import React, { Component } from 'react';

class DttFrom1 extends Component {
    constructor(props){
        super(props);
        this.state={
            DttName:' Vui lòng nhập họ tên !',
        }}

        DttChange =(event)=>{
            this.setState({
                DttName:event.target.value,
            })
        }
        DttSubmit =(ev)=>{
            alert('Hi,' +this.state.DttName);
            ev.preventDefault();
        }
    
    render() {
        return (
            <div>
                <h4>Họ và tên </h4>
                <from>
                    <label htmlFor=''>
                        <input className='btn btn-light mx-3 ' type='text' name='Dtt' id="Dtt" 
                        placeholder='Vui lòng viết tên bạn... ' 
                        onChange={this.DttChange} />
                    </label>
                    <button className='btn btn-outline-warning'onClick={this.DttSubmit}>Nhấn vào</button>
                </from>
            </div>
        );
    }
}

export default DttFrom1;