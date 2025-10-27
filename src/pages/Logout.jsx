import React, { useState } from "react";
import "./Logout.css";


const Logout = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);


  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      setIsLoggedOut(true);
    }
  };


  return (
    <div className="logout-container">
      <div className="logout-card">
        {!isLoggedOut ? (
          <>
            <h2>Logout Page</h2>
            <p>Click below to logout from your session.</p>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <h2>Logged Out Successfully</h2>
            <p>You have been logged out. Thank you for visiting!</p>
            <button className="logout-btn" onClick={() => window.location.reload()}>
              Back
            </button>
          </>
        )}
      </div>
    </div>
  );
};


export default Logout;