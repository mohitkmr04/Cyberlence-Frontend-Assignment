import React from "react";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-left w-full hover:bg-gray-200 rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
