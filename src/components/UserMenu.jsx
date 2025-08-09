import React, { useState } from "react";
import { FiUser, FiLogOut, FiLogIn, FiEdit, FiKey } from "react-icons/fi";

const UserMenu = ({ isLoggedIn, toggleLogin }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-gray-900 text-white rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        <FiUser size={20} />
        <span className="hidden sm:block">Profile</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50">
          <ul className="divide-y divide-gray-200">
            <li>
              <button className="flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-gray-100">
                <FiKey className="text-blue-500" /> Change Password
              </button>
            </li>
            <li>
              <button className="flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-gray-100">
                <FiEdit className="text-green-500" /> Edit Personal Data
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  toggleLogin();
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-3 w-full text-left ${
                  isLoggedIn
                    ? "text-red-600 hover:bg-red-50"
                    : "text-green-600 hover:bg-green-50"
                }`}
              >
                {isLoggedIn ? (
                  <>
                    <FiLogOut /> Logout
                  </>
                ) : (
                  <>
                    <FiLogIn /> Login
                  </>
                )}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
