import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4"
        />
        <button
          onClick={onLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
