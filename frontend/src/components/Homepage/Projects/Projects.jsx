import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce",
      description:
        "A full-featured e-commerce website built with Bootstrap. Features include product listings, shopping cart, and user dashboard.",
      image: "/ecommerce.png",
      link: "https://optilius-ecom.vercel.app/",
    },
    {
      title: "News Portal",
      description:
        "A news portal built with Bootstrap. Features include news categories and live updates.",
      image: "/newspaper.png",
      link: "https://newspaper-sable.vercel.app/",
    },
    {
      title: "Real Estate Platform",
      description:
        "A responsive real estate listing platform using Bootstrap. ",
      image: "/real-estate.png",
      link: "https://real-estate-drab-xi.vercel.app/",
    },
    {
      title: "Multi-Service",
      description:
        "A multi-service platform offering various services with a clean UI built using Bootstrap.Features include service listings,service search,service details and user reviews.",
      image: "/multi-service.png",
      link: "https://multi-service-livid.vercel.app/",
    },
    {
      title: "Student & Parent Management System",
      description:
        "A comprehensive student and parent management system built with Bootstrap. Features include student profiles, parent communication, and academic tracking.",
      image: "/student-panel.png",
      link: "https://school-management-tau-bice.vercel.app/",
    },
    {
      title: "Gym",
      description:
        "A modern gym website built with Bootstrap. Features include class schedules, and membership plans.",
      image: "/gym.png",
      link: "https://optigym-dusky.vercel.app/",
    },
  ];
  return (
    <section
      id="mywork"
      className="flex flex-col justify-center items-center bg-gray-50 dark:bg-[#0D1117] text-gray-800 dark:text-gray-200 px-6 py-16 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-600 dark:text-blue-400">
          Some of My Works
        </h2>

        {/* Project Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block bg-white dark:bg-[#161B22] rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="overflow-hidden h-64 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-top object-cover transition-transform duration-[6s] ease-linear group-hover:-translate-y-[calc(100%-16rem)]"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
