import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../sections/Projects";
import Engineering from "../sections/Engineering";
import Skills from "../sections/Skills";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

function Home() {
  return (
    <>
      <SEO 
        title="Ian Kimani | Software Engineer" 
        description="Ian Kimani is a software engineer focused on backend systems, APIs, databases, SaaS platforms, and practical software." 
        url="https://iankimani.me/"
      />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Engineering />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;
