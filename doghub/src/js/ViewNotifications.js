import React, { useState, useEffect } from 'react';
import '../css/ViewNotifications.css';
import { getNotificationsFromStorage, saveNotificationsToStorage } from './NotificationList'; 

const ViewNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [notification, setNotification] = useState(null); 
  useEffect(() => {
    const storedNotifications = getNotificationsFromStorage();
    setNotifications(storedNotifications);
  }, []);

  const removeNotification = (id) => {
    const updatedNotifications = notifications.filter(notification => notification.id !== id);
    setNotifications(updatedNotifications);
    saveNotificationsToStorage(updatedNotifications);
    setNotification(null); 
  };

  const displayNotification = (notification) => {
    setNotification(notification);
  };

  return (
    <div className="notifications-container">
      <div className="notifications-list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h2 style={{ textAlign: 'center' }}>Current Notifications</h2>
        {notifications.map((notification, index) => (
          
          <div key={index} className="notification-item">
            <div className="notification-name-container">
            <span className="notification-name">{notification.notificationName}</span>
            </div>
            <div className='notification-buttons'>
              <button className="remove-button" onClick={() => removeNotification(notification.id)}>Mark as Read</button>
              <button className="display-button" onClick={() => displayNotification(notification)}>View</button>
              </div>
          </div>
        ))}
      </div>
      <div className="notification-display">
        {notification && (
          <div className="notification-copy-container">
          {notification && (
            <div className="notifications-box">
              <p><strong>Notification Name:</strong> {notification.notificationName}</p>
              <p><strong>Message:</strong> {notification.message}</p>
              <p><strong>Event Time:</strong> {notification.eventTime}</p>
              {/* <p><strong>Notification Received:</strong> {notificationCopy.notificationReceived}</p> */}
              <p><strong>Repeat:</strong> {notification.repeat}</p>
            </div>
          )}
        </div>
        )}
      </div>
    </div>
  );
};

export default ViewNotifications;
