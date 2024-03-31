import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FormHeader from './FormHeader';
import FormInput from './FormInput';
import FormButton from './FormButton'; 
import '../styles/loginStyles.css';

function SignUpPage() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        confirmPassword: ''
    });
    const history = useHistory(); // Access to the history object

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            console.error('Passwords do not match');
            return; // Stop submission if passwords don't match
        }
        try {
            const response = await fetch('http://127.0.0.1:5000/api/admin/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                console.log('User signed up successfully');
                history.push('/'); // Redirect to login page on successful signup
            } else {
                console.error('Failed to sign up:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div id="loginform">
            <FormHeader title="Sign Up" />
            <form onSubmit={handleSubmit}>
                <FormInput
                    description="First Name"
                    placeholder="Enter your first name"
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                />
                <FormInput
                    description="Last Name"
                    placeholder="Enter your last name"
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                />
                <FormInput
                    description="Username"
                    placeholder="Enter your username"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <FormInput
                    description="Password"
                    placeholder="Enter your password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <FormInput
                    description="Confirm Password"
                    placeholder="Re-enter your password"
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                <FormButton title="Sign up" />
            </form>
        </div>
    );
}

export default SignUpPage;
