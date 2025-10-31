import React, { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdNightlight } from "react-icons/md";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "mywork" },
    { name: "Experience", to: "experience" },
    { name: "Education", to: "education" },
    { name: "Contact", to: "contact" },
  ];

  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    theme === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-[#0D1117]/70 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white cursor-pointer">
            S.
          </h1>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-65}
                spy={true}
                activeClass="!text-blue-600 dark:!text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400"
                className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 py-1"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <MdNightlight className="h-5 w-5 text-gray-700 dark:text-gray-300 -rotate-45" />
              ) : (
                <CiLight className="h-5 w-5 text-yellow-400" />
              )}
            </button>
            <button
              className="md:hidden p-2 text-gray-700 dark:text-gray-300"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-white dark:bg-[#0D1117] border-t border-gray-200 dark:border-gray-700 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-65}
              spy={true}
              onClick={() => setIsMenuOpen(false)}
              activeClass="!text-blue-600 dark:!text-blue-400 font-semibold"
              className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
