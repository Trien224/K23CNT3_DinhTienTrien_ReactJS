import React, { Component } from 'react';
class DttFrom3 extends Component {
    constructor(props){
        super(props);
        this.state={
            DttSex:"...không rõ lắm....(^-^!)",
        }
    }
        DttChange=(show)=>{
            this.setState({
                DttSex:show.target.value,
            })
        }
        DttSubmit=(show)=>{
            show.preventDefault();
                alert("Bạn là "+this.state.DttSex )
            }
        
    render() {
        return (
            <div>
                
                <from>
                   <h4 class=' mt-1' >Sex</h4>
                        <label htmlFor=''>Sex:</label>
                        <input type='radio' name='DttGT' value='Nam' id='DttNam' checked={this.state.DttSex === 'Nam'} onChange={this.DttChange} class='mx-1'/>
                        <label htmlFor='DttNam'>Nam</label>
                        <input type='radio' name='DttGT' value='Nữ' id='DttNu' checked={this.state.DttSex === 'Nữ'} onChange={this.DttChange} class='mx-2'/>
                        <label htmlFor='DttNanu'>Nữ</label>
                        <input type='radio' name='DttGT' value='Wow' id='DttGay' checked={this.state.DttSex === 'Wow'} onChange={this.DttChange} class='mx-1'/>
                        <label htmlFor='DttNam'>Khác</label>
                        
               
                 <button className='btn btn-warning  mx-5 ' onClick={this.DttSubmit}>Cilck</button>
                </from>
            </div>
        );
    }
}

export default DttFrom3;