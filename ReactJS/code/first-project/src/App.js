import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';

function App() {

  const title = 'Test message'
  const link = "https://www.google.com"
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p> This is {title}
            { 10}
            {1,2,3,4,5}
            {Math.random() * 10}
        </p>
        <p>
          <a href={link}>Google</a>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="content">
        <h1>test</h1>
      </div>
    </div>
  );
}

export default App;
