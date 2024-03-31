import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import StudentRegistration from './components/student_registration'; // Correct import for SideBar component

function App() {
    return (
        <Router>
            {/* <SideBar /> Place the SideBar component inside the Router */}
            <Switch>
                <Route exact path="/home" component={HomePage} />
                <Route path="/signup" component={SignUpPage} />
                <Route path="/" component={LoginPage} /> 
                <Route path="/addStudent" component={StudentRegistration} /> 
            </Switch>
        </Router>
    );
}

export default App;
