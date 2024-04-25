import React, { useState } from 'react';

const CreateNotifications = () => {
  const [showTextbox, setShowTextbox] = useState(false);
  const [notificationName, setNotificationName] = useState('');
  const [message, setMessage] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [notificationReceived, setNotificationReceived] = useState('');
  const [repeat, setRepeat] = useState('');
  const [notificationCopy, setNotificationCopy] = useState('');

  const handleCreateNotification = () => {
    setShowTextbox(true);
  };

  const handleCancel = () => {
    setShowTextbox(false);
    setNotificationName('');
    setMessage('');
    setEventTime('');
    setNotificationReceived('');
    setRepeat('');
  };

  const handleSave = () => {
    // Here you can implement the logic to save the notification
    const notificationData = {
      notificationName,
      message,
      eventTime,
      notificationReceived,
      repeat
    };
    console.log(notificationData); // For testing, you can replace this with actual logic
    setNotificationCopy(JSON.stringify(notificationData, null, 2)); // Convert data to string for display
    setShowTextbox(false);
    setNotificationName('');
    setMessage('');
    setEventTime('');
    setNotificationReceived('');
    setRepeat('');
  };

  return (
    <div>
      {showTextbox ? (
        <div>
          <label>
            Notification Name:
            <input
              type="text"
              value={notificationName}
              onChange={(e) => setNotificationName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Message:
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <br />
          <label>
            Event Time:
            <input
              type="datetime-local"
              value={eventTime}
              onChange={(e) => setEventTime(e.target.value)}
            />
          </label>
          <br />
          <label>
            Notification Received (in minutes):
            <input
              type="number"
              value={notificationReceived}
              onChange={(e) => setNotificationReceived(e.target.value)}
            />
          </label>
          <br />
          <label>
            Repeat (in days):
            <input
              type="number"
              value={repeat}
              onChange={(e) => setRepeat(e.target.value)}
            />
          </label>
          <br />
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <button onClick={handleCreateNotification}>Create Notification</button>
      )}
      {notificationCopy && (
        <div style={{ border: '1px solid black', padding: '10px', marginTop: '20px' }}>
          <h2>New Notification:</h2>
          <pre>{notificationCopy}</pre>
        </div>
      )}
    </div>
  );
};

export default CreateNotifications;
