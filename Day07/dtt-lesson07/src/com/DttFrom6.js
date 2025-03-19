import React, { Component } from 'react';

class DttFrom6 extends Component {
    constructor(p){
        super(p);
        this.DttName = React.createRef();
        this.DttSex =React.createRef();
        this.DttAge =React.createRef();
    };
    DttSubmit =(e)=>{
        alert('Thong tin cua ban la: '+this.DttName.current.value+'-'+ this.DttSex.current.value+'-'+this.DttAge.current.value)
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.DttSubmit} >
                <label>
                    Name: <input type='text' ref={this.DttName}/>
                </label>
                <label>
                Tuou=i: <input type='text' ref={this.DttAge}/>
                </label>
                <label>
                    Chon khoa
                    <select defaultValue='hl' ref={this.DttSex}>
                        <option value='html'>HTML</option>
                        <option value='ml'>ML</option>
                        <option value='tml'>TML</option>
                        <option value='hl'>HL</option>
                    </select>
                </label>
                <label>
                    <input type='submit' value="Submit"/>
                </label>
            </form>
        );
    }
}

export default DttFrom6;