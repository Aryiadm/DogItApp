import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Navbar.css';
import { useAuth } from './AuthContext';  

const NavItem = ({ to, text, onClick }) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault(); 
      onClick(e); 
    }
  };

  return (
    <li onClick={handleClick}>
      <Link to={to} className="nav-link">
        <div className="nav-item">
          {text}
        </div>
      </Link>
    </li>
  );
};

const NavItemWithDropdown = ({ mainTo, mainText, isUrl, dropdownItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <div className="nav-item">
        {isUrl ? (
          <Link to={mainTo} className="nav-link">
            <img src={mainText} alt="Main Text" className="notification-logo" />
          </Link>
        ) : (
          <Link to={mainTo} className="nav-link">{mainText}</Link>
        )}
        {isOpen && (
          <div className="dropdown"> 
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
      {user ? 
      <ul className="nav-right">
        <NavItemWithDropdown 
          mainTo={"/viewNotifications"} 
          mainText={`${process.env.PUBLIC_URL}/img/Bell_Two.png`}
          isUrl={true}
          dropdownItems={user ? [
            { to: "/viewNotifications", text: "View" },
            { to: "/createNotifications", text: "Create" },
          ] : [
            { to: "/login", text: "Login" },
            { to: "/signup", text: "Signup" }
          ]}
        />
        <NavItem to="/records" text="Records" />
        <NavItem to="/meet" text="Meet" />
        <NavItemWithDropdown 
          mainTo={user ? "/" : "/login"} 
          mainText={user ? user : "Login"}
          isUrl={false}
          dropdownItems={user ? [
            { to: "#", text: "Logout", onClick: handleLogout }  
          ] : [
            { to: "/login", text: "Login" },
            { to: "/signup", text: "Signup" }
          ]}
        />
      </ul>
: (
  <div className="nav-right logged-out">
    <NavItem to="/login" text="Login" />
    <NavItem to="/signup" text="Signup" />
  </div>
)}
    </div>
  );
};

export default Navbar;
