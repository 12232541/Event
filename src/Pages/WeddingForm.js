import React, { useState } from "react";
import "../Styles/WeddingForm.css";

const WeddingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    partnerName: "",
    guests: "",
    date: "",
    theme: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your wedding request has been submitted successfully! 🎉💍");
  };

  return (
    <div className="wedding-container">
      <h2 className="wedding-title">Plan Your Dream Wedding 💍</h2>

      <form className="wedding-form" onSubmit={handleSubmit}>
        
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
        />

        <label>Partner's Name</label>
        <input
          type="text"
          name="partnerName"
          placeholder="Enter your partner's name"
          onChange={handleChange}
        />

        <label>Number of Guests</label>
        <input
          type="number"
          name="guests"
          placeholder="Expected number of guests"
          onChange={handleChange}
        />

        <label>Wedding Date</label>
        <input
          type="date"
          name="date"
          onChange={handleChange}
        />

        <label>Wedding Theme</label>
        <input
          type="text"
          name="theme"
          placeholder="Rustic, Royal, Beach…"
          onChange={handleChange}
        />

        <label>Additional Message</label>
        <textarea
          name="message"
          placeholder="Tell us more about your dream wedding…"
          onChange={handleChange}
        ></textarea>

        <button className="submit-btn" type="submit">
          <span className="btn-text">Submit Request</span>
        </button>
      </form>
    </div>
  );
};

export default WeddingForm;
