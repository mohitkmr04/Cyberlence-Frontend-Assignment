import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
      {/* Personal Data */}
      <div className="bg-white shadow-lg rounded-xl p-6 flex-1 hover:shadow-xl transition">
        <h2 className="text-lg font-bold mb-4 border-b pb-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-3 rounded-lg shadow">
          Personal Data
        </h2>
        <div className="flex flex-col gap-6">
          {/* Top Box */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
            <p><span className="font-semibold text-gray-700">Name:</span> John Doe</p>
            <p><span className="font-semibold text-gray-700">ID:</span> STU12345</p>
            <p><span className="font-semibold text-gray-700">Phone Number:</span> +91 9876543210</p>
          </div>
          {/* Bottom Box */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
            <p><span className="font-semibold text-gray-700">Degree:</span> B.Tech</p>
            <p><span className="font-semibold text-gray-700">Discipline:</span> Computer Science</p>
            <p><span className="font-semibold text-gray-700">Join Date:</span> 12 Aug 2022</p>
          </div>
        </div>
      </div>

      {/* Guardian Data */}
      <div className="bg-white shadow-lg rounded-xl p-6 flex-1 hover:shadow-xl transition">
        <h2 className="text-lg font-bold mb-4 border-b pb-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-3 rounded-lg shadow">
          Guardian Data
        </h2>
        <div className="flex flex-col gap-6">
          {/* Top Box */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
            <p><span className="font-semibold text-gray-700">Email:</span> guardian@example.com</p>
            <p><span className="font-semibold text-gray-700">Phone Number:</span> +91 9123456789</p>
            <p><span className="font-semibold text-gray-700">Alternate Email:</span> altguardian@example.com</p>
            <p><span className="font-semibold text-gray-700">Address:</span> 123 Main St, City, State</p>
          </div>
          {/* Bottom Box */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
            <p><span className="font-semibold text-gray-700">Admin Notification:</span> No pending alerts</p>
            <p><span className="font-semibold text-gray-700">Fees Payment:</span> Completed</p>
            <p><span className="font-semibold text-gray-700">Last Date:</span> 20 Jan 2025</p>
            <p><span className="font-semibold text-gray-700">Upload Certificate:</span> Uploaded</p>
            <p><span className="font-semibold text-gray-700">Pending Status:</span> None</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
