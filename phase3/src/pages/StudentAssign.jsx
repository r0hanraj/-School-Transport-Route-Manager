import { useState } from "react";
import Navbar from "../components/Navbar";

function StudentAssign() {
  const [student, setStudent] = useState("");
  const [bus, setBus] = useState("");

  const [students, setStudents] = useState([]);

  const assignStudent = () => {
    setStudents([
      ...students,
      {
        student,
        bus,
      },
    ]);

    setStudent("");
    setBus("");
  };

  return (
    <>
      <Navbar />

      <div 
  style={{
    padding: "20px",
    marginTop: "80px"
  }}
>
        <h1>Student Assignment</h1>

        <input
          placeholder="Student Name"
          value={student}
          onChange={(e) => setStudent(e.target.value)}
        />

        <br /><br />

        <input
          placeholder="Bus Number"
          value={bus}
          onChange={(e) => setBus(e.target.value)}
        />

        <br /><br />

        <button onClick={assignStudent}>
          Assign Student
        </button>

        <h2>Assigned Students</h2>

        <table border="1" width="100%">
          <thead>
            <tr>
              <th>Student</th>
              <th>Bus Number</th>
            </tr>
          </thead>

          <tbody>
            {students.map((item, index) => (
              <tr key={index}>
                <td>{item.student}</td>
                <td>{item.bus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentAssign;