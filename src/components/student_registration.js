import React, { useState } from 'react';
import FormHeader from './FormHeader';
import FormInput from './FormInput';
import FormButton from './FormButton';
import { Link } from 'react-router-dom';
import '../styles/loginStyles.css';

function StudentRegistration() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        addresses: [
            {
                street: '',
                city: '',
                state: '',
                zipcode: ''
            }
        ]
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch('http://127.0.0.1:5000/api/student/student', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                const responseData = await response.json();
                console.log('Student created successfully:', responseData);
                // Clear form data or perform redirection
            } else {
                const errorData = await response.text();
                throw new Error(errorData || 'Failed to create student');
            }
        } catch (error) {
            console.error('Error occurred:', error);
            setError(error.message || 'Error occurred');
        }
        setIsLoading(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddressChange = (e, field) => {
        const { value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            addresses: [{
                ...prevState.addresses[0],
                [field]: value
            }]
        }));
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
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        key="name-input"
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
                        key="email-input"
                    />
                </div>
                <div>
                    <FormInput
                        description="Street"
                        placeholder="Enter street address"
                        type="text"
                        id="street"
                        name="street"
                        value={formData.addresses[0].street}
                        onChange={(e) => handleAddressChange(e, 'street')}
                        key="street-input"
                    />
                </div>
                <div>
                    <FormInput
                        description="City"
                        placeholder="Enter city"
                        type="text"
                        id="city"
                        name="city"
                        value={formData.addresses[0].city}
                        onChange={(e) => handleAddressChange(e, 'city')}
                        key="city-input"
                    />
                </div>
                <div>
                    <FormInput
                        description="State"
                        placeholder="Enter state"
                        type="text"
                        id="state"
                        name="state"
                        value={formData.addresses[0].state}
                        onChange={(e) => handleAddressChange(e, 'state')}
                        key="state-input"
                    />
                </div>
                <div>
                    <FormInput
                        description="Zipcode"
                        placeholder="Enter zipcode"
                        type="text"
                        id="zipcode"
                        name="zipcode"
                        value={formData.addresses[0].zipcode}
                        onChange={(e) => handleAddressChange(e, 'zipcode')}
                        key="zipcode-input"
                    />
                </div>
                <FormButton title="Register Student" disabled={isLoading} />
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
}



export default StudentRegistration;
