import { nanoid } from 'nanoid';
import React from 'react'
import Carousel from "react-elastic-carousel";
import { useSelector } from 'react-redux';
import "./styles.css";


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 },
  ];

const Sliderdata = () => {
   const Dataslider = useSelector((state)=>state.Data.data)
   const filterData = Dataslider.filter((item)=>{return item.title.includes("Trouser")})
   console.log(filterData)
  return (
    <div>

   <h1 style={{ textAlign: "center" }}></h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
        {filterData.map((item)=>{
            return (
                <div className="productContainer" key={nanoid()}>
                <img src={item.thumbnail}/>
                <button  className="Quicklook">Quick Look</button> 
               <p>{item.condition}</p>  
               <p>{item.price.raw}</p>
                </div>
                
            )
        })}

        </Carousel>
    
      </div>

    </div> 
  )
}

export default Sliderdata