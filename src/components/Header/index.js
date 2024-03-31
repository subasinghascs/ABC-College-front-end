import React from "react";
import { Link } from "react-router-dom";
import "./header.css"; // Import CSS file

const Header = () => {
  const handleLogout = () => {
    // Clear user session or token from local storage
    localStorage.removeItem('access_token');

    // Redirect to login page
    window.location.href = "/";
  };

  return (
    <div className="header">
      <span className="title">Student Management System</span>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default Header;
