import React, { useEffect } from "react";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    window.location.href = "https://arwnchrstn-v2.onrender.com";
  }, []);

  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
