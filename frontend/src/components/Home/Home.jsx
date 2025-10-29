import React from "react";
import Bannar from "../Homepage/Bannar/Bannar";
import About from "../Homepage/About/About";
import Skills from "../Homepage/Skills/Skills";
import Projects from "../Homepage/Projects/Projects";
import Experience from "../Homepage/Experience/Experience";
import Education from "../Homepage/Education/Education";
import Contact from "../Homepage/Contact/Contact";

const Home = () => {
  return (
    <>
      <Bannar />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </>
  );
};

export default Home;
