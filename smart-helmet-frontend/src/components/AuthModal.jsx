import React from "react";
import "./AuthModal.css";

const AuthModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Close button */}
        

        {/* Heading */}
        <h2>Login/Sign Up</h2>

        {/* Inputs */}
        <input type="text" placeholder="Username" className="input-field"/>
        <input type="email" placeholder="Email Address" className="input-field"/>
        <input type="password" placeholder="Password" className="input-field"/>

        {/* Button */}
        <button>Submit</button>
      </div>
      <button className="modal-close" onClick={onClose}>✖</button>
    </div>
  );
};

export default AuthModal;
