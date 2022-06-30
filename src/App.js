import React from "react";
// import Navbar from './components/Navbar/Navbar';

import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
