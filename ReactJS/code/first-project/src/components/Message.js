import React from "react";
import { Component } from "react";

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message: 'Welcome visitor'
        }
    }

    changemessage(){
        this.setState({
            message: 'Thank you for subscribing'
        })
    }
    render(){
        return (
            <div>
                 <h1>State: {this.state.message}</h1>
                 <button onClick={() => this.changemessage()}>Subscribe</button>
            </div>
        
        )
    }
}

export default Message;