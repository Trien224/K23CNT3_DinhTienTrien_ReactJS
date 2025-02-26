import React, { Component } from 'react';

class DttFrom2 extends Component {
    constructor(props){
        super(props);
        this.state={
            DttCourse:'Javascript',
        }}
    DttChange =(en)=>{
        this.setState({
            DttCourse:en.target.value,
        })
    }
    DttSubmit =(e)=>{
        alert('Môn bạn chọn : '+this.state.DttCourse+' ?');
        e.preventDefault();
    }
    render() {
        return (
            <div>
                 <h4  class='mt-2'>Chọn biểu mẫu </h4>
                <form>
                    <label htmlFor=''>
                      <select  className='btn btn-light mx-3' name='DttCourse' id='DttCourse'
                            value={this.state.DttCourse}
                            onChange={this.DttChange} >
                        <option value={'Bootstrap'}>Bootstrap</option>
                        <option value={'CSS3'}>CSS3</option>
                        <option value={'Javascript'}>Javascript</option>
                        <option value={'Jquery'}>Jquery</option>
                        <option value={'HTML5'}>HTML5</option>
                      </select>
                    </label>
                    <button className='btn btn-warning mx-5' onClick={this.DttSubmit}> Nhấp vào đây !</button>
                </form>
            </div>
        );
    }
}

export default DttFrom2;