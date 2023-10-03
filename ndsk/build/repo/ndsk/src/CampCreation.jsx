import React, { useState } from 'react';
import styles from "./ROPDataForm.css";
function CampCreationForm() {
    const [campName, setCampName] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [campAddress, setcampAddress] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [isChecked, setIsChecked] = useState(false);
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
            <h1 className="form-header">Camp Creation</h1>
            <form onSubmit={handleSubmit} className="data-form">
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" value={campName} onChange={(e) => setCampName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Address:</label>
                    <textarea value={campAddress} onChange={(e) => setcampAddress(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Contact Person:</label>
                    <input type="text" value={contactPerson} onChange={(e) => setContactPerson(e.target.value)} />
                </div>
                
                <div className="form-group">
                    <label>Contact No:</label>
                    <input type="text" value={contactNo} onChange={(e) => setContactNo(e.target.value)} />
                </div>

                <label>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    Active
                </label>
                {/* Submit Button */}
                <div className="form-group">
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default CampCreationForm;