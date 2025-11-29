import React from "react";
import "../Styles/Home.css";
import heroImg from "../Assets/hero.jpg"; // change path to your image

function Home() {
  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay"></div>

        <img src={heroImg} alt="Event" className="hero-image" />

        <div className="hero-content">
          <h1 className="hero-title">Plan. Celebrate. Remember.</h1>
          <p className="hero-subtitle">
            We bring your dreams to life with unforgettable events.
          </p>

          <a href="/contact" className="hero-btn">Book Your Event</a>
        </div>
      </section>

      {/* FEATURES PREVIEW */}
      <section className="features-section">
        <h2 className="features-title">What We Offer</h2>

        <div className="features-grid">
          <div className="feature-card">
            <h3>Birthdays</h3>
            <p>Creative themes, decoration, and party planning.</p>
          </div>

          <div className="feature-card">
            <h3>Weddings</h3>
            <p>Elegant planning for your special day.</p>
          </div>

          <div className="feature-card">
            <h3>Proms</h3>
            <p>Make your night magical and stylish.</p>
          </div>

          <div className="feature-card">
            <h3>Parties</h3>
            <p>We turn every idea into a celebration.</p>
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="about-preview">
        <h2>Why Choose Us?</h2>
        <p>
          Our team combines creativity, organization, and passion to transform
          your event into an unforgettable experience.  
          Your vision — our mission.
        </p>
        <a href="/about" className="learn-more-btn">Learn More</a>
      </section>
    </div>
  );
}

export default Home;
