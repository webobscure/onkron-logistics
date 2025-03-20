import React from "react";
import "./HeroSection.css";
import forkliftImage from "./assets/truck.webp";

const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>Welcome to Hamburg Logistics Solutions
        </h1>
        <p>
        Your trusted partner for seamless fulfillment, storage, and logistics in the heart of Hamburg. We streamline your operations so you can focus on growing your business.
        </p>
        <button className="hero-button">Request a Quote</button>
        <div className="indicator"> </div>
      </div>
      <div className="hero-image">
        <img src={forkliftImage} alt="Gabelstapler mit Ware" />
      </div>
    </section>
  );
};

export default HeroSection;
