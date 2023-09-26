import React, { useState } from 'react';
import './ROPDataForm.css'; // Import a CSS file for styling

function RoleMasterForm() {
    const [roleName, setRoleName] = useState('');
    const [roleDescription, setRoleDescription] = useState('');
    const [isChecked, setIsChecked] = useState(false); // Add the isChecked state variable

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        // You can access all form field values from state variables
    };

    return (
        <div className="form-container">
            <h1 className="form-header">Role Master</h1>
            <form onSubmit={handleSubmit} className="data-form">
                <div className="form-group">
                    <label>Role:</label>
                    <input type="text" value={roleName} onChange={(e) => setRoleName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Description:</label>
                    <textarea value={roleDescription} onChange={(e) => setRoleDescription(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        Active
                    </label>
                </div>

                {/* Submit Button */}
                <div className="form-group">
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default RoleMasterForm;
