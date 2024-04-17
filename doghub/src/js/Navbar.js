import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import { useAuth } from './AuthContext';  // Make sure useAuth is correctly imported

const NavItem = ({ to, text, onClick }) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault(); // Prevent default action if there is an onClick handler
      onClick(e);  // Execute the custom onClick function
    }
  };

  return (
    <li onClick={handleClick}>
      <div className="nav-item">
        <Link to={to} className="nav-link">{text}</Link>
      </div>
    </li>
  );
};

const NavItemWithDropdown = ({ mainTo, mainText, dropdownItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <div className="nav-item">
        <Link to={mainTo} className="nav-link">{mainText}</Link>
        {isOpen && (
          <div className="dropdown" style={{ display: 'block' }}> 
            <ul>
              {dropdownItems.map((item, index) => (
                <NavItem key={index} to={item.to} text={item.text} onClick={item.onClick} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </li>
  );
};

const Navbar = () => {
  const { user, logout } = useAuth();
  const handleLogout = (event) => {
    event.preventDefault(); 
    logout();  
  };
  return (
    <div className="nav-bar">
      <ul className="nav-left">
        <div className="app-logo-group">
      <Link to="/" className="app-logo-link">
          <img className="app-logo" src={`${process.env.PUBLIC_URL}/img/DogItLogo.svg`} alt="App Logo" />
        </Link>
        </div>
      </ul>
      <ul className="nav-right">
      <NavItem to="/records" text="Records" />
        <NavItem to="/meet" text="Meet" />
        <NavItem to="/notifications" text="Notifications" />
        <NavItemWithDropdown 
          mainTo={user ? "/profile" : "/login"} 
          mainText={user ? user : "Login"}
          dropdownItems={user ? [
            { to: "/meet", text: "Meet" },
            { to: "#", text: "Logout", onClick: handleLogout }  
          ] : [
            { to: "/login", text: "Login" },
            { to: "/signup", text: "Signup" }
          ]}
        />
      </ul>
    </div>
  );
};

export default Navbar;
