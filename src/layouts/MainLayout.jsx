
import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="layout-container">
      <Navbar /> 
      <div className="dashboard-container">
        <Sidebar />
        <div className="main-content">
          <Outlet /> 
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
