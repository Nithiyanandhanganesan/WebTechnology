import React from "react";
import { Component } from "react";

class WelcomeProps extends Component{
    //If you dont want to use this.props.name , use the below code. 
    //const {name,heroName} = this.props
    render(){
        return <h1>Class Component: Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
    }
}

export default WelcomeProps;