import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Header from "./Header";
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText } from '@coreui/react';
import imagePath from '../components/images/grad-cap-diploma-and-stacked-books.jpg';
import imagePath1 from '../components/images/istockphoto-883657476-612x612.jpg';
import imagePath2 from '../components/images/istockphoto-979036114-612x612.jpg';
import imagePath3 from '../components/images/img1.jpg';
import imagePath4 from '../components/images/img2.jpg';
import imagePath5 from '../components/images/img3.jpg';
import '../styles/homeStyles.css';

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("access_token") !== null
  );

  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <div className="card-container">
        <CCard className="custom-card">
          <CCardImage orientation="top" src={imagePath} className="card-image" />
          <CCardBody>
            <CCardTitle>Student Registration</CCardTitle>
            <CCardText>
              Click here and add new student for ABC College
            </CCardText>
            <a className="custom-button" href="/addStudent">Register Student</a>
          </CCardBody>
        </CCard>
        <CCard className="custom-card">
          <CCardImage orientation="top" src={imagePath1} className="card-image" />
          <CCardBody>
            <CCardTitle>All student</CCardTitle>
            <CCardText>
              You can see all the student who registered to the ABC college.
            </CCardText>
            <a className="custom-button" href="/AllStudents">View all student</a>
          </CCardBody>
        </CCard>
        <CCard className="custom-card">
          <CCardImage orientation="top" src={imagePath2} className="card-image" />
          <CCardBody>
            <CCardTitle>Search Student by ID</CCardTitle>
            <CCardText>
              You can  Search student who is in ABC College using ID .
            </CCardText>
            <a className="custom-button" href="/StudentDetails">Search student by ID</a>
          </CCardBody>
        </CCard>
      </div>
      <div className="card-container">
        <CCard className="custom-card">
          <CCardImage orientation="top" src={imagePath3} className="card-image" />
          <CCardBody>
            <CCardTitle>Update a Student</CCardTitle>
            <CCardText>
              You are able to update a student who is alredy registered to ABC College.
            </CCardText>
            <a className="custom-button" href="/Studentsupdate">Update a Student</a>
          </CCardBody>
        </CCard>
        <CCard className="custom-card">
          <CCardImage orientation="top" src={imagePath4} className="card-image" />
          <CCardBody>
            <CCardTitle>Delete a Student</CCardTitle>
            <CCardText>
              You are able to delete a Student who is registered in ABC College.
            </CCardText>
            <a className="custom-button" href="/StudentDelete">Delete Student</a>
          </CCardBody>
        </CCard>
        <CCard className="custom-card">
          <CCardImage orientation="top" src={imagePath5} className="card-image" />
          <CCardBody>
            <CCardTitle>Removed Student</CCardTitle>
            <CCardText>
              You are able to view deleted student in ABC College.
            </CCardText>
            <a className="custom-button" href="#">Deleted Student</a>
          </CCardBody>
        </CCard>
      </div>
    </>
  );
};

export default HomePage;
