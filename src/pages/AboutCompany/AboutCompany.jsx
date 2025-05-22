import React from 'react'
import Header from '../../Header'
import Footer from '../../components/Footer/Footer'
import './AboutCompany.css'
import warehouse1 from '../../assets/warehouse_1.webp'
import warehouse2 from '../../assets/warehouse_2.webp'
import warehouse3 from '../../assets/warehouse_3.webp'
import { useLanguage } from '../../context/LanguageContext'
export default function AboutCompany() {
  const {translations} = useLanguage();
  return (
    <>
    <Header/>
    <section className="about-company-section">
      <div className="about-container">
        <h2>{translations.o_nas}</h2>
        <p>
          {translations.we_parnter}.{translations.our_company}
        </p>

        <div className="warehouse-features">
          <h3>{translations.chars}</h3>
          <ul>
            <li>{translations.two_thousand}</li>
            <li>{translations.modern}</li>
            <li>{translations.tech}</li>
            <li>{translations.video_system}</li>
            <li>{translations.auto_system}</li>
          </ul>
        </div>

        <div className="about-benefits">
          <h3>{translations.why_us}</h3>
          <ul>
            <li>{translations.many_years}</li>
            <li>{translations.individual}</li>
            <li>{translations.modern_tech}</li>
            <li>{translations.garant}</li>
          </ul>
        </div>

        <div className="about-photos">
          <h3>{translations.our_sklad}</h3>
          <div className="about-photo-gallery">
            <img src={warehouse1} alt="Склад 1" className='grid-image'/>
            <img src={warehouse2} alt="Склад 2" className='grid-image'/>
            <img src={warehouse3} alt="Склад 3" className='grid-image'/>
          </div>
        </div>

        <div className="about-address">
          <h3>Address:</h3>
          <address>
            <strong>Büro und Lager</strong><br />
            BMGG EUROPE GMBH<br />
            Billbrookdeich 36<br />
            22113 Hamburg
          </address>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}
