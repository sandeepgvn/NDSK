//import React, { useState } from 'react';
////import './Menu.css'; // Import your CSS for styling

//function Menu() {
//    const [showSubMenu, setShowSubMenu] = useState(false);

//    const handleMouseEnter = () => {
//        setShowSubMenu(true);
//    };

//    const handleMouseLeave = () => {
//        setShowSubMenu(false);
//    };

//    return (
//        <div
//            className="menu-container"
//            onMouseEnter={handleMouseEnter}
//            onMouseLeave={handleMouseLeave}
//        >
//            <div className="menu-item" tabIndex="0">
//                Super Admin
//            </div>
//            {showSubMenu && (
//                <div className="submenu">
//                    <div className="submenu-item">Hospital Creation</div>
//                    <div className="submenu-item">User Management</div>
//                    <div className="submenu-item">Dash boards</div>
//                    <div className="submenu-item">Reports</div>
//                </div>
//            )}
//            <div className="menu-item" tabIndex="1">
//                Hospital Admin
//            </div>
//            {showSubMenu && (
//                <div className="submenu">
//                    <div className="submenu-item">User Management</div>
//                    <div className="submenu-item">Camp Creation</div>
//                    <div className="submenu-item">Patient Registration</div>
//                    <div className="submenu-item">ROP</div>
//                    <div className="submenu-item">Community Ophthalmology</div>
//                    <div className="submenu-item">Patient Follow-up</div>
//                    <div className="submenu-item">Dash boards</div>
//                    <div className="submenu-item">Reports</div>
//                    <div className="submenu-item">CSV Downloads</div>
//                </div>
//            )}
//        </div>
//    );
//}

//export default Menu;

//import React, { useState } from 'react';
//import './Menu.css'; // Import your CSS for styling

//function Menu() {
//    const [superAdminSubMenu, setSuperAdminSubMenu] = useState(false);
//    const [hospitalAdminSubMenu, setHospitalAdminSubMenu] = useState(false);

//    const handleSuperAdminMouseEnter = () => {
//        setSuperAdminSubMenu(true);
//    };

//    const handleSuperAdminMouseLeave = () => {
//        setSuperAdminSubMenu(false);
//    };

//    const handleHospitalAdminMouseEnter = () => {
//        setHospitalAdminSubMenu(true);
//    };

//    const handleHospitalAdminMouseLeave = () => {
//        setHospitalAdminSubMenu(false);
//    };

//    return (
//        <div className="menu-container">
//            <div
//                className="menu-item"
//                tabIndex="0"
//                onMouseEnter={handleSuperAdminMouseEnter}
//                onMouseLeave={handleSuperAdminMouseLeave}
//            >
//                Super Admin
//            </div>
//            <div
//                className={`submenu ${superAdminSubMenu ? 'active' : ''}`}
//            >
//                <div className="submenu-item">Hospital Creation</div>
//                <div className="submenu-item">User Management</div>
//                <div className="submenu-item">Dashboards</div>
//                <div className="submenu-item">Reports</div>
//            </div>
//            <div
//                className="menu-item"
//                tabIndex="1"
//                onMouseEnter={handleHospitalAdminMouseEnter}
//                onMouseLeave={handleHospitalAdminMouseLeave}
//            >
//                Hospital Admin
//            </div>
//            <div
//                className={`submenu ${hospitalAdminSubMenu ? 'active' : ''}`}
//            >
//                <div className="submenu-item">User Management</div>
//                <div className="submenu-item">Camp Creation</div>
//                <div className="submenu-item">Patient Registration</div>
//                <div className="submenu-item">ROP</div>
//                <div className="submenu-item">Community Ophthalmology</div>
//                <div className="submenu-item">Patient Follow-up</div>
//                <div className="submenu-item">Dashboards</div>
//                <div className="submenu-item">Reports</div>
//                <div className="submenu-item">CSV Downloads</div>
//            </div>
//        </div>
//    );
//}

//export default Menu;

//import React, { useState } from 'react';
//import './Menu.css'; // Import your CSS for styling

//function Menu() {
//    const [superAdminSubMenu, setSuperAdminSubMenu] = useState(false);
//    const [hospitalAdminSubMenu, setHospitalAdminSubMenu] = useState(false);

//    const handleSuperAdminMouseEnter = () => {
//        setSuperAdminSubMenu(true);
//    };

//    const handleSuperAdminMouseLeave = () => {
//        setSuperAdminSubMenu(false);
//    };

//    const handleHospitalAdminMouseEnter = () => {
//        setHospitalAdminSubMenu(true);
//    };

//    const handleHospitalAdminMouseLeave = () => {
//        setHospitalAdminSubMenu(false);
//    };

//    return (
//        <div className="menu-container">
//            <div className="menu-item-container">
//                <div
//                    className="menu-item"
//                    tabIndex="0"
//                    onMouseEnter={handleSuperAdminMouseEnter}
//                    onMouseLeave={handleSuperAdminMouseLeave}
//                >
//                    Super Admin
//                </div>
//                <div
//                    className={`submenu ${superAdminSubMenu ? 'active' : ''}`}
//                >
//                    <div className="submenu-item">Hospital Creation</div>
//                    <div className="submenu-item">User Management</div>
//                    <div className="submenu-item">Dashboards</div>
//                    <div className="submenu-item">Reports</div>
//                </div>
//            </div>
//            <div className="menu-item-container">
//                <div
//                    className="menu-item"
//                    tabIndex="1"
//                    onMouseEnter={handleHospitalAdminMouseEnter}
//                    onMouseLeave={handleHospitalAdminMouseLeave}
//                >
//                    Hospital Admin
//                </div>
//                <div
//                    className={`submenu ${hospitalAdminSubMenu ? 'active' : ''}`}
//                >
//                    <div className="submenu-item">User Management</div>
//                    <div className="submenu-item">Camp Creation</div>
//                    <div className="submenu-item">Patient Registration</div>
//                    <div className="submenu-item">ROP</div>
//                    <div className="submenu-item">Community Ophthalmology</div>
//                    <div className="submenu-item">Patient Follow-up</div>
//                    <div className="submenu-item">Dashboards</div>
//                    <div className="submenu-item">Reports</div>
//                    <div className="submenu-item">CSV Downloads</div>
//                </div>
//            </div>
//        </div>
//    );
//}

//export default Menu;

import React, { useState, useEffect } from 'react';
import './Menu.css'; // Import your CSS for styling

function Menu() {

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
                    <div className="submenu-item">
                        Hospital Creation
                    </div>
                    <div className="submenu-item">Role Management</div>
                    <div className="submenu-item">User Management</div>
                    <div className="submenu-item">Dashboards</div>
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

                    <div className="submenu-item">Camp Creation</div>
                    <div className="submenu-item">Patient Registration</div>
                    <div className="submenu-item">ROP</div>
                    <div className="submenu-item">Low Vision</div>
                    <div className="submenu-item">Community Ophthalmology</div>
                    <div className="submenu-item">Patient Follow-up</div>
                    <div className="submenu-item">Dashboards</div>
                    <div className="submenu-item">Reports</div>
                    <div className="submenu-item">CSV Downloads</div>
                </div>
            </div>            
        </div>
    );
}

export default Menu;




