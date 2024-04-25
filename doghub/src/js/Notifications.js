import React, { useState } from 'react';
import '../css/Notifications.css';

const Notifications = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    // <div>
    //   <h1>Welcome to the Notifications Page</h1>
    // </div>
    <div className="notifications-container">
      <button onClick={toggleDropdown}>Notifications</button>
      {isDropdownOpen && (
        <div className="dropdown">
          <div><a href="#">View Notifications</a></div>
          <div><a href="#">Create Notification</a></div>
        </div>
      )}
    </div>
  );
};

export default Notifications;