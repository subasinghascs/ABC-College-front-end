import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import StudentRegistration from "./components/student_registration"; 
import StudentDetailsPage from "./components/StudentDetailsPage" 
import StudentViewPage from "./components/StudentViewPage"  
import UpdateStudent from "./components/StudentUpdate"
import DeleteStudent from "./components/deleteStudent"
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  

  return (
    <Router>
     
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <PrivateRoute path="/addStudent" component={StudentRegistration} />
        <PrivateRoute exact path="/home" component={HomePage} />
        <PrivateRoute exact path="/StudentDetails" component={StudentDetailsPage} />
        <PrivateRoute exact path="/AllStudents" component={StudentViewPage} />
        <PrivateRoute exact path="/Studentsupdate" component={UpdateStudent} />
        <PrivateRoute exact path="/StudentDelete" component={DeleteStudent} />
      </Switch>
    </Router>
  );
}

export default App;
