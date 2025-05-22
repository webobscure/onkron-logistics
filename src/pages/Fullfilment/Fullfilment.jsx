import React from 'react'
import Header from '../../Header'
import Footer from '../../components/Footer/Footer'
import './Fullfilment.css'
import { useLanguage } from '../../context/LanguageContext'

export default function Fullfilment() {
  const { translations } = useLanguage();

  return (
    <>
      <Header />
      <div className="container">
        <section>
          <p>{translations.we_fullfilment}</p>
        </section>

        <section>
          <h2>{translations.full}</h2>
          <div className="service-list">
            <div className="card">
              <h3>{translations.priemka}</h3>
              <ul>
                <li>{translations.priemka_1}</li>
                <li>{translations.priemka_2}</li>
                <li>{translations.priemka_3}</li>
              </ul>
            </div>
            <div className="card">
              <h3>{translations.storage}</h3>
              <ul>
                <li>{translations.storage_1}</li>
                <li>{translations.storage_2}</li>
                <li>{translations.storage_3}</li>
              </ul>
            </div>
            <div className="card">
              <h3>{translations.pakovka}</h3>
              <ul>
                <li>{translations.pakovka_1}</li>
                <li>{translations.pakovka_2}</li>
                <li>{translations.pakovka_3}</li>
              </ul>
            </div>
            <div className="card">
              <h3>{translations.marker}</h3>
              <ul>
                <li>{translations.marker_1}</li>
                <li>{translations.marker_2}</li>
                <li>{translations.marker_3}</li>
              </ul>
            </div>
            <div className="card">
              <h3>{translations.obrabotka}</h3>
              <ul>
                <li>{translations.obrabotka_1}</li>
                <li>{translations.obrabotka_2}</li>
                <li>{translations.obrabotka_3}</li>
              </ul>
            </div>
            <div className="card">
              <h3>{translations.personal}</h3>
              <ul>
                <li>{translations.personal_1}</li>
                <li>{translations.personal_2}</li>
              </ul>
            </div>
            <div className="card">
              <h3>{translations.within_world}</h3>
              <ul>
                <li>{translations.within_world_1}</li>
                <li>{translations.within_world_2}</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>{translations.how_work}</h2>
          <div className="steps">
            <div className="step">
              <h4>1. {translations.priem}</h4>
              <p>{translations.priem_1}</p>
            </div>
            <div className="step">
              <h4>2. {translations.xran}</h4>
              <p>{translations.xran_1}</p>
            </div>
            <div className="step">
              <h4>3. {translations.zakaz}</h4>
              <p>{translations.zakaz_1}</p>
            </div>
            <div className="step">
              <h4>4. {translations.dostavka}</h4>
              <p>{translations.dostavka_1}</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
