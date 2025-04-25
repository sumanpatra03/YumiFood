import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Singup from "../Pages/Singup/Singup";
import Login from "../Pages/Login/Login";
// import Header from "../Components/Header";
import AboutUs from "../Pages/About/AboutUs";
import Home from "../Pages/Home/Home";
// import Footer from "../Components/Footer";
import OurFood from "../Pages/OurFood/OurFood";

const Routing = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Singup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Ourfood" element={<OurFood />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Routing;
