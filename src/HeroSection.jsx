import React, { useEffect, useRef } from "react";
import "./HeroSection.css";
import forkliftImage from "./assets/truck.webp";

const HeroSection = () => {
  const buttonRef = useRef(null);
    useEffect(() => {
      // Создаем скрипт Bitrix
      const script = document.createElement('script');
      script.dataset.b24Form = 'click/48/clb435';
      script.dataset.skipMoving = 'true';
      script.innerHTML = `
        (function(w,d,u){
          var s=d.createElement('script');
          s.async=true;
          s.src=u+'?'+(Date.now()/180000|0);
          var h=d.getElementsByTagName('script')[0];
          h.parentNode.insertBefore(s,h);
        })(window,document,'https://cdn-ru.bitrix24.ru/b6258443/crm/form/loader_48.js');
      `;
  
      // Вставляем скрипт перед кнопкой
      if (buttonRef.current && buttonRef.current.parentNode) {
        buttonRef.current.parentNode.insertBefore(script, buttonRef.current);
      }
  
      return () => {
        // Удаляем скрипт при размонтировании компонента
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }, []);

  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>Welcome to Hamburg Logistics Solutions
        </h1>
        <p>
        Your trusted partner for seamless fulfillment, storage, and logistics in the heart of Hamburg. We streamline your operations so you can focus on growing your business.
        </p>
        <button ref={buttonRef} className="hero-button">Request a Quote</button>
        <div className="indicator"> </div>
      </div>
      <div className="hero-image">
        <img src={forkliftImage} alt="Gabelstapler mit Ware" />
      </div>
    </section>
  );
};

export default HeroSection;
