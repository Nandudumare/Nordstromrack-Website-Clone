import React from "react";

import { Route, Routes } from "react-router-dom";
import CreateAcc from "../Components/Navbar/CreateAcc";
import Navbar from "../Components/Navbar/Navbar";
import SignIn from "../Components/Navbar/SignIn";
import Products from "../Components/InnerPages/ProductPages/Products";
import Modals from "../Components/Navbar/Modals";

const MainRoutes = () => {
  return (
    <>
      <Navbar />
      {/* <Products /> */}
      <Modals />
      <Routes>
        <Route path="signin" element={<SignIn />} />
        <Route path="createacc" element={<CreateAcc />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
