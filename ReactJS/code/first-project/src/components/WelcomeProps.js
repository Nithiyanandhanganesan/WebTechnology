import React from "react";
import { Component } from "react";

class WelcomeProps extends Component{
    render(){
        return <h1>Class Component: Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
    }
}

export default WelcomeProps;