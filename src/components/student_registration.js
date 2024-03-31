import React, { useState } from 'react';
import FormHeader from './FormHeader';
import FormInput from './FormInput';
import FormButton from './FormButton'; // Import FormButton component
import { Link } from 'react-router-dom';
import '../styles/loginStyles.css';

function StudentRegistration() {
    const [formData, setFormData] = useState({
        student_name: '',
        email: ''
    });
    
    const [isLoading, setIsLoading] = useState(false); // State to track loading status
    const [error, setError] = useState(''); // State to track errors

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Set loading state to true
        try {
            const response = await fetch('http://127.0.0.1:5000/api/student/student', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                // Request successful, continue processing response
                const responseData = await response.json();
                console.log('Student created successfully:', responseData);
                // Clear form data or perform redirection
            } else {
                // Request failed, parse error response if available
                const errorData = await response.text(); // Parse error response as text
                throw new Error(errorData || 'Failed to create student');
            }
        } catch (error) {
            // Handle error
            console.error('Error occurred:', error);
            setError(error.message || 'Error occurred');
        }
        setIsLoading(false); // Set loading state back to false
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        // Check if the input field is for email
        if (name === 'email') {
            // Perform basic email validation
            if (/^\S+@\S+\.\S+$/.test(value)) {
                setError(''); // Clear previous error message
                setFormData({ ...formData, [name]: value });
            } else {
                setError('Invalid email format');
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };


    return (
        <div id="loginform">
            <FormHeader title="Student Registration" />
            <form onSubmit={handleSubmit}>
                <div>
                    <FormInput
                        description="Name"
                        placeholder="Enter student's name"
                        type="text"
                        id="student_name"
                        name="student_name"
                        value={formData.name}
                        onChange={handleChange}
                        key="name-input" // Add unique key attribute
                    />
                </div>
                <div>
                    <FormInput
                        description="Email"
                        placeholder="Enter student's email"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        key="email-input" // Add unique key attribute
                    />
                </div>
                <FormButton title="Register Student" disabled={isLoading} />
                {error && <p className="error-message">{error}</p>} {/* Display error message if any */}
            </form>
            <SignipButton title="Back to Login" />
        </div>
    );
}

const SignipButton = (props) => (
    <div id="button" className="row">
        <Link to="/login">{props.title}</Link>
    </div>
);

export default StudentRegistration;
