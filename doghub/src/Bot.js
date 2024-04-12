import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Bot.css';

const Bot = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleClick = () => {
    navigate('/chatbot'); // Navigate to '/chatbot' when clicked
  };

  return (
    <div className="bot-floater" onClick={handleClick}>
      <img
        src={`${process.env.PUBLIC_URL}/img/AIBot.svg`}
        alt="AI Bot"
        className="bot-image"
      />
    </div>
  );
};

export default Bot;
