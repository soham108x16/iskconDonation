import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Causes from "./components/Causes";
import CorporatePartners from "./components/CorporatePartners";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Causes />
      <CorporatePartners />
      <Footer />
    </div>
  );
}

export default App;
