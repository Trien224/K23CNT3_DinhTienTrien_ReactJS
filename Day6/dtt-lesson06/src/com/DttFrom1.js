import React, { Component } from 'react';

class DttFrom1 extends Component {
    constructor(props){
        super(props);
        this.state={
            DttName:'Vui lòng viết tên bạn',
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
                <h4>Name</h4>
                <from>
                    <label htmlFor=''>
                        <input className='btn btn-light mx-3' type='text' name='Dtt' id="Dtt" 
                        placeholder='Vui lòng viết tên bạn' 
                        onChange={this.DttChange} />
                    </label>
                    <button className='btn btn-warning'onClick={this.DttSubmit}>Click</button>
                </from>
            </div>
        );
    }
}

export default DttFrom1;