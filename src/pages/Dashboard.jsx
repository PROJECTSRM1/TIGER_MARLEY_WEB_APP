
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-content">
      <div className="header">
        <h2>Welcome Back! 👋</h2>
     
      </div>

      <div className="cards">
        <Card title="Total Products" value="124" />
        <Card title="Active Orders" value="18" />
        <Card title="Pending Deliveries" value="7" />
        <Card title="Customers" value="312" />
      </div>

      <div className="panels">
        <Panel title="Recent Bookings" items={[0]} />
        <Panel title="Active Tickets" items={[0]} />
      </div>
    </div>
  );
};

const Card = ({ title, value }) => (
  <div className="card">
    <div className="card-title">{title}</div>
    <div className="card-value">{value}</div>
  </div>
);

const Panel = ({ title, items }) => (
  <div className="panel">
    <h3>{title}</h3>
    <ul>
      {items.map((item, idx) => (
        <li key={idx}>
          {item} <span className="status"></span>
        </li>
      ))}
    </ul>
  </div>
);

export default Dashboard;
