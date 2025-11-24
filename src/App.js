import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Features from "./Components/Features";
import Contact from "./Components/ContactUs";
import Dynamic from "./Components/Dynamic";
import Footer from "./Components/Footer";


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
        </Routes>
      </div>
<Footer />
    </Router>
  );
}

export default App;
