import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import FormHeader from './FormHeader';
import FormInput from './FormInput';
import FormButton from './FormButton'; 
import { Link } from 'react-router-dom';
import '../styles/loginStyles.css';

function LoginForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const history = useHistory(); // Access to the history object

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:5000/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.status === 200) {
                const data = await response.json();
                localStorage.setItem('access_token', data.access_token);
                // Redirect to home page
                history.push('/home');
            } else {
                // Display error alert
                alert('Failed to log in. Please check your username and password.');
            }
        } catch (error) {
            console.error('Error:', error);
            // Display error alert
            alert('An error occurred. Please try again later.');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div id="loginform">
            <FormHeader title="Login" />
            <form onSubmit={handleSubmit}>
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
                <FormButton title="Log in" />
            </form>
            <div id="alternativeLogin">
                <label>Don't have an account?</label>
                <div >
                    <Link to="/signup">Sign up</Link>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
