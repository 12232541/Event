import React, { useState } from "react";
import "../Styles/PromForm.css";

const PromForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    schoolName: "",
    promTheme: "",
    guests: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your prom request has been submitted!");
  };

  return (
    <div className="prom-container">
      <h1 className="prom-title">Plan Your Perfect Prom Night ✨</h1>

      <form className="prom-form" onSubmit={handleSubmit}>
        
        <div>
          <label>Student Name</label>
          <input
            type="text"
            name="studentName"
            placeholder="Enter your name"
            value={formData.studentName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>School Name</label>
          <input
            type="text"
            name="schoolName"
            placeholder="Enter your school name"
            value={formData.schoolName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Preferred Theme</label>
          <input
            type="text"
            name="promTheme"
            placeholder="Ex: Hollywood, Neon, Masquerade..."
            value={formData.promTheme}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Number of Guests</label>
          <input
            type="number"
            name="guests"
            placeholder="Ex: 50–300"
            value={formData.guests}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Additional Message</label>
          <textarea
            name="message"
            placeholder="Decoration details, music preferences..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="prom-submit">Submit Prom Request</button>
      </form>
    </div>
  );
};

export default PromForm;
