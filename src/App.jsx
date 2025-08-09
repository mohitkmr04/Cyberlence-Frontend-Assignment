import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

// ✅ Lazy-loaded components
const Dashboard = lazy(() => import("./components/Dashboard"));
const Courses = lazy(() => import("./components/Courses"));
const CGPA = lazy(() => import("./components/CGPA"));
const Assignments = lazy(() => import("./components/Assignments"));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleLogin = () => setIsLoggedIn((prev) => !prev);

  return (
    <Router>
      <div className="flex">
        <Sidebar
          isLoggedIn={isLoggedIn}
          toggleLogin={toggleLogin}
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
        />

        {/* Main Content */}
        <div
          className={`flex-1 transition-all duration-300 ${
            sidebarOpen ? "ml-64" : "ml-20"
          }`}
        >
          <Navbar isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />

          <div className="p-6">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/cgpa" element={<CGPA />} />
                <Route path="/assignments" element={<Assignments />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
