import React, { useState } from 'react';

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
        <div className="dropdown-content">
          <a href="#">View Notifications</a>
          <a href="#">Create Notification</a>
        </div>
      )}
    </div>
  );
};

export default Notifications;