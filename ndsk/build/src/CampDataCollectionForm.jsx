import React, { useState } from 'react';
import './ROPDataForm.css'; // Import a CSS file for styling

function CampCollectionDataForm() {
    const [mrNo, setMrNo] = useState('');
    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('Male');
    const [occupation, setOccupation] = useState('');
    const [category, setCategory] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [address, setAddress] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [placeOfCamp, setPlaceOfCamp] = useState('');
    const [diabetesMellitus, setDiabetesMellitus] = useState(false);
    const [diabetesDuration, setDiabetesDuration] = useState('');
    const [hypertension, setHypertension] = useState(false);
    const [defectiveVision, setDefectiveVision] = useState(false);
    const [visionDuration, setVisionDuration] = useState('');
    const [eyeSurgery, setEyeSurgery] = useState(false);
    const [eyeInjury, setEyeInjury] = useState(false);
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        // You can access all form field values from state variables
    };


    return (
        <div className="form-container">
            <h1 className="form-header">Camp data collection form</h1>
            <div className="form-group">
                <h3><u>Demographic details</u></h3></div>
            <form onSubmit={handleSubmit} className="data-form">
                <div className="form-group">
                    <label>MR No:</label>
                    <input type="text" value={mrNo} onChange={(e) => setMrNo(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Date:</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Age:</label>
                    <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Age:</label>
                    <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Gender:</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Occupation:</label>
                    <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Category:</label>
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Aadhar:</label>
                    <input type="text" value={aadhar} onChange={(e) => setAadhar(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <textarea value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Contact No:</label>
                    <input type="text" value={contactNo} onChange={(e) => setContactNo(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Place Of Camp:</label>
                    <input type="text" value={placeOfCamp} onChange={(e) => setPlaceOfCamp(e.target.value)} />
                </div>
                <table border="1">
                    <tr>
                        <td>
                            <h3><u>Medical History</u></h3>
                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>
                            <h3><u>Ocular health history</u></h3>
                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h4><u>Condition</u></h4>
                        </td>
                        <td>
                            Yes (√)
                        </td>
                        <td>
                            No (X)
                        </td>
                        <td>
                            <h4><u>Condition</u></h4>
                        </td>
                        <td>
                            Yes (√)
                        </td>
                        <td>
                            No (X)
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h4><b>Diabetes mellitus</b></h4>
                        </td>
                        <td>
                        </td>
                        <td>
                        </td>
                        <td>
                            <h4><b>Defective vision</b></h4>
                        </td>
                        <td>
                        </td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>If yes,
                                duration:</b>
                        </td>
                        <td>
                            &lt;5yrs
                        </td>
                        <td>    
                            &gt;5yrs
                        </td>
                        <td>
                            <b>If yes:</b>
                        </td>
                        <td>
                            Gradual
                        </td>
                        <td>
                            Sudden
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Hypertension</b>
                        </td>
                        <td>
                            Yes (√)
                        </td>
                        <td>
                            No (X)
                        </td>
                        <td>
                            <tr>
                                <td>
                                    <b>H/o any eye surgery</b>
                                </td>                                   
                            </tr>
                            <tr>
                                <td>
                                    <b>H/o any eye injury</b>
                                </td>                                    
                            </tr>                            
                        </td> 
                        <td border="1">
                            <tr>
                                <td>
                                    Yes (√)	
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    No (X)
                                </td>
                            </tr>
                        </td>
                        <td border = "1">
                            <tr>
                                <td>
                                    Yes (√)	
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    No (X)
                                </td>
                            </tr>
                        </td> 
                    </tr>
                </table>
                <div className="form-group">
                    <h4><u>Vision assessment </u>(with or without glasses) – can be a check box to select</h4>
                </div>
                <table border = "1">
                    <tr>
                        <td>
                        </td>
                        <td>
                            <b><u>Distance Vision</u></b>
                        </td>
                        <td>
                            <b><u>Near Vision</u></b>
                        </td>
                        <td>
                            <b><u>Distance Pinhole vision</u></b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Right eye</b>
                        </td>
                        <td>
                            
                        </td>
                        <td>
                            
                        </td>
                        <td>
                            Optional field
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Left eye</b>
                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>
                            Optional field
                        </td>
                    </tr>
                </table>
                <div className="form-group">
                    <h4>Subjective refraction</h4>
                </div>
                <table border="1">
                    <tr>
                        <td>
                        </td>
                        <td>
                            <b>Sph.</b>
                        </td>
                        <td>
                            <b>Cyl.</b>
                        </td>
                        <td>
                            <b>Axis</b>
                        </td>
                        <td>
                            <b>Near add</b>
                        </td>
                        <td>
                            <b>BCVA (Distance)</b>
                        </td>
                        <td>
                            <b>BCVA (Near)</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Right eye</b>
                        </td>
                        <td>
                            
                        </td>
                        <td>
                            
                        </td>
                        <td>
                            
                        </td>
                        <td>
                            
                        </td>
                        <td>
                            
                        </td>
                        <td>
                            
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Left eye</b>
                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
}

export default CampCollectionDataForm;