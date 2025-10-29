import React from "react";
import { TypeAnimation } from "react-type-animation";
import bannerBg from "/bannerbg.jpg";
import { Link } from "react-scroll";
const Bannar = () => {
  return (
    <>
      <div
        id="home"
        className="max-w-960 mx-auto flex flex-col items-center justify-center h-screen bg-[linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.6)),url('/bannerbg2.jpg')] dark:bg-[linear-gradient(rgba(0,0,0,0.85),rgba(0,0,0,0.85)),url('/bannerbg2.jpg')] bg-cover bg-center text-center px-4"
      >
        <h1 className="text-4xl md:text-7xl font-bold">
          Hi! I'm{" "}
          <span className="text-blue-600 dark:text-blue-400">Shakhawat</span>
        </h1>
        <span className="text-4xl ">a</span>

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
          style={{
            display: "block",
            marginTop: "10px",
            maxWidth: "600px",
          }}
          className="text-5xl  font-medium text-gray-700 dark:text-gray-300 mt-2"
        ></TypeAnimation>

        <TypeAnimation
          splitter={(str) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
          sequence={[
            "A passionate frontend developer creating responsive, accessible, and visually refined web interfaces. Focused on building seamless digital experiences with React, Tailwind CSS, and modern JavaScript. Blending creativity and functionality to craft user-focused designs that perform beautifully across all devices and leave a lasting impression.",
            5000,
          ]}
          speed={{ type: "keyStrokeDelayInMs", value: 150 }}
          omitDeletionAnimation={true}
          style={{
            fontSize: "1em",
            display: "block",
            marginTop: "1em",
            maxWidth: "700px",
          }}
          repeat={0}
          cursor={false}
        />
        {/* ===============action button ============== */}
        <div className="flex gap-5 mt-8">
          <Link to="mywork" smooth={true} duration={500} offset={-80}>
            <button className="px-6 py-3 font-medium bg-blue-600 dark:bg-transparent border border-transparent dark:border dark:border-white text-white rounded-md hover:bg-transparent hover:text-blue-600 hover:border hover:border-blue-600 transition-colors">
              View My Work
            </button>
          </Link>
          <Link to="contact" smooth={true} duration={500} offset={-80}>
            <button className="px-6 py-3 font-medium border border-black dark:bg-blue-600 dark:text-white rounded-md hover:border-blue-600 dark:border-transparent hover:text-blue-600 dark:hover:bg-transparent dark:hover:text-blue-600  transition-colors">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Bannar;
