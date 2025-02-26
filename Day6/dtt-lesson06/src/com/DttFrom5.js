import React, { Component } from 'react';
class DttFrom5 extends Component {
    constructor(props){
        super(props);
        this.state = {
           DttName:'Trienne',
           DttAge:20,
           DttGender:'Female',
           DttCourse:'CSS3'} }

   DttChange = (event)=>{
        let name = event.target.name;   let value = event.target.value;
        this.setState({
            [name]:value,
        })}

   DttSubmit = (event)=>{
        
        alert(this.state.DttName + "\n" + this.state.DttAge+"\n"
        +this.state.DttGender+"\n"+this.state.DttCourse)
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <h4 class='mt-3'>Form Student Info </h4>
                <form>
                    <div>
                        <label htmlFor='DttName'>Student Name :</label>
                        <input className='btn btn-light mx-4' type='text' name='DttName' id='DttName'
                             placeholder='Vui lòng viết tên bạn'
                            onChange={this.DttChange} />
                    </div>
                    <div>
                        <label htmlFor='DttAge'>Student Age:</label>
                        <input className='btn btn-light mt-1 mx-5'type='text' name='DttAge' id='DttAge'
                            placeholder='Vui lòng nhập tuổi bạn'
                            onChange={this.DttChange} />
                    </div>
                            <label htmlFor='DttGender'>Student Gender:</label>   
                    <div className='btn btn-light mt-1 mx-4'>
                        
                            <input type='radio' name='DttGender' id='DttMale' className='mx-2'
                                value={'Male'}
                                checked={this.state.DttGender === 'Male'}
                                onChange={this.DttChange} />
                            <label htmlFor='DttMale'> Male</label>
                        
                            <input type='radio' name='DttGender' id='DttFemale' className='mx-2'
                                value={'Female'}
                                checked={this.state.DttGender === 'Female'}
                                onChange={this.DttChange} />
                            <label htmlFor='DttFemale'> Female</label>
                        
                            <input type='radio' name='DttGender' id='DttNone' className='mx-2'
                                value={'None'}
                                checked={this.state.DttGender === 'None'}
                                onChange={this.DttChange} />
                            <label htmlFor='DttNone'> None</label>
                       
                    </div>
                    <div>
                        <label htmlFor=''>
                        <select className='btn btn-light mt-2' name='DttCourse' id='DttCourse'
                            value={this.state.DttCourse}
                            onChange={this.DttChange} >
                                <option value={'HTML5'}>HTML5</option>
                                <option value={'CSS3'}>CSS3</option>
                                <option value={'Javascript'}>Javascript</option>
                                <option value={'Jquery'}>Jquery</option>
                                <option value={'Bootstrap'}>Bootstrap</option>
                            </select>
                        </label>
                    </div>
                    <button className='mx-2 mt-2 btn btn-info' onClick={this.DttSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default DttFrom5;