import { useState } from 'react'
import React from 'react';
import './App.css'; // Import your CSS for styling
import './Menu.css'; // Import your CSS for styling
import ROPForm from './ROPForm'; // Import your ROPForm component
import HospitalMaster from './HospitalMaster'; // Import your hospitalMaster component
import CampDataCollectionForm from './CampDataCollectionForm'; // Import your CampDataCollection component
import CampCreation from './CampCreation'; // Import your CampCreation component
import RoleMaster from './RoleMaster'; // Import your RoleMaster component
import Dashboard from './Dashboard'; // Import your Dashboard component
import PatientRegistration from './PatientRegistration'; // Import your Dashboard component

//import Menu from './Menu';

function App() {
    const [count, setCount] = useState(0)

    const [showLoginForm, setShowLoginForm] = useState(false);

    const [showROPForm, setShowROPForm] = useState(false);

    const [showHospitalMaster, setHospitalMaster] = useState(false);

    const [showCampDataCollectionForm, setCampDataCollectionForm] = useState(false);

    const [showCampCreation, setCampCreation] = useState(false);

    const [showRoleMaster, setRoleMaster] = useState(false);

    const [showDashboard, setDashboard] = useState(false);

    const [showPatientRegistration, setPatientRegistration] = useState(false);


    const handleLoginClick = () => {
        setShowLoginForm(true);
    };

    const handleCloseLoginForm = () => {
        setShowLoginForm(false);
    };

    const toggleROPForm = () => {
        setShowROPForm(!showROPForm);
        setHospitalMaster(false);
        setCampDataCollectionForm(false);
        setCampCreation(false);
        setRoleMaster(false);
        setDashboard(false);
        setPatientRegistration(false);
    }

    const toggleDashboard = () => {
        setDashboard(!showDashboard);
        setHospitalMaster(false);
        setCampDataCollectionForm(false);
        setCampCreation(false);
        setRoleMaster(false);
        setDashboard(false);
        setPatientRegistration(false);
    }

    const toggleCampDataCollectionForm = () => {
        setCampDataCollectionForm(!showCampDataCollectionForm);
        setHospitalMaster(false);
        setShowROPForm(false);
        setCampCreation(false);
        setRoleMaster(false);
        setDashboard(false);
        setPatientRegistration(false);
    };

    const toggleHospitalMaster = () => {
        setHospitalMaster(!showHospitalMaster);
        setShowROPForm(false);
        setCampDataCollectionForm(false);
        setCampCreation(false);
        setRoleMaster(false);
        setDashboard(false);
        setPatientRegistration(false);
    };

    const toggleCampCreation = () => {
        setCampCreation(!showCampCreation);
        setHospitalMaster(false);
        setShowROPForm(false);
        setCampDataCollectionForm(false);
        setRoleMaster(false);
        setDashboard(false);
        setPatientRegistration(false);
    };

    const toggleRoleMaster = () => {
        setRoleMaster(!showRoleMaster);
        setCampCreation(false);
        setHospitalMaster(false);
        setShowROPForm(false);
        setCampDataCollectionForm(false);
        setDashboard(false);
        setPatientRegistration(false);
    };

    const togglePatientRegistration = () => {
        setPatientRegistration(!showPatientRegistration);
        setRoleMaster(false);
        setCampCreation(false);
        setHospitalMaster(false);
        setShowROPForm(false);
        setCampDataCollectionForm(false);
        setDashboard(false);
        setPatientRegistration(false);
    };

    const handleHospitalCreationClick = () => {
        setShowHospitalCreationForm(true);
    };

    const handleCloseHospitalCreationForm = () => {
        setShowHospitalCreationForm(false);
    };

    const [superAdminSubMenu, setSuperAdminSubMenu] = useState(false);
    const [hospitalAdminSubMenu, setHospitalAdminSubMenu] = useState(false);

    const handleSuperAdminMouseEnter = () => {
        setSuperAdminSubMenu(true);
    };

    const handleSuperAdminMouseLeave = () => {
        setTimeout(() => {
            setSuperAdminSubMenu(false);
        }, 1000);
    };

    const handleHospitalAdminMouseEnter = () => {
        setHospitalAdminSubMenu(true);
    };

    const handleHospitalAdminMouseLeave = () => {
        // Add a delay before hiding the submenu
        setTimeout(() => {
            setHospitalAdminSubMenu(false);
        }, 1000); // Adjust the delay time (in milliseconds) as needed
    };

    return (
        <div className="app-container">
            <div className="logo">
                <img src="/src/assets/NDSK.jpg" alt="Navjaat-Sishu Drishti Suraksha Karyakram" />
                <center><h1 className="form-header">Navjaat-Sishu Drishti Suraksha Karyakram (NDSK)</h1></center>
            </div>
            <div className="top-right">
                <button onClick={handleLoginClick}>Login</button>
                {/*<button>Register</button>*/}
            </div>
            <div className="menu">
            <div className="menu-container">
                <div className="menu-item-container">
                    <div
                        className="menu-item"
                        tabIndex="0"
                        onMouseEnter={handleSuperAdminMouseEnter}
                        onMouseLeave={handleSuperAdminMouseLeave}
                    >
                        Super Admin
                    </div>
                        <div className={`submenu ${superAdminSubMenu ? 'active' : ''}`}>
                            <div className="submenu-item" onClick={toggleHospitalMaster}>Hospital Creation</div>
                            <div className="submenu-item" onClick={toggleRoleMaster}>Role Management</div>
                            <div className="submenu-item">User Management</div>
                            <div className="submenu-item" onClick={toggleDashboard}>Dashboards</div>
                        <div className="submenu-item">Reports</div>
                    </div>
                </div>
                <div className="menu-item-container">
                    <div
                        className="menu-item"
                        tabIndex="1"
                        onMouseEnter={handleHospitalAdminMouseEnter}
                        onMouseLeave={handleHospitalAdminMouseLeave}
                    >
                        Hospital Admin
                    </div>
                    <div className={`submenu ${hospitalAdminSubMenu ? 'active' : ''}`}>
                            <div className="submenu-item">User Management</div>
                            <div className="submenu-item" onClick={toggleCampCreation}>Camp Creation</div>
                        <div className="submenu-item">Patient Registration</div>
                            <div className="submenu-item" onClick={toggleROPForm}>ROP</div>
                            <div className="submenu-item">Low Vision</div>
                            <div className="submenu-item" onClick={toggleCampDataCollectionForm}>Community Ophthalmology</div>

                            <div className="submenu-item" onClick={togglePatientRegistration}>Patient Registration</div>
                        <div className="submenu-item">Patient Follow-up</div>
                        <div className="submenu-item">Dashboards</div>
                        <div className="submenu-item">Reports</div>
                        <div className="submenu-item">CSV Downloads</div>
                    </div>
                </div>
                </div>
                <div className="content-container">
                    {/* Conditionally render the ROPForm next to the menu panel */}
                    {showROPForm && (
                        <div className="rop-form-panel">
                            <ROPForm />
                        </div>
                    )}
                    {/* Rest of your content */}
                </div>
                <div className="content-container">
                    {/* Conditionally render the HospitalMaster next to the menu panel */}
                    {showHospitalMaster && (
                        <div className="rop-form-panel">
                            <HospitalMaster />
                        </div>
                    )}
                    {/* Rest of your content */}
                </div>
                <div className="content-container">
                    {/* Conditionally render the Camp Data Collection Form next to the menu panel */}
                    {showCampDataCollectionForm && (
                        <div className="rop-form-panel">
                            <CampDataCollectionForm />
                        </div>
                    )}
                    {/* Rest of your content */}
                </div>
                <div className="content-container">
                    {/* Conditionally render the Camp Data Collection Form next to the menu panel */}
                    {showCampCreation && (
                        <div className="rop-form-panel">
                            <CampCreation />
                        </div>
                    )}
                    {/* Rest of your content */}
                </div>
                <div className="content-container">
                    {/* Conditionally render the Camp Data Collection Form next to the menu panel */}
                    {showRoleMaster && (
                        <div className="rop-form-panel">
                            <RoleMaster />
                        </div>
                    )}
                    {/* Rest of your content */}
                </div>
                <div className="content-container">
                    {/* Conditionally render the Camp Data Collection Form next to the menu panel */}
                    {showDashboard && (
                        <div className="rop-form-panel">
                            <Dashboard />
                        </div>
                    )}
                    {/* Rest of your content */}
                </div>
            </div>            

            {showLoginForm && (
                <div className="login-form-container">
                    <div className="login-form">
                        <h2>Login</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Username:</label>
                                <input type="text" id="username" name="username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" />
                            </div>
                            <div className="form-actions">
                                <button type="submit">Login</button>
                                <button type="button" onClick={handleCloseLoginForm}>
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
