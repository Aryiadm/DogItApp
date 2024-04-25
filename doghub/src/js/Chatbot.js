import React, { useState, useEffect } from 'react';
import "../css/Chatbot.css"
import { useAuth } from './AuthContext';
import Message from './Message';

const Chatbot = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') {
      return; // Do not send empty messages
    }
    const userInput = inputValue;
    setInputValue(''); // Clear the input value

    const newMessage = {
      text: inputValue,
      sender: 'user', // Set sender as 'user' for the message being sent
      timestamp: new Date().toLocaleTimeString(),
    };
    const formattedMessages = messages.map(msg => {
      const speaker = msg.sender === 'bot' ? 'Bot' : 'User';
      return `${speaker}: ${msg.text}`;
    }).join('\n');

    // Add user's message to the chat
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
            // fill variables here.
            "currentInput": userInput,
            "chathistory": formattedMessages,
          }),
        }
      ).then(response => response.text());

      setInputValue(''); // Clear the input value
      const botMessage = {
        text: response,
        sender: 'bot', // Set sender as 'bot' for the bot's response
        timestamp: new Date().toLocaleTimeString(),
      };

      // Add bot's response to the chat
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error fetching response:', error);
      // Handle error if needed
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