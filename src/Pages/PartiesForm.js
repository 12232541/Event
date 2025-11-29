import React, { useState } from "react";
import "../Styles/PartiesForm.css";

const PartiesForm = () => {
  const [formData, setFormData] = useState({
    hostName: "",
    partyType: "",
    guests: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your party request has been submitted!");
  };

  return (
    <div className="party-container">
      <h1 className="party-title">Plan Your Next Party 🎊</h1>

      <form className="party-form" onSubmit={handleSubmit}>
        
        <div>
          <label>Your Name</label>
          <input
            type="text"
            name="hostName"
            placeholder="Enter your name"
            value={formData.hostName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Party Type</label>
          <input
            type="text"
            name="partyType"
            placeholder="Ex: Graduation, Baby Shower, Theme Party…"
            value={formData.partyType}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Number of Guests</label>
          <input
            type="number"
            name="guests"
            placeholder="Ex: 20–200"
            value={formData.guests}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Party Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Additional Message</label>
          <textarea
            name="message"
            placeholder="Theme details, surprises, decorations…"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="party-submit">Submit Party Plan</button>
      </form>
    </div>
  );
};

export default PartiesForm;
