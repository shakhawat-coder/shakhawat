// src/sections/Skills.jsx
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaNpm,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiVite,
  SiPostman,
  SiMongodb,
  SiJquery,
  SiExpress,
  SiPrettier,
  SiGooglechrome,
} from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { DiVisualstudio } from "react-icons/di";
const Skills = () => {
  const skillGroups = [
    {
      title: " Frontend Development",
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3 / SCSS", icon: <FaCss3Alt className="text-blue-500" /> },
        {
          name: "JavaScript (ES6+)",
          icon: <FaJs className="text-yellow-400" />,
        },
        {
          name: "jQuery",
          icon: <SiJquery className="text-blue-600" />,
        },
        { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
        {
          name: "Bootstrap",
          icon: <FaBootstrap className="text-purple-600" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-sky-400" />,
        },
        {
          name: "Redux",
          icon: <SiRedux className="text-purple-500" />,
        },
      ],
    },
    {
      title: " Backend / API Basics",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        {
          name: "Express.js",
          icon: <SiExpress className="text-gray-800 dark:text-white" />,
        },
        {
          name: "REST API Integration",
          icon: <SiPostman className="text-orange-500" />,
        },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      ],
    },
    {
      title: " Tools & Workflow",
      skills: [
        {
          name: "Git & GitHub",
          icon: <FaGitAlt className="text-orange-600" />,
        },
        {
          name: "VS Code",
          icon: <DiVisualstudio className="text-blue-500" />,
        },
        { name: "npm", icon: <FaNpm className="text-red-500" /> },
        { name: "Vite", icon: <SiVite className="text-purple-500" /> },
        { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
        {
          name: "Chrome DevTools",
          icon: <SiGooglechrome className="text-yellow-500" />,
        },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "Prettier", icon: <SiPrettier className="text-pink-600" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center  text-gray-800 dark:text-gray-200 px-6 py-16 transition-colors duration-500  bg-[linear-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0.7)),url('/skillbg2.jpg')] dark:bg-[linear-gradient(rgba(0,0,0,0.85),rgba(0,0,0,0.85)),url('/skillbg2.jpg')] bg-cover bg-center text-center "
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-600 dark:text-blue-400">
          My Skills
        </h2>
        <div className="space-y-16">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
                {group.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center justify-center p-4 bg-white dark:bg-[#161B22] rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="text-4xl mb-2 transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
