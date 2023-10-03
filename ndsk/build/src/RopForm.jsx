import React, { useState } from 'react';
import './ROPDataForm.css'; // Import a CSS file for styling

function ROPDataForm() {
  // Define state variables for form fields
  const [dateOfExamination, setDateOfExamination] = useState('');
  const [mrNo, setMrNo] = useState('');
  const [demographics, setDemographics] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('Male');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [sncuName, setSncuName] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [location, setLocation] = useState('');
  const [parentPhotoID, setParentPhotoID] = useState('');
  const [birthHistory, setBirthHistory] = useState('');
  const [gestationalAge, setGestationalAge] = useState('');
  const [birthWeight, setBirthWeight] = useState('');
  const [deliveryType, setDeliveryType] = useState('Normal');
  const [presentMenstrualAge, setPresentMenstrualAge] = useState('');
  const [historyOfJaundice, setHistoryOfJaundice] = useState('No');
  const [historyOfBloodTransfusion, setHistoryOfBloodTransfusion] = useState('No');
  const [historyOfPhototherapy, setHistoryOfPhototherapy] = useState('No');
  const [historyOfGestationalDM, setHistoryOfGestationalDM] = useState('No');
  const [historyOfGestationalHTN, setHistoryOfGestationalHTN] = useState('No');
  const [screening, setScreening] = useState('');
  const [findingsRightEye, setFindingsRightEye] = useState('');
    const [findingsLeftEye, setFindingsLeftEye] = useState('');
    const [rightEyeData, setRightEyeData] = useState({ sph: '', cyl: '', axis: '' });
    const [leftEyeData, setLeftEyeData] = useState({ sph: '', cyl: '', axis: '' });
    const [diagnosis, setDiagnosis] = useState('');
    const [actiontaken, setActionTaken] = useState('');
    const [treatment, setTreatement] = useState('');
    const [visualPrognosis, setVisualPrognosis] = useState('');
    const [followUpDate, setFollowUpDate] = useState('');
    // Function to handle changes in the right eye table
    const handleRightEyeChange = (event) => {
        const { name, value } = event.target;
        setRightEyeData({ ...rightEyeData, [name]: value });
    };

    // Function to handle changes in the left eye table
    const handleLeftEyeChange = (event) => {
        const { name, value } = event.target;
        setLeftEyeData({ ...leftEyeData, [name]: value });
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
          <label>Date of Examination:</label>
          <input type="date" value={dateOfExamination} onChange={(e) => setDateOfExamination(e.target.value)} />
        </div>

        <div className="form-group">
          <label>MR No:</label>
          <input type="text" value={mrNo} onChange={(e) => setMrNo(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Demographics:</label>
          <input type="text" value={demographics} onChange={(e) => setDemographics(e.target.value)} />
        </div>

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
          <label>Name of the SNCU:</label>
          <input type="text" value={sncuName} onChange={(e) => setSncuName(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Name of the Hospital:</label>
          <input type="text" value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Photo ID of Parent/s:</label>
          <input type="file" accept="image/*" onChange={(e) => setParentPhotoID(e.target.files[0])} />
        </div>

        <h5><b>Birth History</b></h5>

        <div className="form-group">
          <label>Gestational age (in weeks):</label>
          <input type="text" value={gestationalAge} onChange={(e) => setGestationalAge(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Birth weight (in Kg):</label>
          <input type="number" value={birthWeight} onChange={(e) => setBirthWeight(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Type of delivery:</label>
          <select value={deliveryType} onChange={(e) => setDeliveryType(e.target.value)}>
            <option value="Normal">Normal</option>
            <option value="C-Section">C-Section</option>
          </select>
        </div>

        <div className="form-group">
          <label>Present menstrual age (in weeks):</label>
          <select value={presentMenstrualAge} onChange={(e) => setPresentMenstrualAge(e.target.value)}>
            {Array.from({ length: 100 }, (_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>H/o Jaundice:</label>
          <select value={historyOfJaundice} onChange={(e) => setHistoryOfJaundice(e.target.value)}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group">
          <label>H/o Blood transfusion:</label>
          <select value={historyOfBloodTransfusion} onChange={(e) => setHistoryOfBloodTransfusion(e.target.value)}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group">
          <label>H/o Phototherapy:</label>
          <select value={historyOfPhototherapy} onChange={(e) => setHistoryOfPhototherapy(e.target.value)}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group">
          <label>H/o Gestational DM:</label>
          <select value={historyOfGestationalDM} onChange={(e) => setHistoryOfGestationalDM(e.target.value)}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group">
          <label>H/o Gestational HTN:</label>
          <select value={historyOfGestationalHTN} onChange={(e) => setHistoryOfGestationalHTN(e.target.value)}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group">
          <label>Screening:</label>
          <textarea value={screening} onChange={(e) => setScreening(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Findings Right Eye:</label>
          <textarea value={findingsRightEye} onChange={(e) => setFindingsRightEye(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Findings Left Eye:</label>
          <textarea value={findingsLeftEye} onChange={(e) => setFindingsLeftEye(e.target.value)} />
        </div>

        <table>
                  <thead>
                      <tr>
                          <th></th>
                          <th>Sph (D)</th>
                          <th>Cyl (D)</th>
                          <th>Axis</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Right Eye</td>
                          <td>
                              <input
                                  type="text"
                                  name="sph"
                                  value={rightEyeData.sph}
                                  onChange={handleRightEyeChange}
                              />
                          </td>
                          <td>
                              <input
                                  type="text"
                                  name="cyl"
                                  value={rightEyeData.cyl}
                                  onChange={handleRightEyeChange}
                              />
                          </td>
                          <td>
                              <input
                                  type="text"
                                  name="axis"
                                  value={rightEyeData.axis}
                                  onChange={handleRightEyeChange}
                              />
                          </td>
                      </tr>
                      <tr>
                          <td>Left Eye</td>
                          <td>
                              <input
                                  type="text"
                                  name="sph"
                                  value={leftEyeData.sph}
                                  onChange={handleLeftEyeChange}
                              />
                          </td>
                          <td>
                              <input
                                  type="text"
                                  name="cyl"
                                  value={leftEyeData.cyl}
                                  onChange={handleLeftEyeChange}
                              />
                          </td>
                          <td>
                              <input
                                  type="text"
                                  name="axis"
                                  value={leftEyeData.axis}
                                  onChange={handleLeftEyeChange}
                              />
                          </td>
                      </tr>
                  </tbody>
              </table>

        <h2 className="form-header">Diagnosis and advise:</h2>

        <div className="form-group">
            <label>Diagnosis:</label>
                  <textarea value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)} />
        </div>
        <div className="form-group">
                  <label>Action taken/review:</label>
                  <textarea value={actiontaken} onChange={(e) => setActionTaken(e.target.value)} />
        </div>
        <div className="form-group">
                  <label>Treatment:</label>
                  <textarea value={treatment} onChange={(e) => setTreatement(e.target.value)} />
        </div>
        <div className="form-group">
                  <label>Visual prognosis:</label>
                  <textarea value={visualPrognosis} onChange={(e) => setVisualPrognosis(e.target.value)} />
        </div>
        <div className="form-group">
                  <label>Follow up date:</label>
                  <input type="date" value={followUpDate} onChange={(e) => setFollowUpDate(e.target.value)} />
        </div>

        {/* Submit Button */}
        <div className="form-group">
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ROPDataForm;
