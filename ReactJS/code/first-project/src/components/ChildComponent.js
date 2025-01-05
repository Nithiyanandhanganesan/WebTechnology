import React from "react";
import { Component } from "react";

class ChildComponent extends Component{

    render(){
        return (
            <div>
              <button onClick={() => this.props.greetHandler('child','grandchild')}>Greet Parent</button>
            </div>
        )
    }
}

export default ChildComponent;