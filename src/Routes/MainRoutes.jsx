import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateAcc from "../Components/Navbar/CreateAcc";
import Navbar from "../Components/Navbar/Navbar";
import SignIn from "../Components/Navbar/SignIn";

const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="signin" element={<SignIn />} />
        <Route path="createacc" element={<CreateAcc />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
