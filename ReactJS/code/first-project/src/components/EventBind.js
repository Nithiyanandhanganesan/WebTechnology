import React from "react";
import { Component } from "react";

class EventBind extends Component{

   constructor(props){
    super(props)

    this.state = {
        message : 'Hello EventBind'
    }
   }

   clickHandler() {
    this.setState({
        message : 'Goodbye EventBind'
    })
   }

    render(){
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)}>Click me</button>
                {/* Another way of eventbind*/}
                {/* <button onClick={() => this.clickHandler}>Click me</button> */}
            </div>
        )
    }
}

export default EventBind;