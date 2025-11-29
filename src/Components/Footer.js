import React from "react";
import "../Styles/Footer.css";
import { FaInstagram, FaFacebookF, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      
      <div className="footer-top">
        <h2 className="footer-title">Eventify</h2>
        <p className="footer-desc">
          Creating unforgettable moments for every occasion.
        </p>
      </div>

      <div className="footer-links">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/services">Services</a>
        </div>

        <div className="footer-section">
          <h3>Events</h3>
          <a href="/birthdays">Birthdays</a>
          <a href="/weddings">Weddings</a>
          <a href="/proms">Proms</a>
          <a href="/parties">Parties</a>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="footer-contact">
            <FaEnvelope /> <span>eventify@gmail.com</span>
          </div>
          <div className="footer-contact">
            <FaPhoneAlt /> <span>+961 70 000 000</span>
          </div>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="footer-socials">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Eventify — All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
