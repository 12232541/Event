import React, { useState } from "react";
import "../Styles/BirthdayForm.css";

const BirthdayForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    theme: "",
    guests: "",
    requests: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Birthday plan submitted!");
  };

  return (
    <div className="birthday-container">
      <h1 className="birthday-title">
        🎂 Plan an Unforgettable Birthday
      </h1>

      <p className="birthday-subtitle">
        Tell us what kind of magical celebration you have in mind!
      </p>

      <form className="birthday-form" onSubmit={handleSubmit}>

        {/* NAME */}
        <div className="form-group">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Ex: Sarah Thompson"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* AGE */}
        <div className="form-group">
          <label>Birthday Person's Age</label>
          <input
            type="number"
            name="age"
            placeholder="Ex: 12, 25, 40..."
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        {/* THEME */}
        <div className="form-group">
          <label>Preferred Theme</label>
          <input
            type="text"
            name="theme"
            placeholder="Ex: Disney, Casino, Glow Party..."
            value={formData.theme}
            onChange={handleChange}
          />
        </div>

        {/* GUESTS */}
        <div className="form-group">
          <label>Number of Guests</label>
          <input
            type="number"
            name="guests"
            placeholder="Ex: 20–200"
            value={formData.guests}
            onChange={handleChange}
          />
        </div>

        {/* SPECIAL REQUESTS */}
        <div className="form-group">
          <label>Special Requests</label>
          <textarea
            name="requests"
            placeholder="Cake design, decoration preferences, surprises…"
            rows="5"
            value={formData.requests}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* FANCY BUTTON */}
        <input
          type="submit"
          value="Submit Birthday Plan"
          className="fancy-submit-btn"
        />

      </form>
    </div>
  );
};

export default BirthdayForm;
