import React from "react";
import "./HeroSection.css";
import forkliftImage from "./assets/truck.webp";

const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>Willkommen bei Hamburg Logistics Solutions</h1>
        <p>
          Ihr zuverlässiger Partner für nahtlose Auftragsabwicklung, Lagerung
          und Logistik im Herzen von Hamburg. Wir optimieren Ihre Abläufe, damit
          Sie sich auf das Wachstum Ihres Unternehmens konzentrieren können.
        </p>
        <button className="hero-button">Angebot anfordern</button>
        <div className="indicator"> </div>
      </div>
      <div className="hero-image">
        <img src={forkliftImage} alt="Gabelstapler mit Ware" />
      </div>
    </section>
  );
};

export default HeroSection;
