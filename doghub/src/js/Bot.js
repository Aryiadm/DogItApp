import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../css/Bot.css';
import { useAuth } from './AuthContext';  

const Bot = () => {
  const navigate = useNavigate(); 
  const handleClick = () => {
    navigate('/chatbot'); 
  };
  const { user, logout } = useAuth();
  return (
    
    <div className={user ? `bot-floater` : "hidden"} onClick={handleClick}>
      <img
        src={`${process.env.PUBLIC_URL}/img/AIBot.svg`}
        alt="AI Bot"
        className="bot-image"
      />
    </div>
  );
};

export default Bot;
