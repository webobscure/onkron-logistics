import React from 'react'
import Header from '../../Header'
import Footer from '../../components/Footer/Footer'
import dpd from '../../assets/dpd.png'
import gls from '../../assets/gls.jpg'
import kuenhe from '../../assets/kuenhe.png'

import './Delivery.css'
import { useLanguage } from '../../context/LanguageContext'
export default function Delivery() {
  const {translations} = useLanguage();
  return (
    <>
    <Header/>
    <section className="delivery-logistics">
  <div className="section">
    <h2>{translations.delivery_title}</h2>
    <p>{translations.delivery_we_prod}</p>

    <div className="delivery-options">
      <div className="delivery-box">
        <h3>{translations.delivery_deutsch}</h3>
        <ul>
          <li>{translations.express}</li>
          <li>{translations.standard}</li>
          <li>{translations.pallet}</li>
        </ul>
      </div>
      <div className="delivery-box">
        <h3>{translations.delivery_europe}</h3>
        <ul>
          <li>{translations.stand_and_exp}</li>
          <li>{translations.optimize}</li>
        </ul>
      </div>
      <div className="delivery-box">
        <h3>{translations.delivery_world}</h3>
        <ul>
          <li>{translations.any_world}</li>
          <li>{translations.sea_railway}</li>
        </ul>
      </div>
    </div>

    <h3>{translations.our_partners}</h3>
    <p>{translations.we_work}</p>

    <div>
      <h4>{translations.post_services}</h4>
      <ul>
        <li><strong>GLS</strong> {translations.gls}</li>
        <li><strong>DPD</strong> {translations.dpd}</li>
      </ul>
     
    </div>

    <div>
      <h4>{translations.gruz}</h4>
      <ul>
        <li><strong>Kuehne + Nagel</strong> {translations.nagel}</li>
      </ul>
     
    </div>

    <p>{translations.possib_exp}</p>
    <p>{translations.we_intro}</p>

    <div className="shipment-schedule">
      <h4>{translations.schedule}</h4>
      <ul>
        <li>{translations.everyday}</li>
        <li>{translations.orders}</li>
        <li>{translations.delivetracky_we_prod}</li>
      </ul>
    </div>

    <h3>{translations.process}</h3>
    <p>{translations.transparent}</p>
    <ul>
      <li>{translations.you_get_track}</li>
      <li>{translations.real_time_track}</li>
      <li>{translations.notifications}</li>
    </ul>

    <p className="highlight">{translations.we_garant}</p>
  </div>
</section>

    <Footer/>
    </>
  )
}
