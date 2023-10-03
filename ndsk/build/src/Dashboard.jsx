import React from 'react';

function Dashboard() {
    // Dummy data for the dashboard
    const totalUsers = 1000;
    const totalOrders = 500;
    const revenue = 75000;

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="dashboard-stats">
                <div className="stat">
                    <h2>Total Users</h2>
                    <p>{totalUsers}</p>
                </div>
                <div className="stat">
                    <h2>Total Orders</h2>
                    <p>{totalOrders}</p>
                </div>
                <div className="stat">
                    <h2>Revenue</h2>
                    <p>${revenue}</p>
                </div>
            </div>
            <div className="dashboard-charts">
                {/* Add charts or graphs here (you can use charting libraries like Chart.js or D3.js) */}
                <p>Charts go here</p>
            </div>
        </div>
    );
}

export default Dashboard;
