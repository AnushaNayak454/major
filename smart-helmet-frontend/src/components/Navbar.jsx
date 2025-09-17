import React from "react";
import "../styles/Home.css";

const Navbar = ({ onOpenAuth }) => {
  return (
    <nav className="navbar">
      <div className="navbar-title">Apthabhadav</div>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <button onClick={onOpenAuth}>Sign Up / Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
