import React, { Component } from 'react';
class DttFrom5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            DttName:'Vui lòng nhập họ tên !',
            DttAge:'Vui lòng nhập tuổi  !',
            DttGender:'Vui lòng chọn giới tính !',
            DttCourse:'CSS3'} }

   DttChange = (event)=>{
        let name = event.target.name;   let value = event.target.value;
        this.setState({
            [name]:value,
        })}

   DttSubmit = (event)=>{
        
        alert(this.state.DttName + "\n" + this.state.DttAge+"\n"
        +this.state.DttGender+" ?"+"\n"+this.state.DttCourse)
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <h4 class='mt-3'>Biểu mẫu thông tin sinh viên </h4>
                <form>
                    <div>
                        <label htmlFor='DttName'>Tên học sinh:</label>
                        <input className='btn btn-light mx-5' type='text' name='DttName' id='DttName'
                             placeholder='Vui lòng viết tên bạn'
                            onChange={this.DttChange} />
                    </div>
                    <div>
                        <label htmlFor='DttAge'>Độ tuổi của học sinh:</label>
                        <input className='btn btn-light mt-1 mx-2'type='text' name='DttAge' id='DttAge'
                            placeholder='Vui lòng nhập tuổi bạn'
                            onChange={this.DttChange} />
                    </div>
                            <label htmlFor='DttGender'>Giới tính của học sinh:</label>   
                    <div className='btn btn-light mt-1 mx-3'>
                        
                            <input type='radio' name='DttGender' id='DttMale' className='mx-2'
                                value={'Nam'}
                                checked={this.state.DttGender === 'Nam'}
                                onChange={this.DttChange} />
                            <label htmlFor='DttMale'> Nam </label>
                        
                            <input type='radio' name='DttGender' id='DttFemale' className='mx-2'
                                value={'Nữ'}
                                checked={this.state.DttGender === 'Nữ'}
                                onChange={this.DttChange} />
                            <label htmlFor='DttFemale'>Nữ </label>
                        
                            <input type='radio' name='DttGender' id='DttNone' className='mx-2'
                                value={'Babythree3'}
                                checked={this.state.DttGender === 'Babythree3'}
                                onChange={this.DttChange} />
                            <label htmlFor='DttNone'>Khác </label>
                       
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
                    <button className='mx-2 mt-2 btn btn-info' onClick={this.DttSubmit}>Nộp </button>
                </form>
            </div>
        );
    }
}

export default DttFrom5;