import React from "react";
import "./Navbar.css";
import tigerLogo from "../../assets/tiger.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Section - Logo and Brand Name */}
      <div className="navbar-left">
        {/* <img src={tigerLogo} alt="Tiger Logo" className="navbar-logo" /> */}
        {/* <img src="//www.tigermarron.com/cdn/shop/files/logotiger.png?v=1749556526&amp;width=200" alt="" srcset="//www.tigermarron.com/cdn/shop/files/logotiger.png?v=1749556526&amp;width=200 200w, //www.tigermarron.com/cdn/shop/files/logotiger.png?v=1749556526&amp;width=200 200w" width="200" height="80" sizes="220px" class="header__logo-image"></img> */}
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
