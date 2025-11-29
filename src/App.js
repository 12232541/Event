import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Navbar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Features from "./Components/Features";
import Contact from "./Components/ContactUs";
import Dynamic from "./Components/Dynamic";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import BirthdayForm from "./Pages/BirthdayForm";
import WeddingForm from "./Pages/WeddingForm";
import PromForm from "./Pages/PromForm";
import PartiesForm from "./Pages/PartiesForm";
import './index.css';
import './Styles/Styles.css';
import './Styles/Main.css';
import './Styles/Hero.css';

function App() {
  return (
    
    <Router>
      <Navbar />

      <div className="mt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/event/:id" element={<Dynamic />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/birthdays" element={<BirthdayForm />} />
          <Route path="/weddings" element={<WeddingForm />} />
          <Route path="/prom" element={<PromForm />} />
          <Route path="/parties" element={<PartiesForm />} />
        </Routes>
      </div>
    <Footer />
    </Router>

    
  );
}

export default App;
