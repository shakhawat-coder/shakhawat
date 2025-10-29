import React from "react";

const educaion = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Delta Compute Science College",
    location: "Rangpur, Bangladesh.",
    session: "2016 -2017",
    passingYear: "2022",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Bhurungamari Degree College",
    location: "Bhurungamari, Kurigram.",
    session: "2014 - 2015",
    passingYear: "2016",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Uttar Dhaldanga High School",
    location: "Bhurungamari, Kurigram.",
    session: "2012 - 2013",
    passingYear: "2014",
  },
];
const Education = () => {
  return (
    <>
      <section
        id="education"
        className="flex flex-col justify-center items-center bg-gray-50 dark:bg-[#0D1117] text-gray-800 dark:text-gray-200 px-6 py-16 transition-colors duration-500"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-600 dark:text-blue-400 text-center">
            My Education
          </h2>
          <div className="grid grid-cols-3 ">
            {educaion.map((edu, index) => (
              <div key={index} className="mb-10 ml-6">
                <div className="col-span-1 border border-gray-300 dark:border-gray-600 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-[#161B22]">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-md font-medium text-blue-600 dark:text-blue-400">
                    {edu.institution + ", " + edu.location}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Session : {edu.session}
                  </p>
                  <p className="text-sm text-gray-500">
                    Passing Year : {edu.passingYear}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
