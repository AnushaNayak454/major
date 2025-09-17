import React, { useState } from "react";
import Navbar from "../components/Navbar";
import AuthModal from "../components/AuthModal";
import "../styles/Home.css";
import helmetImg from "../assets/IMAGE.jpg"; 

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Navbar onOpenAuth={() => setShowModal(true)} />
      {showModal && <AuthModal onClose={() => setShowModal(false)} />}

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-card">
          <img
            src={helmetImg}
            alt="Smart Helmet"
          />
          <h2>Smart Construction Helmet</h2>
          <p>
            Our Smart Helmet ensures worker safety with real-time monitoring of
            gas levels, accident detection, and health tracking. Built to save
            lives on construction sites.
          </p>
          <button onClick={() => alert("Go to Dashboard page")}>
            Go to Dashboard
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-box">Accident Detection</div>
          <div className="feature-box">Gas Monitoring</div>
          <div className="feature-box">Temperature Check</div>
          <div className="feature-box">Location Tracking</div>
          <div className="feature-box">Health Monitoring</div>
          <div className="feature-box">Emergency Alerts</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
