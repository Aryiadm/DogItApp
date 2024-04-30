import React, { useState } from 'react';
import '../css/Notifications.css';
import { addNotification } from './NotificationList'; // Import addNotification from NotificationList.js

const CreateNotifications = () => {
  const [notificationName, setNotificationName] = useState('');
  const [message, setMessage] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [notificationReceived, setNotificationReceived] = useState('');
  const [repeat, setRepeat] = useState('');
  const [notificationCopy, setNotificationCopy] = useState('');

  const handleCancel = () => {
    resetState();
  };

  const handleSave = () => {
    const notificationData = {
      notificationName,
      message,
      eventTime,
      notificationReceived,
      repeat
    };
    setNotificationCopy(notificationData); // Setting notification copy with data
    addNotification(notificationData); // Adding notification
    resetState();
  };

  const resetState = () => {
    setNotificationName('');
    setMessage('');
    setEventTime('');
    setNotificationReceived('');
    setRepeat('');
  };

  return (
    <div className="container">
      <div className="notifications-container">
        <div className="notifications-box">
          <label>
            Notification Name:
            <input
              type="text"
              value={notificationName}
              onChange={(e) => setNotificationName(e.target.value)}
              className="input-field"
            />
          </label>
          <br />
          <label>
            Message:
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="input-field"
            />
          </label>
          <br />
          <label>
            Event Time:
            <input
              type="datetime-local"
              value={eventTime}
              onChange={(e) => setEventTime(e.target.value)}
              className="input-field"
            />
          </label>
          <br />
          <label>
            Notification Received (in minutes):
            <input
              type="number"
              value={notificationReceived}
              onChange={(e) => setNotificationReceived(e.target.value)}
              className="input-field"
            />
          </label>
          <br />
          <label>
            Repeat:
            <select
              value={repeat}
              onChange={(e) => setRepeat(e.target.value)}
              className="dropdown-content"
            >
              <option value="">Select</option>
              <option value="never">Never</option>
              <option value="once">Once</option>
              <option value="everyday">Every Day</option>
              <option value="everyweek">Every Week</option>
              <option value="everymonth">Every Month</option>
              <option value="everyyear">Every Year</option>
            </select>
          </label>
          <div className="button-container">
            <button onClick={handleCancel} className="cancel-button">Cancel</button>
            <button onClick={handleSave} className="save-button">Save</button>
          </div>
        </div>
      </div>
      <div className="notification-copy-container">
        {notificationCopy && (
          <div className="notifications-box">
            <h2>New Notification:</h2>
            <p><strong>Notification Name:</strong> {notificationCopy.notificationName}</p>
            <p><strong>Message:</strong> {notificationCopy.message}</p>
            <p><strong>Event Time:</strong> {notificationCopy.eventTime}</p>
            {/* <p><strong>Notification Received:</strong> {notificationCopy.notificationReceived}</p> */}
            <p><strong>Repeat:</strong> {notificationCopy.repeat}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateNotifications;
