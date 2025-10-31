import React from "react";
import profilePic from "/shamim.png"; // replace with your image

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-[#0D1117] text-gray-800 dark:text-gray-200 px-6 py-16 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-5 lg:gap-20">
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-400">
            My Story
          </h2>

          <p className="text-gray-700 dark:text-gray-400 text-base leading-relaxed">
            I’m a results-driven frontend developer with over a year of hands-on
            experience — including 6 months as a{" "}
            <span className="font-medium text-blue-600 dark:text-blue-400">
              Frontend Design Intern
            </span>{" "}
            and 6+ months as a{" "}
            <span className="font-medium text-blue-600 dark:text-blue-400">
              Junior Frontend Developer
            </span>
            . My work centers on transforming creative ideas into functional,
            engaging digital interfaces.
          </p>

          <p className="my-4 text-gray-700 dark:text-gray-400 text-base leading-relaxed">
            I thrive on solving UI/UX challenges, ensuring every element serves
            both purpose and polish. I enjoy collaborating with teams, learning
            from real-world projects, and continuously exploring new front-end
            tools and performance optimization techniques.
          </p>

          <p className="text-gray-700 dark:text-gray-400 text-base leading-relaxed">
            My work bridges the gap between design and development, ensuring
            every interface feels intuitive, engaging, and technically solid. I
            enjoy collaborating with designers, exploring UI trends, and
            continuously learning to improve my craft.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="p-2 lg:p-5 bg-white dark:bg-[#161B22] rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                Experience
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                1+ year in frontend development — internship & junior roles.
              </p>
            </div>

            <div className="p-2 lg:p-5 bg-white dark:bg-[#161B22] rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                Work Style
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Collaborative, detail-oriented, and driven by clean design
                principles.
              </p>
            </div>

            <div className="p-2 lg:p-5 bg-white dark:bg-[#161B22] rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                Learning Focus
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Exploring Next.js, animation libraries, and advanced UI
                patterns.
              </p>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-48 sm:w-64 md:w-1/3 max-w-sm order-1 md:order-2">
          <div className="overflow-hidden rounded-2xl shadow-lg ring-4 ring-blue-500/20">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
