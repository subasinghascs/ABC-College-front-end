import React from "react";
import { useHistory } from "react-router-dom";
import "./header.css"; // Import CSS file

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const history = useHistory(); // Initialize useHistory hook

  const handleLogout = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/admin/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        localStorage.removeItem("access_token"); // Clear access token from local storage
        setIsLoggedIn(false); // Update isLoggedIn state
        history.push("/"); // Redirect to "/" route after logout
      } else {
        console.error('Logout failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="header">
      <span className="title">Student Management System</span>
      {isLoggedIn && ( // Render logout button only if user is logged in
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
