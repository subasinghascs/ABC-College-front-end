import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/loginStyles.css';

function DeleteStudent() {
    const [studentId, setStudentId] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const history = useHistory();

    const handleChange = (e) => {
        const { value } = e.target;
        setStudentId(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://127.0.0.1:5000/api/student/student/${studentId}`, {
                method: 'DELETE',
            });
            const data = await response.json();
            if (response.ok) {
                setError('');
                setSuccessMessage('Student deleted successfully!');
                setTimeout(() => {
                    setSuccessMessage('');
                    history.push('/home'); // Redirect to home page after successful student deletion
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
            <h2 id="headerTitle">Delete Student</h2>
            <div className="error-container">
                {error && <p className="error">{error}</p>}
                {successMessage && <p className="success">{successMessage}</p>}
            </div>

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label>Student ID:</label>
                    <input type="text" value={studentId} onChange={handleChange} placeholder="Enter student ID" />
                </div>
                <div id="button" className="row">
                    <button type="submit">Delete</button>
                </div>
            </form>
        </div>
    );
}

export default DeleteStudent;
