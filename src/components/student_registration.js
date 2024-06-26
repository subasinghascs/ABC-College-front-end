import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import '../styles/loginStyles.css';

function StudentRegistration() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: ''
    });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { name, email, street, city, state, zipcode } = formData;
            const studentData = {
                name,
                email,
                addresses: [
                    {
                        street,
                        city,
                        state,
                        zipcode
                    }
                ]
            };

            const response = await fetch('http://127.0.0.1:5000/api/student/student', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(studentData),
            });
            const data = await response.json();
            if (response.ok) {
                setError('');
                setSuccessMessage('Student registration successful!');
                setTimeout(() => {
                    setSuccessMessage('');
                    history.push('/home'); // Redirect to home page after successful student creation
                }, 3000); // Clear success message and redirect after 3 seconds
            } else {
                setError(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred, please try again.');
        }
    };

    return (
        <div id="studentRegistrationForm">
            <h2 id="headerTitle">Student Registration</h2>
            <div className="error-container">
                {error && <p className="error">{error}</p>}
                {successMessage && <p className="success">{successMessage}</p>}
            </div>

           
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter student name" />
                </div>
                <div className="row">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter student email" />
                </div>
                <div className="row">
                    <label>Street:</label>
                    <input type="text" name="street" value={formData.street} onChange={handleChange} placeholder="Enter street" />
                </div>
                <div className="row">
                    <label>City:</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Enter city" />
                </div>
                <div className="row">
                    <label>State:</label>
                    <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="Enter state" />
                </div>
                <div className="row">
                    <label>Zipcode:</label>
                    <input type="text" name="zipcode" value={formData.zipcode} onChange={handleChange} placeholder="Enter zipcode" />
                </div>
                <div id="button" className="row">
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}

export default StudentRegistration;
