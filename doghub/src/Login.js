import React, { useState } from 'react';
import './Login.css'; 


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle the login logic here
    console.log(email, password);
  };

  return (
    <div className="login-screen">
      <h1>Log In</h1>
      <div className='login-image-background'>
      <img src={'./img/LoginIcon.svg'} alt="Login Icon" className="login-icon" />
      </div>
      <form className="login-form">
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
        />
        <button type="button" onClick={handleLogin}>Log In</button>
        <button type="button">Back</button>
      </form>
    </div>
  );
};

export default LoginScreen;
