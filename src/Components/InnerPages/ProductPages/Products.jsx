// import { colors } from '@mui/material'
import React from 'react'

import { useSelector } from 'react-redux'
import styles from "./styles.module.css"



const Products = () => {
  const data = useSelector((state) => state.Data.data)

  const filterData = data.filter((item )=>{return item.title.includes("Women")})

  console.log("filter data",filterData,filterData.length)



  return (
    <>
    <div className={styles.nav}>Navbar</div>

    <h1>hello</h1>

    <div className={styles.left}>
      <a> Home /</a>
      <a>Women / </a>
      <a>Dresses </a>
     </div>
    <div className={styles.topdiv}>
          <div>

                <div>
                  <div  className={styles.sidebar} >
                  </div>
                </div>

          </div>




          <div >

                  <div><p>That Dress is So You</p></div>


                  <div className={styles.cat}>
             
                  <div>
                  <img src={filterData[3].thumbnail}/>
                  <a>{filterData[3].cat}</a>
                  </div>

                  <div>
            
                  <img src={filterData[4].thumbnail}/>
                  <a>{filterData[4].cat}</a>
                  </div>

                  <div>
           
                  <img src={filterData[5].thumbnail}/>
                  <a>{filterData[5].cat}</a>
                  </div>

                  <div>
             
                  <img src={filterData[6].thumbnail}/>
                  <a>{filterData[6].cat}</a>
                  </div>



                  <div>
                  
                  <img src={filterData[7].thumbnail}/>
                  <a>{filterData[7].cat}</a>
                  </div>




                  </div>



                  
                  
          </div>
    </div>

    <h2 className={styles.left1}>Dresses for Women</h2>

    <div className={styles.allcategory}>
         <a>All Dresses</a>
         <a>Casual</a>
         <a>Cocktail & Party</a>
         <a>Daytime & Sundresses</a>
         <a>Floral</a>
         <a>Formal</a>
         <a>Going Out</a>
         <a>Long Sleeve</a>
         <a>Maxi</a>
         <a>Midi</a>
         <a>Shirt</a>
    </div>
    <div className={styles.line}></div>
    <p className={styles.left2}>{filterData.length} items</p>

    <div className={styles.sort}>

    </div>

    <div className={styles.grid}>

        {filterData.map(e => {

        return <>

            <div >
              

                    <img src={e.thumbnail}/>
                    <a>{e.title}</a>
                    {/* <p>{e.price.raw}</p> */}
                    <p>{e.condition}</p>
                    <p className={styles.price}>{e.price.raw}</p>
                    {/* <p>{e.price.extracted}</p> */}
                    {/* <p>{e.price.from.raw}</p> */}
                    <p className={styles.shipping}>{e.shipping}</p>
                    <p className={styles.sold}>{e.extensions}</p>
                
            </div>

        </>
        })}

        </div>


    </>
  )
}

export default Products
