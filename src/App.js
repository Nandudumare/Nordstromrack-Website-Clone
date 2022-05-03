

import './App.css';
import { useSelector } from 'react-redux';
import Navbar from './Components/Navbar/Navbar';
import React from 'react'
import Slider from './Components/home/Slider/Slider'
import Sliderdata from './Components/home/Slider/Slider' 

const App = () => {
  return (

    <div className="App">
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

    <Slider></Slider> 
    </div>
   


  );
};

export default App