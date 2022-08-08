import React, { lazy, Suspense } from "react";
import Loading from "./utils/Loading";
// import Navbar from './components/Navbar/Navbar';

import "./App.css";
const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Portfolio = lazy(() => import("./components/Portfolio/Portfolio"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));

const renderLoader = () => <Loading />;

function App() {
  return (
    <div>
      <Suspense fallback={renderLoader()}>
        <Home />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
