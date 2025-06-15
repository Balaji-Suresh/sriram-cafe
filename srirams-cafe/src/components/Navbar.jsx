import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.svg";
import closeIcon from "../assets/icons/close.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Sri Ram's Cafe Logo" height="40" className="me-2" />
          <span className="text-success fw-bold">Sri Ram's Cafe</span>
        </Link>
        <button 
          className="navbar-toggler d-lg-none" 
          type="button" 
          onClick={toggleMenu}
          aria-controls="navbarNav" 
          aria-expanded={isOpen ? "true" : "false"} 
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <img src={closeIcon} alt="Close menu" width="24" height="24" />
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/menu" onClick={() => setIsOpen(false)}>Menu</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/subscription" onClick={() => setIsOpen(false)}>Subscribe</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/account" onClick={() => setIsOpen(false)}>My Account</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;