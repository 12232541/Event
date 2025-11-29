import React, { useState } from "react";
import "../Styles/NavBar.css";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-left">
        <a href="/" className="logo">Eventify</a>
      </div>

      <div className="nav-center">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li className="dropdown" onClick={() => setOpen(!open)}>
            <span className="drop-btn">Features ▾</span>
            <ul className={`dropdown-menu ${open ? "show" : ""}`}>
              <li><a href="/birthdays">Birthdays</a></li>
              <li><a href="/wedding">Weddings</a></li>
              <li><a href="/proms">Proms</a></li>
              <li><a href="/parties">Parties</a></li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="nav-right">
        <a href="/login" className="btn login-btn">Login</a>
        <a href="/signup" className="btn signup-btn">Sign Up</a>
      </div>
    </nav>
  );
}