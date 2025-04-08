import React, { useEffect, useRef } from 'react'
import './HeroSection.css'
import forkliftImage from './assets/truck.webp'
import { useLanguage } from './context/LanguageContext.jsx'

const HeroSection = () => {
  const { translations } = useLanguage()
  const buttonRef = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.dataset.b24Form = 'click/48/clb435'
    script.dataset.skipMoving = 'true'
    script.innerHTML = `
      (function(w,d,u){
        var s=d.createElement('script');
        s.async=true;
        s.src=u+'?'+(Date.now()/180000|0);
        var h=d.getElementsByTagName('script')[0];
        h.parentNode.insertBefore(s,h);
      })(window,document,'https://cdn-ru.bitrix24.ru/b6258443/crm/form/loader_48.js');
    `

    if (buttonRef.current && buttonRef.current.parentNode) {
      buttonRef.current.parentNode.insertBefore(script, buttonRef.current)
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>{translations.hero_title}</h1>
        <p>{translations.hero_description}</p>
        <button ref={buttonRef} className="hero-button">
          {translations.hero_cta}
        </button>
        <div className="indicator"> </div>
      </div>
      <div className="hero-image">
        <img src={forkliftImage} alt="Gabelstapler mit Ware" />
      </div>
    </section>
  )
}

export default HeroSection
