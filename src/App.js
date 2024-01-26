import logo from './logo.svg';
import './App.css';
//import PropsComponent from './components/functionalcomponents/PropsComponent';
//import StateComponent from './components/classcomponents/StateComponent';
import NavBar from './components/functionalComponents/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/functionalComponents/About';
import Login from './components/functionalComponents/Login';
import Experience from './components/functionalComponents/Experience';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/Experience" element={<Experience/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
      {/* <PropsComponent name="Hello sneka" course="MERN course"></PropsComponent> */}
      <header className="App-header">
        {/* <StateComponent></StateComponent> */}
        
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
      <footer>
        
        <p>&copy; 2024 Your Website. All rights reserved.</p>
        <p>Contact us: vini@remail.com</p>
    </footer>
    </div>
  );
}

export default App;