import { useState } from "react";
import "./App.css";
import StudentCard from "./components/studentCard";
import TextAnalyzer from "./components/textanalyzer";

function App() {
  const [showAnalyzer, setShowAnalyzer] = useState(false);
  const [showStudents, setShowStudents] = useState(true);

  const students = [
    {
      name: "Arpita",
      course: "BCA",
      email: "arpita@gmail.com",
      semester: 4,
    },
    {
      name: "Harsh",
      course: "BBA",
      email: "harsh@gmail.com",
      semester: 3,
    },
    {
      name: "Nitin",
      course: "MSc.IT",
      email: "nit@gmail.com",
      semester: 2,
    },
    {
      name: "Khushi",
      course: "MCA",
      email: "khushi@gmail.com",
      semester: 4,
    },
    {
      name: "Sonu",
      course: "PhD",
      email: "sonu@gmail.com",
      semester: 5,
    },
    {
      name: "Mihir",
      course: "MCA",
      email: "mihir@gmail.com",
      semester: 4,
    },
  ];

  return (
    <div className="page">
      <div className="container">

        <h1>
          Student
          <br />
          Profile
        </h1>

        {/* Text Analyzer Button */}
        <button
          className="analyse-btn"
          onClick={() => setShowAnalyzer(!showAnalyzer)}
        >
          Text Analyser
        </button>

        {showAnalyzer && <TextAnalyzer />}

        {/* Student Information Show/Hide Button */}
        <button
          className="analyse-btn"
          onClick={() => setShowStudents(!showStudents)}
        >
          {showStudents
            ? "Hide Student Information"
            : "Show Student Information"}
        </button>

        {/* Student Information */}
        {showStudents && (
          <div className="student-list">
            {students.map((student, index) => (
              <StudentCard
                key={index}
                name={student.name}
                course={student.course}
                email={student.email}
                semester={student.semester}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
