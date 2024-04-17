import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../css/Login.css';
import { useAuth } from './AuthContext';  // Import useAuth hook

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [isLogin, setIsLogin] = useState(true); 
  const { login } = useAuth(); 
  const navigate = useNavigate()

  const [users, setUsers] = useState({
    'mawil0721@gmail.com': 'password123',
    'admin@site.com': 'admin2024'
  });

  const handleLogin = () => {
    if (users[email] && users[email] === password) {
      login(email);  // Call login function with the email
      setLoginMessage(`Welcome, ${email.split('@')[0]}!`);
      navigate('/');

    } else {
      setLoginMessage('Invalid email or password.');
    }
  };

  const handleSignUp = () => {
    if (users[email]) {
      setLoginMessage('Email already in use.');
    } else {
      setUsers(prev => ({ ...prev, [email]: password }));
      setLoginMessage('Registration successful. Please log in.');
      setIsLogin(true);  // Switch back to the login form after registration
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setLoginMessage('');
  };

  return (
    <div className="login-screen">
      <h1>{isLogin ? 'Log In' : 'Sign Up'}</h1>
      <div className='login-image-background'>
      <img src={`${process.env.PUBLIC_URL}/img/LoginIcon.svg`} alt="Login Icon" className="login-icon" />
      </div>
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
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
        {isLogin ? (
          <>
            <button type="button" onClick={handleLogin}>Log In</button>
            
            <button type="button" onClick={toggleForm}>Need an account? Sign up</button>
            
          </>
        ) : (
          <>
            <button type="button" onClick={handleSignUp}>Sign Up</button>
            <button type="button" onClick={toggleForm}>Have an account? Log in</button>
          </>
        )}
        {loginMessage && <div className="login-message">{loginMessage}</div>}
      </form>
    </div>
  );
};

export default LoginScreen;
