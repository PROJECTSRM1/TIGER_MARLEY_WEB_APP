import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FiHome,
  FiBox,
  FiShoppingCart,
  FiUsers,
  FiLayers,
  FiHelpCircle,
  FiBarChart2,
  FiSettings,
  FiLogOut
} from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/", icon: <FiHome /> },
    { name: "Products", path: "/products", icon: <FiBox /> },
    { name: "Orders", path: "/orders", icon: <FiShoppingCart /> },
    { name: "Customers", path: "/customers", icon: <FiUsers /> },
    { name: "Inventory", path: "/inventory", icon: <FiLayers /> },
    { name: "Support Tickets", path: "/support-tickets", icon: <FiHelpCircle /> },
    { name: "Analytics / Reports", path: "/analytics-reports", icon: <FiBarChart2 /> },
    { name: "Settings", path: "/settings", icon: <FiSettings /> },
    { name: "Logout", path: "/logout", icon: <FiLogOut /> }
  ];

  return (
    <div className="sidebar">
      <h1 className="logo">Tiger Marley</h1>

      <ul className="menu">
        {menuItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `menu-link ${item.name === "Logout" ? "logout" : ""} ${isActive ? "active" : ""}`
              }
            >
              <span className="icon">{item.icon}</span>
              <span className="label">{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
