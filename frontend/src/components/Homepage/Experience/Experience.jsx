import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
const experiences = [
  {
    role: "Junior Frontend Developer",
    company: "Optilius",
    location: "Dhaka, Bangladesh",
    period: "April 2025 - Present",
    description:
      "Working as a Junior Frontend Developer, crafting responsive and performant web interfaces using HTML, CSS , Bootstrap, and modern JavaScript. Collaborating with backend teams to deliver seamless digital experiences.",
    link: "https://optilius.com",
  },
  {
    role: "Frontend Design Intern",
    company: "Optilius",
    location: "Dhaka, Bangladesh",
    period: "October 2024 - March 2025",
    description:
      "Completed a 6-month internship focused on frontend design. Worked closely with mentors to convert Figma designs into clean, maintainable code using HTML, CSS, Bootstrap, and JavaScript.",
    link: "https://optilius.com",
  },
];
const Experience = () => {
  return (
    <>
      <section
        id="experience"
        className="flex flex-col justify-center items-center bg-[linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9)),url('/bannerbg2.jpg')] dark:bg-[linear-gradient(rgba(0,0,0,0.95),rgba(0,0,0,0.95)),url('/bannerbg2.jpg')] bg-cover bg-center min-h-screen bg-[#f9f9f9] dark:bg-[#050505] text-gray-800 dark:text-gray-200 px-6 py-16 transition-colors duration-500"
      >
        <div className="w-full sm:max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 dark:text-gray-400 text-center">
            My Experience
          </h2>
          <div className=" relative after:absolute after:top-0 after:left-1/2 sm:after:w-0.5 after:h-full after:bg-gray-400  after:dark:bg-blue-400 ">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="border sm:border-0 sm:p-0 border-gray-300 dark:border-gray-600 p-3 rounded-xl mb-5 sm:mb-10 sm:ml-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-15">
                  <div className="col-span-1 sm:text-right">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {exp.period}
                    </p>
                  </div>

                  <div className="col-span-1 ">
                    <span className="absolute left-[calc(50%-9px)] flex items-center justify-center sm:w-5 h-5 bg-blue-600 dark:bg-blue-400 rounded-full z-50 dark:ring-[#0D1117]" />
                    <h4 className="text-md font-medium text-blue-600 dark:text-blue-400">
                      {exp.company}{" "}
                    </h4>
                    <p className="text-sm text-gray-500">{exp.location}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Experience;
