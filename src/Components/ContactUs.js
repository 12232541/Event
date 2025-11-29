import React from "react";
import "../Styles/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contactus-wrapper">

      {/* TOP HEADER */}
      <div className="contactus-header">
        <h1>Contact Us</h1>
        <p>Your vision, our mission — Let's create unforgettable moments.</p>
      </div>

      {/* MAIN SECTION */}
      <div className="contactus-content">

        {/* LEFT CARD */}
        <div className="contactus-card left-card">
          <h2>Get In Touch</h2>
          <p className="contactus-desc">
            We're here to support you with any event — weddings, proms,
            parties, corporate events, and more.
          </p>

          <div className="contactus-info">
            <p>📞 +961 70 00 00 00</p>
            <p>📧 eventify.management@gmail.com</p>
            <p>📍 Beirut, Lebanon</p>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="contactus-card right-card">
          <h2>Send Us a Message</h2>

          <form className="contactus-form">
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label>Your Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label>Your Message</label>
              <textarea placeholder="Write your message here..."></textarea>
            </div>

            <button className="contactus-btn">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
