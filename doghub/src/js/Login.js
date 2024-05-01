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



  const hashPassword = async (password) => {
    const msgBuffer = new TextEncoder().encode(password); 
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    return hashHex;
  };



  const handleLogin = async () => {
    const storedHashedPassword = localStorage.getItem(email);
  
    if (storedHashedPassword) {
      const hashedInputPassword = await hashPassword(password);
      if (hashedInputPassword === storedHashedPassword) {
        login(email);
        setLoginMessage(`Welcome, ${email.split('@')[0]}!`);
        navigate('/');
      } else {
        setLoginMessage('Invalid email or password.');
      }
    } else {
      setLoginMessage('Account not found or invalid email.');
    }
  };
  
  const handleSignUp = () => {
    navigate('/signup');
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
            
            <button type="button" onClick={handleSignUp}>Need an account? Sign up</button>
            
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
