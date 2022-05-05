<<<<<<< Updated upstream
// import { colors } from '@mui/material'
import React from 'react'

import { useSelector } from 'react-redux'
import styles from "./Flash.module.css"
import home from "./Data/home.json"
import { Link, useNavigate } from 'react-router-dom'

  
const Home = () => {
  const Data=home.home
  //const data = useSelector((state) => state.Data.data)

  const filterData = Data.filter((item )=>{return item.title.includes("a")})

  console.log("filter data",filterData,filterData.length)

  const navigate = useNavigate();


  return (
    <>
    <div className={styles.nav}>Navbar</div>
   
    <div className={styles.left}>
      <a> Home /</a>
      <a>styles Events/ </a>
      <Link  to="flash/men">Women's syles Events </Link>
     </div>
    <div className={styles.topdiv}>
     
          

                
                  <div  className={styles.sidebar} >

                    <h3>Flash Events</h3>
                    <a>Women's styles Events </a>
                    <a>Men's styles Events</a>
                    <a>kid's styles Events </a>
                    <a>Home styles Events </a>
                    <a>Beauty styles Events </a>
                    <h3>Featured</h3>
                    <a>Women's Must-Have Bright & Bold Sandals</a>
                    <a>Men's Must-Have Sandals Up to 60% Off </a>
                    <a>Kid's Must-Have Sandals Up To 50% Off</a>
                    <a>Free People Starting at $30</a>
                    <a>Alexa Admor Up to 65% Off including Plus</a>
                    <a>Beach Party:Women's Swimwear,Cover-Ups & More Up to 60% Off</a>
                    <a>beach Party:Women's Summer & Resort Styles Up to 65% Off</a>
                    <a>Beach Party:Men's Summer & Resort Styles Up to 65% Off</a>
                    <a>Beach Party:Kid's Swim & Summer Styles Up to 60% Off</a>
                    <a>Cozy Throws Feat.Barefoot Dreams</a>




                  </div>
                
<div className={styles.women}><h2>Women's styles Events</h2>
    <img className={styles.img} src="https://n.nordstrommedia.com/id/cc3b28d5-08ef-440d-b791-1e46d7ab48a1.png?h=185&w=1560" alt="" />
    <h3>Today's Event</h3>
    
    
          <div >
                  
                  
          </div>
    

    

   

    <div className={styles.home}>

        {Data.map(e => {

        return <>

            <div>
              

            <img src={e.imgurl}/>
                    <p className={styles.bold}>{e.title}</p>
                    <p className={styles.normal}>{e.para}</p>
                   
                
            </div>

        </>
        })}

        </div>
        </div> 
        </div>
    </>
=======
import React from 'react'

export const Home = () => {
  return (
    <div>home</div>
>>>>>>> Stashed changes
  )
}

export default Home;