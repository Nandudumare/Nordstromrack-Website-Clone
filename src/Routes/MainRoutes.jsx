import React from "react";

import { Route, Routes } from "react-router-dom";
import CreateAcc from "../Components/Navbar/CreateAcc";
import Navbar from "../Components/Navbar/Navbar";
import SignIn from "../Components/Navbar/SignIn";
import Products from "../Components/InnerPages/ProductPages/Products";
import Modals from "../Components/Navbar/Modals";
import Side from "../Components/Navbar/Auth/Side";
import Description from "../Components/InnerPages/Description/Description";
import Purchase from "../Components/Navbar/Auth/Purchase";
import WishList from "../Components/Navbar/Auth/WishList";
import ShippingAddress from "../Components/Navbar/Auth/ShippingAddress";
import PaymentMethods from "../Components/Navbar/Auth/PaymentMethod";
import Password from "../Components/Navbar/Auth/Password";
import Cart from "../Components/Navbar/Auth/Cart";

const MainRoutes = () => {
  return (
    <>
      <Navbar />
      {/* <Purchase/> */}
      {/* <WishList /> */}
      {/* <Products /> */}
      {/* <Modals /> */}
      {/* <Side /> */}
      {/* <ShippingAddress/> */}
      {/* <PaymentMethods /> */}
      {/* <Password /> */}
      {/* <Cart /> */}

      <Routes>
        <Route path="signin" element={<SignIn />} />
        <Route path="createacc" element={<CreateAcc />} />
        <Route path="products" element={<Products />} />
        <Route path="description" element={<Description />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
