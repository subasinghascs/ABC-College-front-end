import React from 'react';
import { Link } from 'react-router-dom';

const NavigationButtons = () => {
  return (
    <div>
      <span className="content-item">
        <Link to="/home">Home</Link>
      </span>
      <span className="content-item">
        <Link to="/about">About</Link>
      </span>
      <span className="content-item">
        <Link to="/services">Services</Link>
      </span>
      <span className="content-item">
        <Link to="/contact">Contact</Link>
      </span>
    </div>
  );
};

export default NavigationButtons;
