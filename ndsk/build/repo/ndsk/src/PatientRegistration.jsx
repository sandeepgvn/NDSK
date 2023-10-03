import React, { useState } from 'react';
import './ROPDataForm.css'; // Import a CSS file for styling
function PatientRegistrationForm() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('Male');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [demographics, setDemographics] = useState('');
    const [patientPhoto, setParentPhoto] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [photoId, setPhotoId] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDateOfCreation] = useState('');
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        // You can access all form field values from state variables
    };
    return (
        <div className="form-container">
            <h1 className="form-header">Patient Details</h1>
            <form onSubmit={handleSubmit} className="data-form">
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Gender:</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Date of Birth:</label>
                    <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Weight:</label>
                    <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Height:</label>
                    <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Phone No:</label>
                    <input type="text" value={contactNo} onChange={(e) => setContactNo(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Address :</label>
                    <textarea value={demographics} onChange={(e) => setDemographics(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Aadhar Id :</label>
                    <textarea value={aadhar} onChange={(e) => setAadhar(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Photo ID of Patient:</label>
                    <input type="file" accept="image/*" onChange={(e) => setPhotoId(e.target.files[0])} />
                </div>

                <div className="form-group">
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default PatientRegistrationForm;