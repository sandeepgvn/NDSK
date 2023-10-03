import React, { useState } from 'react';
import './ROPDataForm.css'; // Import a CSS file for styling

function LowVisionData() {

    const [dateOfExamination, setDateOfExamination] = useState('');
    const [mrNo, setMrNo] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('Male');
    const [demographics, setDemographics] = useState('');
    const [parentPhotoID, setParentPhotoID] = useState('');
    const [clinicalhistory, setClinicalHistory] = useState('');
    const [patientrequirements, setPatientRequirements] = useState('');
    const [coverTestDesc, setCoverTestDesc] = useState('');
    const [eomDesc, setEOMDesc] = useState('');
    const [trialInfo, setTrialInfo] = useState('');
    const [finalMgmt, setFinalMgmt] = useState('');

    const [selectedCoverTestOption, setSelectedCoverTestOption] = useState('');
    const [selectedEOMOption, setSelectedEOMOption] = useState('');

    const handleCoverTestOptionChange = (event) => {
        setSelectedCoverTestOption(event.target.value);
    };

    const handleEOMOptionChange = (event) => {
        setSelectedEOMOption(event.target.value);
    };


    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        // You can access all form field values from state variables
    };
    return (
        <div className="form-container">
            <h1 className="form-header">Low Vision (LOP)</h1>
            <form onSubmit={handleSubmit} className="data-form">
                <div className="form-group">
                    <label>Date of Examination:</label>
                    <input type="date" value={dateOfExamination} onChange={(e) => setDateOfExamination(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>MR No:</label>
                    <input type="text" value={mrNo} onChange={(e) => setMrNo(e.target.value)} />
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
                    <label>Address:</label>
                    <input type="text" value={demographics} onChange={(e) => setDemographics(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Gender:</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Photo ID of Parent/s:</label>
                    <input type="file" accept="image/*" onChange={(e) => setParentPhotoID(e.target.files[0])} />
                </div>

                <h3 className="form-header">Clinical History:</h3>
                <div className="form-group">
                    <textarea value={clinicalhistory} onChange={(e) => setClinicalHistory(e.target.value)} />
                </div>
                <h3 className="form-header">Patient Requirements:</h3>
                <div className="form-group">
                    <textarea value={patientrequirements} onChange={(e) => setPatientRequirements(e.target.value)} />
                </div>

                <h3 className="form-header">Screening / Examination:</h3>
                <div className="form-group">
                    <label>Visual Activity</label>
                </div>
                <table border = "1">
                    <tr>
                        <td>
                        </td>
                        <td>
                            Unaided (without correction)
                        </td>
                        <td>
                            Aided (with current
                            glasses/Contact Lens)
                        </td>
                        <td>
                            Pinhole vision
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Right Eye
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
                            Left Eye
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
                            Near
                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                    </tr>
                </table>
                <h4 className="form-header">Present Glass Prescription (How many days/months/years old):</h4>
                <table border="1">
                    <tr>
                        <td>
                            PGP
                        </td>
                        <td>
                            Sph (D)
                        </td>
                        <td>
                            Cyl (D)
                        </td>
                        <td>
                            Axis
                        </td>
                        <td>
                            Add
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Right Eye
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
                            Left Eye
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
                <h4 className="form-header">Retinoscopy (Objective):</h4>
                <table border="1">
                    <tr>
                        <td>
                            
                        </td>
                        <td>
                            Sph (D)
                        </td>
                        <td>
                            Cyl (D)
                        </td>
                        <td>
                            Axis
                        </td>                        
                    </tr>
                    <tr>
                        <td>
                            Right Eye
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
                            Left Eye
                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>

                        </td>                        
                    </tr>                    
                </table>
                <h4 className="form-header">Subjective Refraction:</h4>
                <table border="1">
                    <tr>
                        <td>

                        </td>
                        <td>
                            Sph (D)
                        </td>
                        <td>
                            Cyl (D)
                        </td>
                        <td>
                            Axis
                        </td>
                        <td>
                            Add
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Right Eye
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
                            Left Eye
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

                <h4>
                    Cover Test:
                </h4>

                <div>
                    <label>
                        <input
                            type="radio"
                            value="Normal"
                            checked={selectedCoverTestOption === 'Normal'}
                            onChange={handleCoverTestOptionChange}
                        />
                        Normal
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="Abnormal"
                            checked={selectedCoverTestOption === 'Abnormal'}
                            onChange={handleCoverTestOptionChange}
                        />
                        Abnormal
                    </label>                    
                </div>                
                <div>
                    <textarea value={coverTestDesc} onChange={(e) => setCoverTestDesc(e.target.value)} />
                </div>

                <h4>
                    Extra Ocular Motility (EOM):
                </h4>

                <div>
                    <label>
                        <input
                            type="radio"
                            value="Normal"
                            checked={selectedEOMOption === 'Normal'}
                            onChange={handleEOMOptionChange}
                        />
                        Normal
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="Abnormal"
                            checked={selectedEOMOption === 'Abnormal'}
                            onChange={handleEOMOptionChange}
                        />
                        Abnormal
                    </label>
                </div>
                <div>
                    <textarea value={eomDesc} onChange={(e) => setEOMDesc(e.target.value)} />
                </div>

                <h4>
                    Trial Information (any low vision devices):
                </h4>

                <div>
                    <textarea value={trialInfo} onChange={(e) => setTrialInfo(e.target.value)} />
                </div>


                <h4>
                    Final management/ Diagnosis/ Advice:
                </h4>

                <div>
                    <textarea value={finalMgmt} onChange={(e) => setFinalMgmt(e.target.value)} />
                </div>

                {/* Submit Button */}
                <div className="form-group">
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default LowVisionData;
