import React from "react";
import { useLocation } from "react-router-dom";
import UserMenu from "./UserMenu"; // ✅ Your dropdown component

const Navbar = ({ isLoggedIn, toggleLogin }) => {
  const location = useLocation();

  // Map paths to page titles
  const pageTitles = {
    "/dashboard": "Dashboard",
    "/courses": "Courses",
    "/cgpa": "CGPA",
    "/assignments": "Assignments",
  };

  const currentTitle = pageTitles[location.pathname] || "Home";

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Breadcrumb */}
      <div className="text-lg font-semibold">
        Home / {currentTitle}
      </div>

      {/* ✅ Keep your dropdown */}
      <UserMenu isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
    </nav>
  );
};

export default Navbar;
