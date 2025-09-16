import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-2 fixed-top m-0 p-0">
      <div className="container-fluid p-0 mt-0 mb-0"> {/* changed from container to container-fluid */}
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center fw-bold text-danger p-0 m-0" href="/">
          <img
            src="./newlogo.jpg"
            alt="Logo"
            style={{
              height: "70px",   // bigger logo for desktop
              objectFit: "contain",
              marginRight: "10px",
              pointerEvents: "none", // not clickable
            }}
          />
          <span className="brand-text ">Sri Vinayaga Foundation</span>
        </a>

        {/* Toggler Button for Mobile */}
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

        {/* Nav Items */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ourteam">Our Team</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/construction-package">Construction Package</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/design-package">Design Package</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ourworks">Our Works</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/interior">Interior</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="btn btn-success text-white rounded" to="/contact-us">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
