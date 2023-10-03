import React, { useState } from 'react';
import './ROPDataForm.css'; // Import a CSS file for styling
function PatientRegistrationForm() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('Male');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [address3, setAddress3] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [pincode, setPinCode] = useState('');
    const [patientPhoto, setParentPhoto] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDateOfCreation] = useState('');

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        // You can access all form field values from state variables
    };
    return (
        <div className="form-container">
            <h1 className="form-header">Retinopathy of Prematurity (ROP)</h1>
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
                    <label>Flat No :</label>
                    <input type="text" value={address1} onChange={(e) => setAddress1(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Apartment :</label>
                    <input type="text" value={address2} onChange={(e) => setAddress2(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Street :</label>
                    <input type="text" value={address3} onChange={(e) => setAddress3(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>City :</label>
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>State :</label>
                    <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Country :</label>
                    <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Pin Code :</label>
                    <input type="text" value={pincode} onChange={(e) => setPinCode(e.target.value)} />
                </div>

                <div className="form-group">
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default PatientRegistrationForm;