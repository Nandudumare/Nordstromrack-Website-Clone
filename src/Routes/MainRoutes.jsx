import React from "react";

import { Route, Routes } from "react-router-dom";
import CreateAcc from "../Components/Navbar/CreateAcc";
import Navbar from "../Components/Navbar/Navbar";
import SignIn from "../Components/Navbar/SignIn";
import Products from "../Components/InnerPages/ProductPages/Products";
import Modals from "../Components/Navbar/Modals";
import Side from "../Components/Navbar/Auth/Side";
import Description from "../Components/InnerPages/Description/Description";
import Checkout from "../Components/InnerPages/Checkout/Checkout";
import Payment from "../Components/InnerPages/Payment/Payment";

const MainRoutes = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Products /> */}
      {/* <Modals /> */}
      {/* <Side /> */}

      {/* <Checkout/> */}

      
      

      <Routes>
        <Route path="checkout" element={ <Checkout/>}/>

        <Route path ="payment" element={<Payment/>} />
    
        <Route path="signin" element={<SignIn />} />
        <Route path="createacc" element={<CreateAcc />} />
        <Route path="products" element={ <Products />}/>
        <Route path="description" element={<Description/>}/>
      </Routes>
    </>
  );
};

export default MainRoutes;
