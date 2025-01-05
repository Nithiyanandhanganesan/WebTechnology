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
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './components/appStyles.css'
import styles from './components/appStyles.modules.css'
import Form from './components/Form';

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
      <Counter/>
      <FunctionClick/>
      <ClassClick/>
      <EventBind/>
      <ParentComponent/>
      <UserGreeting/>
      <NameList/>
      <Stylesheet primary={true}/>
      <Inline/>
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Form/>
    </div>
  );
  }
}

export default App;
