import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen 
  py-20 sm:py-24 text-center px-4 sm:px-8 md:px-12 
  bg-[linear-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0.7)),url('/bannerbg2.jpg')] 
  dark:bg-[linear-gradient(rgba(0,0,0,0.85),rgba(0,0,0,0.85)),url('/bannerbg2.jpg')] 
  bg-cover bg-center bg-no-repeat transition-colors duration-300"
    >
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">
        Hi! I'm{" "}
        <span className="text-blue-600 dark:text-blue-400">Shakhawat</span>
      </h1>
      <div className="text-2xl sm:text-3xl md:text-4xl text-gray-700 dark:text-gray-300 mt-4 font-medium">
        <TypeAnimation
          sequence={[
            "Frontend Developer",
            2500,
            "Professional Coder",
            2500,
            "React Developer",
            2500,
            "Tailwind CSS Specialist",
            2500,
            "Creative Coder",
            2500,
          ]}
          speed={50}
          repeat={Infinity}
          className="inline-block text-blue-600 dark:text-blue-400"
        />
      </div>
      <TypeAnimation
        splitter={(str) => str.split(/(?= )/)}
        sequence={[
          "A passionate frontend developer creating responsive, accessible, and visually refined web interfaces. Focused on building seamless digital experiences with React, Tailwind CSS, and modern JavaScript. Blending creativity and functionality to craft user-focused designs that perform beautifully across all devices and leave a lasting impression.",
          5000,
        ]}
        speed={{ type: "keyStrokeDelayInMs", value: 80 }}
        omitDeletionAnimation={true}
        style={{
          display: "block",
          marginTop: "1.5rem",
          maxWidth: "750px",
        }}
        className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mx-auto px-4"
        repeat={0}
        cursor={false}
      />
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <Link to="mywork" smooth duration={500} offset={-80}>
          <button className="px-6 py-3 text-sm sm:text-base font-medium bg-blue-600 text-white rounded-md border border-transparent dark:bg-transparent dark:border dark:border-white dark:text-white hover:bg-transparent hover:text-blue-600 hover:border-blue-600 dark:hover:text-blue-400 transition-all duration-300">
            View My Work
          </button>
        </Link>

        <Link to="contact" smooth duration={500} offset={-80}>
          <button className="px-6 py-3 text-sm sm:text-base font-medium border border-gray-800 dark:border-transparent dark:bg-blue-600 dark:text-white rounded-md hover:border-blue-600 hover:text-blue-600 dark:hover:bg-transparent dark:hover:text-blue-400 transition-all duration-300">
            Contact Me
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
