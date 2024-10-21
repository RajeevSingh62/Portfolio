import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='nav'>
      <div className="left">
        Portfolio
      </div>
      <div className={`right ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>About</Link>
          </li>
          <li>
            <Link to="/project" onClick={toggleMenu}>Projects</Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>Contact me</Link>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
