
import React from 'react'
import Descpage from '../descrip/Descpage'
import { Example } from '../Dialoguebox/Popup'
import  {WomenJeans, ManJeans, NewFlash, Slippers, Spring, Springaccess, BestSelling,Slideshow, Secondslide, Looks } from '../Slider/Slider'

const Main = () => {
  return (
    <div className='maincontainer' style={{margin:"10px"}}>

   {/* <div className="mothercard">
     <img src="https://n.nordstrommedia.com/id/5a42dc96-aff4-4ace-8628-3f7923cf9a96.jpeg?h=200&w=1608" alt=""></img>
   </div> */}
    {/* <Slideshow></Slideshow>
    <Slippers></Slippers>
    <Spring></Spring>
    <Secondslide></Secondslide>
    <NewFlash></NewFlash>
    <div className="navjean">
      <div className="jean">Women</div>
      <div className="jean">Men</div>
    </div>
    <WomenJeans></WomenJeans>
    <ManJeans></ManJeans>
    <Springaccess></Springaccess>
    <BestSelling></BestSelling>
    <Looks></Looks> */}
    {/* <Example style={{border:"1px solid red"}}></Example> */}

    <Descpage></Descpage>
    </div>
  )
}

export default Main