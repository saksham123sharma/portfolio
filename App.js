import { useEffect } from "react";
import Aos from "aos";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import About from "./components/UI/About";
import Hero from "./components/UI/Hero";
import Services from "./components/UI/Services";
import Portfolio from "./components/UI/Portfolio";
import Contact from "./components/UI/Contact";
import React from "react";

import Certifications from "./components/UI/Certifications";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
    <Header/>
    <main>
      <Hero/>
      <About/>
      <Services/>
     
      <Portfolio/>
      <Certifications/>
      
      <Contact/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
