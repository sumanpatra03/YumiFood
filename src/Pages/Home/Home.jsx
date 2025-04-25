import React from "react";
import Hero from "../../Components/Hero";
import Delivary from "../../Components/Delivary";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import MarketingPage from "../../Components/MarketingPage";
import Gallery from "../../Components/Gallery";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#fff8e7", minHeight: "100vh" }}>
      <Header />
      <Hero />
      <Delivary />
      <MarketingPage />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
