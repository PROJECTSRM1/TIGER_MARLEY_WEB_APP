// src/layouts/MainLayout.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="layout-container">
      <Navbar /> {/* Navbar always at top */}
      <div className="dashboard-container">
        <Sidebar />
        <div className="main-content">
          <Outlet /> {/* Page content goes here */}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
