import React, { useState } from "react";
import "./Settings.css";
import { FaUser, FaBell, FaLock } from "react-icons/fa";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("account");

  const [username, setUsername] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");


  const [notifications, setNotifications] = useState(true);

 
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSave = () => {
    console.log({ username, email, notifications, password });
    alert("Settings saved successfully!");
  };

  return (
    <div className="settings-wrapper">
      <h2>Settings</h2>
      <div className="settings-container">
     
        <div className="tabs">
          <div
            className={`tab ${activeTab === "account" ? "active" : ""}`}
            onClick={() => setActiveTab("account")}
          >
            <FaUser /> Account
          </div>
          <div
            className={`tab ${activeTab === "notifications" ? "active" : ""}`}
            onClick={() => setActiveTab("notifications")}
          >
            <FaBell /> Notifications
          </div>
          <div
            className={`tab ${activeTab === "security" ? "active" : ""}`}
            onClick={() => setActiveTab("security")}
          >
            <FaLock /> Security
          </div>
        </div>

   
        <div className="tab-content">
          {activeTab === "account" && (
            <div className="form-section">
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="form-section">
              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={notifications}
                    onChange={(e) => setNotifications(e.target.checked)}
                  />
                  Enable Notifications
                </label>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="form-section">
              <div className="form-group">
                <label>New Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter new password"
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                />
              </div>
            </div>
          )}
        </div>


        <button className="save-btn" onClick={handleSave}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
