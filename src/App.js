//import logo from './logo.svg';
import './App.css';
//import PropsComponent from './components/functionalcomponents/PropsComponent';
//import StateComponent from './components/classcomponents/StateComponent';
import NavBar from './components/functionalComponents/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/functionalComponents/About';
import Login from './components/functionalComponents/Login';
import Experience from './components/functionalComponents/Experience';
import Home from './components/functionalComponents/Home';
import Footer from './components/functionalComponents/Footer';
import Signup from './components/functionalComponents/Signup';
import Reference from './components/functionalComponents/Referece';
import Memo from './components/functionalComponents/Memo';
import Callback from './components/functionalComponents/Callback';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Experience" element={<Experience/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/Ref" element={<Reference/>}></Route> 
        <Route path="/Memo" element={<Memo/>}></Route>
        <Route path="/call" element={<Callback/>}></Route>
      </Routes>
      </BrowserRouter>
      {/* <PropsComponent name="Hello sneka" course="MERN course"></PropsComponent> 
      {/* <header className="App-header"> */}
        {/* <StateComponent></StateComponent> */}
        
         {/* <img src={logo} className="App-logo" alt="logo" />  
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
  </header>*/}
        <Footer />
      
    </div>
  );
}

export default App;