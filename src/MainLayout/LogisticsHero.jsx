import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './LogisticsHero.css';
import { workerTwo } from '../assets';

const LogisticsHero = ({ isAppLoaded }) => {
  console.log('isAppLoaded in LogisticsHero:', isAppLoaded); // Логируем isAppLoaded
  const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('useEffect triggered, isAppLoaded:', isAppLoaded); // Логируем
    if (!isAppLoaded) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('Element is intersecting, setting isVisible to true'); // Логируем
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (contentRef.current) {
      console.log('Observing element:', contentRef.current); // Логируем
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, [isAppLoaded]);

  console.log('isVisible:', isVisible); // Логируем состояние isVisible

  return (
    <div className="hero-container">
      <div
        className='hero-content fade-in-left'
        ref={contentRef}
      >
        <h1>Willkommen bei Hamburg Logistics Solutions</h1>
        <p>
          Ihr zuverlässiger Partner für reibungsloses Fulfillment, Lagerung und
          Logistik im Herzen von Hamburg. Wir rationalisieren Ihre Abläufe,
          damit Sie sich auf das Wachstum Ihres Unternehmens konzentrieren
          können.
        </p>
        <div className="hero-buttons">
          <button className="btn ">Angebot anfordern</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={workerTwo} alt="Hamburg Logistics" />
      </div>
    </div>
  );
};

LogisticsHero.propTypes = {
  isAppLoaded: PropTypes.bool.isRequired,
};

export default LogisticsHero;