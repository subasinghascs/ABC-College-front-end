import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import '../styles/loginStyles.css';


function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:5000/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('access_token', data.access_token); // Store token in localStorage
                history.push('/home'); // Redirect to home page after successful login
            } else {
                setError(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred, please try again.');
        }
    };

    return (
        <div id="loginform">
            <h2 id="headerTitle">Login</h2>
            <div className="error-container">
                {error && <p className="error">{error}</p>}
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" />
                </div>
                <div className="row">
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                </div>
                <div id="button" className="row">
                    <button type="submit">Login</button>
                </div>
            </form>
            <div id="alternativeLogin">
                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </div>
        </div>
    );
}

export default LoginForm;