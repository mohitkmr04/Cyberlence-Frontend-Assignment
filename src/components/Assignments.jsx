import React, { useState } from "react";

const Assignments = () => {
  const [courseFilter, setCourseFilter] = useState("");
  const [assignmentFilter, setAssignmentFilter] = useState("");

  const assignmentsData = [
    { courseId: "CS201", assignmentId: "A1", status: "Ongoing" },
    { courseId: "CS202", assignmentId: "A2", status: "Completed" },
    { courseId: "CS203", assignmentId: "A3", status: "Ongoing" },
  ];

  const filteredAssignments = assignmentsData.filter(
    (a) =>
      a.courseId.toLowerCase().includes(courseFilter.toLowerCase()) &&
      a.assignmentId.toLowerCase().includes(assignmentFilter.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-xl">
      <h2 className="text-lg font-bold mb-4 bg-gradient-to-r from-green-500 to-blue-500 text-white p-3 rounded-lg shadow">
        Assignments
      </h2>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <input
          value={courseFilter}
          onChange={(e) => setCourseFilter(e.target.value)}
          placeholder="Search by Course ID"
          className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none w-full sm:w-1/2"
        />
        <input
          value={assignmentFilter}
          onChange={(e) => setAssignmentFilter(e.target.value)}
          placeholder="Filter by Assignment ID"
          className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none w-full sm:w-1/2"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              {["Course ID", "Assignment ID", "Status"].map((h) => (
                <th
                  key={h}
                  className="px-4 py-2 text-left font-semibold text-gray-700 border-b"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredAssignments.length > 0 ? (
              filteredAssignments.map((a, index) => (
                <tr
                  key={index}
                  className={`hover:bg-gray-50 transition ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="px-4 py-2 border-b">{a.courseId}</td>
                  <td className="px-4 py-2 border-b">{a.assignmentId}</td>
                  <td
                    className={`px-4 py-2 border-b font-medium ${
                      a.status === "Completed"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {a.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="text-center p-4 text-gray-500 bg-gray-50"
                >
                  No matching assignments
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Assignments;
