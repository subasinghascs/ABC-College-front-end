import React, { useState } from 'react';
import { useHistory , Link } from 'react-router-dom'; // Import useHistory hook
import '../styles/loginStyles.css';

function SignUpPage() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        reEnterPassword: ''
    });
    const [error, setError] = useState('');
    const history = useHistory(); // Initialize useHistory hook

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.reEnterPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            const response = await fetch('http://127.0.0.1:5000/api/admin/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first_name: formData.first_name,
                    last_name: formData.last_name,
                    username: formData.username,
                    password: formData.password
                }),
            });
            const data = await response.json();
            if (response.ok) {
                setError('');
                history.push('/'); // Redirect to '/' route after successful sign-up
            } else {
                setError(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred, please try again.');
        }
    };

    return (
        <div id="signupform">
            <h2 id="headerTitle">Sign Up</h2>
            {error && <div className="error-container"><p className="error">{error}</p></div>}
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label>First Name:</label>
                    <input type="text" name="first_name" value={formData.first_name} onChange={handleChange}  placeholder="Enter your First Name" />
                </div>
                <div className="row">
                    <label>Last Name:</label>
                    <input type="text" name="last_name" value={formData.last_name} onChange={handleChange}  placeholder="Enter your Last Name" />
                </div>
                <div className="row">
                    <label>Username:</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange}  placeholder="Enter your Username"  />
                </div>
                <div className="row">
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange}  placeholder="Enter your Password" />
                </div>
                <div className="row">
                    <label>Re-enter Password:</label>
                    <input type="password" name="reEnterPassword" value={formData.reEnterPassword} onChange={handleChange} placeholder="Re-enter your Password"  />
                </div>
                <div id="button" className="row">
                    <button type="submit">Sign Up</button>
                </div>
                <div id="alternativeLogin">
                <p>Don you have an account? <Link to="/">Login</Link></p>
            </div>
            </form>
        </div>
    );
}

export default SignUpPage;
