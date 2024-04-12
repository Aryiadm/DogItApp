import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';




const Navbar = () => {
  return (
    <div className="nav-bar">
      <ul className="nav-left">
        {/* <NavItem to="/" text="Community" /> */}
        {/* <NavItem to="/stores" text="Stores" /> */}
        <NavItem to="/records" text="Records" />
        {/* <NavItem to="/profile" text="Profile" /> */}
      </ul>
      <ul className="nav-right">
        
        <NavItem to="/settings" text="Settings" />
        <NavItem to="/notifications" text="Notifications" />
        <NavItemWithDropdown 
          mainTo="/login" 
          mainText="Login"
          dropdownItems={[
            { to: "/login", text: "Login" },
            { to: "/signup", text: "Signup" }
          ]}
        />
      </ul>
    </div>
  );
};

const NavItem = ({ to, text }) => {
  return (
    <li>
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
          <div className="dropdown">
            <ul>
              {dropdownItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.to}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </li>
  );
};

export default Navbar;


