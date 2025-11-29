import React from "react";
import "../Styles/Popup.css";

const WelcomePopup = ({ username, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h2>Welcome 🎉</h2>
        <p>Hello, <strong>{username}</strong>! We're happy to have you here.</p>
        <button onClick={onClose}>Continue</button>
      </div>
    </div>
  );
};

export default WelcomePopup;
