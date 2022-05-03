

import './App.css';
import { useSelector } from 'react-redux';
import Navbar from './Components/Navbar/Navbar';
import React from 'react'
import Slider from './Components/home/Slider/Slider'
import Sliderdata from './Components/home/Slider/Slider' 
import MainRoutes from './Routes/MainRoutes';

const App = () => {
  return (

    <div className="App">

      {/* <MainRoutes/>
   */}

    <Slider></Slider> 
    </div>
   


  );
};

export default App