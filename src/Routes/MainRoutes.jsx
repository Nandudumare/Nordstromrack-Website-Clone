import Flash from "../Components/Flash/Flash";
import Kids from "../Components/Flash/Kids";
import Mens from "../Components/Flash/Mens";
import Home from "../Components/Flash/Home";
import Beauty from "../Components/Flash/Beauty";

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

import Main from "../Components/home/main/Main";

const MainRoutes = () => {
  return (
    <>
      {/* <Navbar />
      <Products />
      <Routes>
        <Route path="flash/women" element={<Flash />} />
        <Route path="flash/kids" element={<Kids />} />
        <Route path="flash/mens" element={<Mens />} />
        <Route path="flash/home" element={<Home />} />
        <Route path="flash/beauty" element={<Beauty />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="createacc" element={<CreateAcc />} />
      </Routes> */}
      <Main></Main>
     
    </>
  );
};
export default MainRoutes;
