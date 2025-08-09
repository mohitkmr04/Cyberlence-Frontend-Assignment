import React from "react";
import { FiMenu } from "react-icons/fi";
import { MdDashboard, MdBook, MdCalculate, MdAssignment } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isLoggedIn, toggleLogin, isOpen, setIsOpen }) => {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", icon: <MdDashboard />, path: "/dashboard" },
    { name: "Courses", icon: <MdBook />, path: "/courses" },
    { name: "CGPA", icon: <MdCalculate />, path: "/cgpa" },
    { name: "Assignments", icon: <MdAssignment />, path: "/assignments" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-gray-900/80 backdrop-blur-lg text-white shadow-xl border-r border-gray-700/40 transition-all duration-300 z-40 flex flex-col
      ${isOpen ? "w-64" : "w-20"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-600/50">
        {isOpen && (
          <h2 className="text-xl font-extrabold tracking-wider whitespace-nowrap">
            Student Portal
          </h2>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
        >
          <FiMenu size={22} />
        </button>
      </div>

      {/* Nav Items */}
      <ul className="space-y-3 flex-1 p-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-300 w-full
              ${
                location.pathname === item.path
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/40 text-white"
                  : "hover:bg-gray-700/60 hover:shadow-md text-gray-300"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {isOpen && <span className="text-md font-medium">{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>

      {/* Footer - Login/Logout */}
      <div className="p-4 border-t border-gray-600/40">
        <button
          onClick={toggleLogin}
          className={`w-full px-4 py-2 rounded-lg font-medium transition-colors ${
            isLoggedIn
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "bg-green-500 hover:bg-green-600 text-white"
          }`}
        >
          {isOpen ? (isLoggedIn ? "Logout" : "Login") : <span className="text-lg">⏻</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
