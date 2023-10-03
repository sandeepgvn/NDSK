import React, { useState } from 'react';
import styles from "./ROPDataForm.css";
function HospitalMasterForm() {
    // Define state variables for form fields
    const [hospitalName, setHospitalName] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [address, setAddress] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [hospitalEmail, setHospitalEmail] = useState('');
    const [logo, setLogo] = useState('');
    const [website, setWebsite] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    // Function to handle checkbox change
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
            <h1 className="form-header">Hospital Creation</h1>
            <form onSubmit={handleSubmit} className="data-form">
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} />
                </div>
                
                <div className="form-group">
                    <label>Address:</label>
                    <textarea value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Contact Person:</label>
                    <input type="text" value={contactPerson} onChange={(e) => setContactPerson(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Contact Email:</label>
                    <input type="text" value={hospitalEmail} onChange={(e) => setHospitalEmail(e.target.value)} />
                </div>


                <div className="form-group">
                    <label>Contact No:</label>
                    <input type="text" value={contactNo} onChange={(e) => setContactNo(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Website :</label>
                    <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Logo :</label>
                    <input type="file" accept="image/*" onChange={(e) => setLogo(e.target.files[0])} />
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

export default HospitalMasterForm;
