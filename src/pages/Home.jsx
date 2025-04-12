import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Console from "../components/Console";
import Games from "../components/Games";
import Rooms from "../components/Room";
import Pricelist from "../components/Pricelist";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Console />
      <Games />
      <Rooms />
      <Pricelist />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
