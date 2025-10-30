import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#0D1117] text-gray-800 dark:text-gray-200 py-6 border-t border-gray-300 dark:border-gray-700 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Shakhawat Hossen. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
