import React, { Component } from 'react';
import DttLoginControl from './DttLoginControl';

class DttRenderCondition extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : false,
        }
    }
        // Hàm xử lý sự kiện login
        DttHandleLogin = ()=>{
            this.setState({
                isLoggedIn:true
            })
        }
        // Hàm xử lý sự kiện logout
        DttHandleLogout=()=>{
            this.setState({
                isLoggedIn:false
            })
        }
    render() {
        let flag = this.state.isLoggedIn;
        return (
            <div>
                <h2>Render Condition</h2>
               
                <DttLoginControl isLoggedIn={flag} />
               
                {
                   flag?<button className=' mt-2 btn btn-outline-danger' onClick={this.DttHandleLogout}>Logout</button>
                        :<button className=' mt-2 btn btn-outline-info'onClick={this.DttHandleLogin}>Login</button>
                }
            </div>
        );
    }
}

export default DttRenderCondition;