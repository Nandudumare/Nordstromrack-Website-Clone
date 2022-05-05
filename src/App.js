<<<<<<< Updated upstream


import './App.css';
import { useSelector } from 'react-redux';
//import Navbar from './Components/Navbar/Navbar';
import React from 'react'
// import Slider from './Components/home/Slider/Slider'
// import Sliderdata from './Components/home/Slider/Slider' 
import Flash from './Components/Flash/Flash';
import Flashs from './Components/Flash/Flash';
import MainRoutes from './Routes/MainRoutes';

const App = () => {
=======
import logo from './logo.svg';
import './App.css';
 import { useSelector } from 'react-redux';
 import Flash from './Components/Flash/Flash';
import FlashEvents from './Components/Flash/FlashEvents';
import Home from './Components/Flash/Home';
function App() {
  
>>>>>>> Stashed changes
  return (

    <div className="App">
<<<<<<< Updated upstream
      {/* <Navbar/> */}
      {/* <header className="App-header">
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
      </header> */}
{/* 
  <Flashs/> */}
 <MainRoutes/> 
=======
      <div id="name">
       <Flash/>
       <Home/>
       <FlashEvents/>
       </div>
>>>>>>> Stashed changes
    </div>
   


  );
};

export default App