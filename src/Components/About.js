import React from "react";
import "../Styles/About.css";

const About = () => {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Crafting unforgettable events with creativity, passion, and precision.</p>
      </section>

      {/* MISSION SECTION */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          We aim to transform your vision into a stunning reality through expert planning,
          flawless organization, and exceptional attention to detail. Every celebration
          should feel magical — and we make that happen.
        </p>
      </section>

      {/* STATS SECTION */}
      <section className="stats-section">
        <div className="stat-card">
          <h3>450+</h3>
          <p>Events Organized</p>
        </div>
        <div className="stat-card">
          <h3>120+</h3>
          <p>Weddings</p>
        </div>
        <div className="stat-card">
          <h3>300+</h3>
          <p>Parties & Proms</p>
        </div>
        <div className="stat-card">
          <h3>98%</h3>
          <p>Client Satisfaction</p>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="timeline-section">
        <h2>Our Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <span className="year">2021</span>
            <p>Our company was founded with a passion for transforming events.</p>
          </div>
          <div className="timeline-item">
            <span className="year">2022</span>
            <p>Expanded into weddings and large-scale celebrations.</p>
          </div>
          <div className="timeline-item">
            <span className="year">2023</span>
            <p>Successfully organized 300+ events across the region.</p>
          </div>
          <div className="timeline-item">
            <span className="year">2024</span>
            <p>Launched new creative design and digital planning tools.</p>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="team-section">
        <h2>Meet Our Team</h2>

        <div className="team-container">
          
          {/* LEA */}
          <div className="team-card">
            <div
              className="team-photo"
              style={{ backgroundImage: `url("https://images.unsplash.com/photo-1502685104226-ee32379fefbe")` }}
            ></div>
            <h3>Lea</h3>
            <p>Lead Event Planner</p>
          </div>

          {/* MARIA */}
          <div className="team-card">
            <div
              className="team-photo"
              style={{ backgroundImage: `url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d")` }}
            ></div>
            <h3>Maria</h3>
            <p>Creative Designer</p>
          </div>

          {/* AMAL */}
          <div className="team-card">
            <div
              className="team-photo"
              style={{ backgroundImage: `url("https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e")` }}
            ></div>
            <h3>Amal</h3>
            <p>Client Relations Manager</p>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <h2>Ready to Plan Your Event?</h2>
        <p>Let’s bring your dream celebration to life.</p>
        <a href="/contact" className="cta-button">Contact Us</a>
      </section>

    </div>
  );
};

export default About;
