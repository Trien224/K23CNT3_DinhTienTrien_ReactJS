import React, { Component } from 'react';

class DttClassComp extends Component {
    constructor(props){
        super(props);
        //khoi tai state
        this.state ={
            fullName:"Tien Trien",
            age:20,
            phone:"0948211257"
        }
    }
    //Hamf action show
    changeInfo = (ev)=>{
        //up state
        this.setState({
            fullName:"Dinh tien trien"
        })
    }   
    render() {
        return (
            <div className='alert alert-scucess'>
                <h3>Output state</h3>
                <p>(FullName):{this.state.fullName}</p>
                <p><i>(Age);{this.state.age}</i></p>
                <p>(Phone):{this.state.phone}</p>

                <hr/>
                <button className='btn btn-primary'onClick={this.changeInfo}>Change Name</button>
                <hr/>
                <h3>Take date Props</h3>
                <p>Name:{this.props.renderName}</p>
                <p>FullName:{this.props.renderUsers ?this.props.renderUsers.fullName:''}</p>
                <p>Age:{this.props.renderUsers ?this.props.renderUsers.age:''}</p>
                <p>Phone:{this.props.renderUsers ?this.props.renderUsers.phone:''}</p>

            </div>
        );
    }
}

export default DttClassComp;
