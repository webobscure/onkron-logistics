import React from 'react'
import Header from '../../Header'
import Footer from '../../components/Footer/Footer'

import './Marketplaces.css'
import { useLanguage } from '../../context/LanguageContext';
export default function Marketplaces() {
  const { translations } = useLanguage();
  return (
    <>
    <Header />
    <section className="marketplace-section">
    <h2>{translations.offers_text}</h2>
    <p>
      {translations.supp_markets}
    </p>
     <p>
      {translations.we_help}
    </p>
    <div className="platform-list">
      <div className="platform-item">Amazon</div>
      <div className="platform-item">eBay</div>
      <div className="platform-item">OTTO</div>
      <div className="platform-item">Kaufland</div>
      <div className="platform-item">Cdiscount</div>
      <div className="platform-item">Real.de / Kaufland</div>
      <div className="platform-item">Rakuten</div>
      <div className="platform-item">Wayfair</div>
      <div className="platform-item">Etsy</div>
    </div>
    <p>
      {translations.what_we_offer}
    </p>
    <ul className="services-list">
      <li>{translations.what_we_offer_1}</li>
      <li>{translations.what_we_offer_2}</li>
      <li>{translations.what_we_offer_3}</li>
      <li>{translations.what_we_offer_4}</li>
      <li>{translations.what_we_offer_5}</li>
    </ul>

    <div className="highlight">
      {translations.we_produce}
    </div>
  </section>
    <Footer/>
    </>
  )
}
