import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { Component } from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import GreetProps from './components/GreetProps';
import WelcomeProps from './components/WelcomeProps';
import Message from './components/Message';

class App extends Component{
  render(){
  return (
    <div className="App">
      <Greet/>
      <GreetProps name="PropsTest" heroName="vikram">
         <p> This is children props</p>
      </GreetProps>
      <GreetProps name="PropsTest1" heroName="surya">
        <button>Action</button>
      </GreetProps>
      <Welcome/>
      <WelcomeProps name="PropsTest2" heroName="vijay">
      </WelcomeProps>
      <Hello/>
      <Message/>
    </div>
  );
  }
}

export default App;
