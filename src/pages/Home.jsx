import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../sections/Projects";
import Engineering from "../sections/Engineering";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Engineering />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;
