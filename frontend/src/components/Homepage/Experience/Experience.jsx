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
        className="flex flex-col justify-center items-center bg-gray-50 dark:bg-[#0D1117] text-gray-800 dark:text-gray-200 px-6 py-16 transition-colors duration-500"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-600 dark:text-blue-400 text-center">
            My Experience
          </h2>
          <div className=" relative after:absolute after:top-0 after:left-1/2 after:w-0.5 after:h-full after:bg-gray-400  after:dark:bg-blue-400 ">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-10 ml-6">
                <div className="grid grid-cols-2 gap-15">
                  <div className="col-span-1 text-right">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {exp.period}
                    </p>
                  </div>

                  <div className="col-span-1 ">
                    <span className="absolute left-[calc(50%-9px)] flex items-center justify-center w-5 h-5 bg-blue-600 dark:bg-blue-400 rounded-full z-50 dark:ring-[#0D1117]" />
                    <h4 className="text-md font-medium text-blue-600 dark:text-blue-400">
                      {exp.company}{" "}
                    </h4>
                    <p className="text-sm text-gray-500">{exp.location}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
                {/* Timeline dot */}
                {/* <span className="absolute -left-9 flex items-center justify-center w-6 h-6 bg-blue-600 dark:bg-blue-400 rounded-full ring-4 ring-gray-50 dark:ring-[#0D1117]" /> */}

                {/* Content */}
                {/* <div className="bg-white dark:bg-[#161B22] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
                      {exp.period}
                    </p>
                  </div>
                  <h4 className="text-md font-medium text-blue-600 dark:text-blue-400 mt-1">
                    {exp.company}{" "}
                    <span className="text-gray-500">| {exp.location}</span>
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                    {exp.description}
                  </p>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 mt-3 hover:underline"
                  >
                    Visit Website <FaExternalLinkAlt className="h-3 w-3" />
                  </a>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Experience;
