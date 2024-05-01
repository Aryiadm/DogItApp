import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../css/Signup.css';
import { useAuth } from './AuthContext';  

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupMessage, setSignupMessage] = useState('');
  const [name, setName] = useState('');
  const [users, setUsers] = useState({
    'mawil0721@gmail.com': 'password123',
    'admin@site.com': 'admin2024'
  });
  const { login } = useAuth(); 
  const navigate = useNavigate();


  const hashPassword = async (password) => {
    // First, encode the password as UTF-8
    const msgBuffer = new TextEncoder().encode(password); 

    // Hash the password
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    // Convert the ArrayBuffer to string using hexadecimal representation
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    return hashHex;
  };

  const handleSignUp = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(email)) {
      setSignupMessage('Please enter a valid email address.');
    } else if (!password.trim()) {
      setSignupMessage('Please enter a password.');
    } else if (password !== confirmPassword) {
      setSignupMessage('Passwords do not match.');
    } else {
  
      try {
        const hashedPassword = await hashPassword(password);
        localStorage.setItem(email, hashedPassword);
        setSignupMessage('Registration successful. Please log in.');
        login(name);  
        navigate('/');
      } catch (error) {
        console.error('Password hashing failed:', error);

      }
    }
  };

  const handleBackToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="signup-screen">
      <h1>Sign Up</h1>
      <div className='login-image-background'>
        <img src={`${process.env.PUBLIC_URL}/img/LoginIcon.svg`} alt="Signup Icon" className="signup-icon" />
      </div>
      <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
      <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Name" 
        />
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
        <input 
          type="password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          placeholder="Confirm Password"
        />
        <button type="button" onClick={handleSignUp}>Sign Up</button>
        <button type="button" onClick={handleBackToLogin}>Back to Login</button>
        {signupMessage && <div className="signup-message">{signupMessage}</div>}
      </form>
    </div>
  );
};

export default SignupScreen;
