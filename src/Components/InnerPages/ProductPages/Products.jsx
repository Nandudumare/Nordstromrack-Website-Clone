// import { colors } from '@mui/material'
import React from 'react'

import { useSelector } from 'react-redux'
import styles from "./styles.module.css"

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';


import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';




const Products = () => {
  const data = useSelector((state) => state.Data.data)

  const filterData = data.filter((item )=>{return item.title.includes("Women")})

  console.log("filter data",filterData,filterData.length)

//the sort

// const Select = styled.select`
//   background-color: #b6ffdb;
//   border: none;
//   outline: none;
//   padding: 4px 10px;
//   font-size: 20px;
// `;

// function handlesort()
// {
//   filterData.sort((a,b) => {

//     if (value === "asc") {
//       return a.price - b.price;
//     } else {
//       return b.price - a.price;
//     }

//   })

// }

const handlesort = (e) => {
  sortProducts(e.target.value)
  console.log("value",e.target.value)
}



// console.log(filterData[0].price.raw)
var arr=[]

for(var i=0; i<filterData.length; i++)
{
      if(filterData[i].price.extracted==undefined)
      {
        filterData[i].price.extracted=100
      }
      var x = (filterData[i].price.extracted)

      arr.push(x)

}

console.log(arr,"xhere")


     arr.sort(function (a,b){
       return a-b
     })


     console.log(arr,"sortedarray")


function sortProducts(value)
{

  filterData.sort((a,b)=>{

    if(value=="acs")
    {
        if(a.price.extracted==undefined && b.price.extracted==undefined)
        {
          a.price.extracted=100
          b.price.extracted=100
        }

      return Number(a.price.extracted)-Number(b.price.extracted)
    }
    if(value=="dec")
    {

      if(b.price.extracted==undefined && a.price.extracted==undefined)
      {
        b.price.extracted=100
          a.price.extracted=100
      }
      return Number(b.price.extracted)-Number(a.price.extracted)
    }
  })
  

  console.log(filterData,"filter")

  // arr.sort(function(a,b){
  //   if(value=="asc")
  //   {
  //     return a-b
  //   }
  //   if(value=="dec")
  //   {
  //     return b-a
  //   }

  //   console.log(arr,"aftersort")

  // })


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



{/* 
    <ProSidebar>
  <Menu iconShape="square">
    <SubMenu title="Components" >
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
    <SubMenu title="Components" >
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
    <SubMenu title="Components" >
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
  </Menu>
</ProSidebar>; */}
 

 {/* <div>
        <Header onClick={this.handleViewSidebar} />
        <SideBar isOpen={this.state.sidebarOpen} toggleSidebar={this.handleViewSidebar} />
        <Content isOpen={this.state.sidebarOpen} />
      </div> */}







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
            title: <h4 >Size</h4>,
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
                <lable> Pnik</lable>
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
                title:<>
                <input type="checkbox"/>
                <lable> Breathable</lable>
                </>,
                itemId: '/management/teams',
              },
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

        {filterData.map(e => {

        return <>

            <div className={styles.productContainer} >
              

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
        })}

        </div>


    </>
  )
}

export default Products
