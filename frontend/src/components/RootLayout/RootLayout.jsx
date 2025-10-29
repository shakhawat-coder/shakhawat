import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const RootLayout = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900/80 dark:text-white">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
