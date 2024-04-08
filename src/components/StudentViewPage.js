import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Header from "./Header";

const StudentViewPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("access_token") !== null);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/student/student");
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <div style={{ maxWidth: '800px', margin: 'auto', marginTop: '25px' }}>
        <h1>All Students</h1>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentViewPage;
