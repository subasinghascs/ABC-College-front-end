import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const StudentDetailsPage = () => {
  const [studentId, setStudentId] = useState("");
  const [student, setStudent] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/student/student/${studentId}`);
      const data = await response.json();
      if (response.ok) {
        setStudent(data);
        setError(null);
      } else {
        setStudent(null);
        setError(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred, please try again.");
    }
  };

  return (
    <div>
      <h2>Student Details</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter Student ID:</label>
        <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {student && (
        <div>
          <h3>Student Profile:</h3>
          <p>ID: {student.id}</p>
          <p>Name: {student.name}</p>
          <p>Email: {student.email}</p>
        </div>
      )}
    </div>
  );
};

export default StudentDetailsPage;
