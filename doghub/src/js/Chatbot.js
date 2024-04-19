import React, { useState } from 'react';
import "../css/Chatbot.css"
import { useAuth } from './AuthContext';
import Message from './Message'; // Import the Message component



const Chatbot = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() === '') {
      return; // Do not send empty messages
    }

    const newMessage = {
      text: inputValue,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString(), // Example timestamp (you can customize this)
    };

    setMessages([...messages, newMessage]);
    setInputValue(''); // Clear the input value after sending the message
    // Additional logic to handle AI bot response (not implemented in this example)
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-window">
        <div className="chatbox-welcome">
          {user ? (
            <h1>Welcome {user}</h1>
          ) : (
            <h1>Welcome!</h1>
          )}
          <img
            src={`${process.env.PUBLIC_URL}/img/AIBot.svg`}
            alt="AI Bot"
            className="welcome-avatar"
          />
          <h4>How can DogIt AI bot assist today?</h4>
        </div>
        <div className="chatbox">
          <div className="chatbox-bar">
            <img
              src={`${process.env.PUBLIC_URL}/img/AIBot.svg`}
              alt="AI Bot"
              className="chatbox-avatar"
            />
            <div className='chatbox-bar-right'>
              <div className='user-image-background'>
                <img src={`${process.env.PUBLIC_URL}/img/LoginIcon.svg`} alt="User Avatar" className="user-avatar" />
              </div>
              <img src={`${process.env.PUBLIC_URL}/img/HamburgerMenu.svg`} alt="Hamburger Menu" className="hamburger-menu" />
            </div>
          </div>
          {/* Displaying chat messages */}
          <div className="chat-messages">
            {messages.map((message, index) => (
              <Message
                key={index}
                text={message.text}
                sender={message.sender}
                timestamp={message.timestamp}
              />
            ))}
          </div>
          {/* Input area to send messages */}
          <div className="message-input">
          <input
              type="text"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
