// import { colors } from '@mui/material'
import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import styles from "./styles.module.css"

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';


import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { useNavigate } from 'react-router-dom';
import { description_data, sorted_data } from '../../../Redux/Data/Action';




const Products = () => {
  const data = useSelector((state) => state.Data.data)
  const navigate = useNavigate()
  const dispatch= useDispatch()
  const [state,setState] = useState(false )
  // console.log(data)
  const filterData = data.filter((item )=>{return item.title.includes("Women")})

  // console.log("filter data",filterData,filterData.length)

  const sortedData = useSelector(state=>state.Data.sortedData)
  console.log(sortedData)
  // console.log(...filterData +"Filtered")





//description 

const handleclick =(payload) =>{
  description_data(dispatch,payload)
navigate("/description") 


}


//the sort


const handlesort = (e) => {
  // sortProducts(e.target.value)
  if(e.target.value==="asc"){
   const data =   filterData.sort((a,b)=>{
      return Number(a.price.extracted)-Number(b.price.extracted)
    })
    sorted_data(dispatch,data)
    setState(true)

    
  }else if(e.target.value==="desc"){
    const data =   filterData.sort((a,b)=>{
      return Number(b.price.extracted)-Number(a.price.extracted)
    })
    sorted_data(dispatch,data)
    setState(true)
  }
}



  return (
    <>
    <div className={styles.nav}>Navbar</div>


    <div className={styles.left}>
      <a> Home /</a>
      <a>Women / </a>
      <a>Dresses </a>
     </div>
    <div className={styles.topdiv}>
          <div>
                <div>
                  {/* side bar div */}
                  <div  className={styles.sidebar} >



        <Navigation 
        // you can use your own router's api to get pathname
        activeItemId="/management/members"
        onSelect={({itemId}) => {
          // maybe push to the route
        }}
        items={[
          {
            itemId: '/dashboard',
            // you can use your own custom Icon component as well
            // icon is optional
            // elemBefore: () => <Icon name="inbox" />,
          },
          {
            title: <h4>Size</h4>,
            itemId: '/1',
            // elemBefore: () => <Icon name="users" />,
            subNav: [
              // {
              //   title:<input type="checkbox" />,
              //   itemId: '/management/projects',
              // },
              {
                title: <>
                      <input type="checkbox"/>
                      <lable> XXS</lable>
                </>,
              
                itemId: '/11',
              },
              {
                title:<>
                <input type="checkbox"/>
                <lable> 0 ,XS</lable>
          </>,
                itemId: '/12',
              },
              {
                title:<>
                <input type="checkbox"/>
                <lable>  2 ,XS</lable>
                </>,
                itemId: '/13',
              },
              {
                title:<>
                <input type="checkbox"/>
                <lable> 4 ,S</lable>
          </>,
                itemId: '/14',
              },
              {
                title: <>
                <input type="checkbox"/>
                <lable> M</lable>
          </>,
                itemId: '/15',
              },
              {
                title:<>
                <input type="checkbox"/>
                <lable> 8 ,XL</lable>
          </> ,
                itemId: '/16',
              },
              {
                title: <>
                <input type="checkbox"/>
                <lable> 16 ,XS</lable>
          </>,
                itemId: '/17',
              },
            ],
          },
          {
            title: <h4>Color</h4>,
            itemId: '/2',
            subNav: [
              {
                title: <>
                <input type="checkbox"/>
                <lable> Black</lable>
          </>,
                itemId: '/21',
              },
              {
                title: <>
                <input type="checkbox"/>
                <lable> Grey</lable>
          </>,
                itemId: '/22',
              },
              {
                title: <>
                <input type="checkbox"/>
                <lable> White</lable>
          </>,
                itemId: '/23',
              },
              {
                title: <>
                <input type="checkbox"/>
                <lable> Metalic</lable>
          </>,
                itemId: '/24',
              },
              {
                title: <>
                <input type="checkbox"/>
                <lable> Purple</lable>
          </>,
                itemId: '/25',
              },
              {
                title:<>
                <input type="checkbox"/>
                <lable> Blue</lable>
          </>,
                itemId: '/26',
              },
              {
                title: <>
                <input type="checkbox"/>
                <lable> Pink</lable>
          </>,
                itemId: '/27',
              },
              {
                title: <>
                <input type="checkbox"/>
                <lable> Red</lable>
          </>,
                itemId: '/28',
              },
              
              
            ],
          },


          {
            title: <h4>Brand</h4>,
            itemId: '/3',
            subNav: [
              {
                title: <>
                <input type="checkbox"/>
                <lable> STATE</lable>
          </>,
                itemId: '/31',
              },
              {
                title: <>
                <input type="checkbox"/>
                <lable> Philip</lable>
          </>,
                itemId: '/32',
              },
              {
                title: <>
                <input type="checkbox"/>
                <lable> Akris</lable>
          </>,
                itemId: '/33',
              },
              {
                title: <>
                <input type="checkbox"/>
                <lable> Queen</lable>
          </>,
                itemId: '/34',
              },
              {
                title: <>
                <input type="checkbox"/>
                <lable> Bardon</lable>
          </>,
                itemId: '/35',
              },
              {
                title: <>
                <input type="checkbox"/>
                <lable> Billabog</lable>
          </>,
                itemId: '/36',
              },
              {
                title: <>
                <input type="checkbox"/>
                <lable> Frame</lable>
          </>,
                itemId: '/37',
              },
            
              
            ],
          },




          {
            title: <h4>Length</h4>,
            itemId: '/4',
            subNav: [
            
              {
                title: <>
                <input type="checkbox"/>
                <lable> Long</lable>
          </>,
                itemId: '/41',
              },
              {
                title: <>
                <input type="checkbox"/>
                <lable> Midi</lable>
          </>,
                itemId: '/42',
              },
              {
                title:<>
                <input type="checkbox"/>
                <lable> Mini</lable>
          </>,
                itemId: '/43',
              },
            
              {
                title: <>
                <input type="checkbox"/>
                <lable> Short</lable>
          </>,
                itemId: '/45',
              },
            ],
          },
          {
            title: <h4>Feature</h4>,
            itemId: '/5',
            subNav: [
              {
                title: <>
                <input type="checkbox"/>
                <lable> Nursing</lable>
                </> ,
                itemId: '/management/teams',
              },
              {
                title:  <>
                <input type="checkbox"/>
                <lable> Hooded</lable>
                </>,
                itemId: '/management/teams',
              },
              {
                title:  <>
                <input type="checkbox"/>
                <lable> Stretch</lable>
                </> ,
                itemId: '/management/teams',
              },
              {
                title:  <>
                <input type="checkbox"/>
                <lable> Wrinkle Resistant</lable>
                </>,
                itemId: '/management/teams',
              }, 
            ],
          },
        ]}
      />
                </div>
                </div>

          </div>
          <div >

                  <div><h4 className={styles.you}>That Dress is So You</h4></div>

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

    <div >

      <select onChange={handlesort} className={styles.sort}  >
        <option value="asc">Sort by price: low to high</option>
        <option value="desc">Sort by price: high to low</option>
        <option value="">Sort by featured</option>
        <option value="">Sort by newest</option>
        <option value="">Sort by percent off</option>
        <option value="">Sort by customer rating</option>
      </select>

    </div>

    <div className={styles.grid}>

    { state ? (
      sortedData.map(e => {

        return <>
        
            <div onClick={()=>{handleclick(e)}} className={styles.productContainer} >
              
        
                    <img src={e.thumbnail}/>
                    <a>{e.title}</a>
                    {/* <p>{e.price.raw}</p> */}
                    <p>{e.condition}</p>
                    <p className={styles.price}>{e.price.raw}</p>
                    {/* <p>{e.price.extracted}</p> */}
                    {/* <p>{e.price.from.raw}</p> */}
                    <p className={styles.shipping}>{e.shipping}</p>
                    <p className={styles.sold}>{e.extensions}</p>
                    <button  className={styles.Quicklook}>Quick Look</button> 
                
            </div>
        
        </>
        })
    ):

filterData.map(e => {

  return <>
  
      <div onClick={()=>{handleclick(e)}} className={styles.productContainer} >
        
  
              <img src={e.thumbnail}/>
              <a>{e.title}</a>
              {/* <p>{e.price.raw}</p> */}
              <p>{e.condition}</p>
              <p className={styles.price}>{e.price.raw}</p>
              {/* <p>{e.price.extracted}</p> */}
              {/* <p>{e.price.from.raw}</p> */}
              <p className={styles.shipping}>{e.shipping}</p>
              <p className={styles.sold}>{e.extensions}</p>
              <button  className={styles.Quicklook}>Quick Look</button> 
         
          
      </div>
  
  </>
  })

    }

        </div>
    </>
  )
}

export default Products
