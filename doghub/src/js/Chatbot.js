import React, { useState, useEffect } from 'react';
import "../css/Chatbot.css"
import { useAuth } from './AuthContext';
import Message from './Message';

const Chatbot = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function formatTime(timeString) {
    const [time, period] = timeString.split(' ');

    const [hours, minutes] = time.split(':');

    const formattedTime = `${hours}:${minutes}${period}`;

    return formattedTime;
}

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') {
      return; 
    }
    const userInput = inputValue;
    setInputValue(''); 

    const newMessage = {
      text: inputValue,
      sender: 'user', 
      timestamp: formatTime(new Date().toLocaleTimeString()),
    };
    const formattedMessages = messages.map(msg => {
      const speaker = msg.sender === 'bot' ? 'Bot' : 'User';
      return `${speaker}: ${msg.text}`;
    }).join('\n');

    setMessages(prevMessages => [...prevMessages, newMessage]);

    try {
      const response = await fetch(
        'https://noggin.rea.gent/scattered-fowl-1658',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer rg_v1_o46doxj5m2j9ymgu1748w01khg99jwnloyz2_ngk',
          },
          body: JSON.stringify({

            "currentInput": userInput,
            "chathistory": formattedMessages,
          }),
        }
      ).then(response => response.text());

      setInputValue(''); 
      const botMessage = {
        text: response,
        sender: 'bot', 
        timestamp: formatTime(new Date().toLocaleTimeString()),
      };

      
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error fetching response:', error);

    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-window">
        <div className="chatbox-welcome">
        <img
            src={`${process.env.PUBLIC_URL}/img/AIBot.svg`}
            alt="AI Bot"
            className="welcome-avatar"
          />
        <div className="chatbox-welcome-text">
        {user ? (
            <h2>Welcome {user}</h2>
          ) : (
            <h2>Welcome!</h2>
          )}
        <h4>How can DogIt AI bot assist today?</h4>
          </div>
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
              {}
            </div>
          </div>
          {}
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
          {}
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