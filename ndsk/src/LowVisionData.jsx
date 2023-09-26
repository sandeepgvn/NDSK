import React, { useState } from 'react';
import './ROPDataForm.css'; // Import a CSS file for styling

function LowVisionData() {

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        // You can access all form field values from state variables
    };
    return (
        <div className="form-container">
            <h1 className="form-header">Low vision</h1>
        </div>
    );
}

export default LowVisionData;
 