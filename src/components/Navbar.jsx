import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 fixed-top">
      <div className="container">
        <img
          src="./logo.png"
          alt="Logo"
          style={{ height: "40px", width: "40px", objectFit: "contain", marginLeft: "0px", marginRight: "8px" }}
        />
        <a className="navbar-brand fw-bold text-success" href="#">
          Sri Vinayaga Foundation
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-lg-center">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/ourteam">Our Team</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/construction-package">Construction Package</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/design-package">Design Package</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/ourworks">Our Works</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/interior">Interior</NavLink></li>
            <li className="nav-item bg-success rounded"><NavLink className="nav-link text-white contact-link" to="/contact-us">Contact Us</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
