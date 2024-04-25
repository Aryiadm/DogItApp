import React from 'react';

const ViewNotifications = () => {
  // Assuming notifications is an array of notification strings
  const notifications = ["Notification 1", "Notification 2", "Notification 3"];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '35%', backgroundColor: '#A1CCD1', padding: '20px', position: 'relative' }}>
        <h2 style={{ color: '#000', marginBottom: '10px' }}>Current Notifications</h2>
        {notifications.map((notification, index) => (
          <div key={index} style={{ backgroundColor: '#F4F2DE', padding: '10px', marginBottom: '10px' }}>
            <p>{notification}</p>
          </div>
        ))}
        <div style={{ backgroundColor: '#F4F2DE', padding: '10px', marginTop: '20px', position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
          <button style={{ backgroundColor: '#F4F2DE', color: '#000', padding: '10px 20px' }}>Back</button>
        </div>
      </div>
      <div style={{ width: '65%', padding: '20px' }}>
        <h1>View Notifications</h1>
        {/* Add your content for the right side here */}
      </div>
    </div>
  );
};

export default ViewNotifications;
