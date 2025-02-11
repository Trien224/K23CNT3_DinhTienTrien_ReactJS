import React, { Component } from 'react'

export default class DttComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Trien",
        };
    }

    render() {
        return (
            <div>
                <h2>DttComp</h2>
                <p> Dữ liệu trong state: {this.state.name}</p>
                <h3> Hiển thị dữ liệu từ props</h3>
                <p>Name: {this.props.DttName}</p>
                <p>Address: {this.props.DttAddress}</p>
            </div>
        )
    }
}