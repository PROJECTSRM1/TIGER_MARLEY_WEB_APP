import React from "react";
import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="navbar-title">Tiger Marley</h2>
      </div>

      {/* Center Section - Search Bar */}
      <div className="navbar-center">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
        />
      </div>

      {/* Right Section - User Info */}
      <div className="navbar-right">
        <select className="location-select">
          <option>All Locations</option>
          <option>Hyderabad</option>
          <option>Chennai</option>
          <option>Mumbai</option>
        </select>

        <div className="notification-icon">🔔</div>

        <div className="user-info">
          <div className="user-avatar">A</div>
          <div className="user-details">
            <span className="user-name">AdminTiger</span>
            <span className="user-role">Super Admin</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
