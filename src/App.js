

import './App.css';

//import Navbar from './Components/Navbar/Navbar';
import React from 'react'
// import Slider from './Components/home/Slider/Slider'
// import Sliderdata from './Components/home/Slider/Slider' 
import Flash from './Components/Flash/Flash';
import Flashs from './Components/Flash/Flash';
import MainRoutes from './Routes/MainRoutes';





 import { useSelector } from 'react-redux';
//  import Flash from './Components/Flash/Flash';
import FlashEvents from './Components/Flash/FlashEvents';
import Home from './Components/Flash/Home';


import Megha from "./Components/Meghamenu/Megha";

function App() {

  return (

     <MainRoutes/>
 
  );
}



export default App