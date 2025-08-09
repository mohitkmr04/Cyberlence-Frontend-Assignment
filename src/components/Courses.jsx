const Courses = () => (
  <div className="p-6 max-w-7xl mx-auto bg-white shadow-lg rounded-xl">
    <h2 className="text-lg font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-lg shadow">
      Courses
    </h2>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            {["Course Name", "Course ID", "Credit Units", "Student Grade", "Grade Points"].map((h) => (
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
          {[
            ["Data Structures", "CS201", "4", "A", "9"],
            ["Mathematics", "CS202", "4", "A", "10"],
          ].map((row, idx) => (
            <tr
              key={idx}
              className={`hover:bg-gray-50 transition ${
                idx % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              {row.map((cell, i) => (
                <td key={i} className="px-4 py-2 border-b text-gray-600">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Courses;
