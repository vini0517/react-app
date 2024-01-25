import logo from './logo.svg';
import './App.css';
import PropsComponent from './components/functionalComponents/PropsComponent';
import StateComponent from './components/classComponents/StateComponent';

function App() {
  return (
    <div className="App">
      <PropsComponent name="Vini" course="MERN" />
      
      <header className="App-header">
      <StateComponent />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;