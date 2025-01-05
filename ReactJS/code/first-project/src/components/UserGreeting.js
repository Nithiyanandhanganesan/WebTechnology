import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }

  render() {
    // if(this.state.isLoggedIn){
    //     return <div>Welcome Nithiy</div>
    // } else {
    //     return <div>Welcome Guest</div>
    // }

    //Another approach to achieve the same using variable
    let message
    if(this.state.isLoggedIn){
        message =  <div>Welcome Nithiy</div>
    } else {
        message =  <div>Welcome Guest</div>
    }
    return <div>{message}</div>

    //Another approach. Here is left expression is false, then right expression will not be evaluvated.
    //return this.state.isLoggedIn && <div>Welcom Nithiy>/div>

  }
}

export default UserGreeting