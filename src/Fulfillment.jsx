import React from 'react'
import './Fulfillment.css'
import receiving from './assets/Receiving.webp'
import order from './assets/Order.webp'
import shipping from './assets/Shipping.webp'
import returns from './assets/Returns.webp'

const Services = () => {
  return (
    <section className="services">
      <h2>Fulfillment-Exzellenz</h2>
      <div className="services-container">
        <div className="service">
          <div className="service-header">
            <img
              src={receiving}
              alt="Wareneingang & Lagerung"
              className="service-icon"
            />
            <h3>Wareneingang & Lagerung</h3>
          </div>
          <div className="service-content">
            <p>
              Wir nehmen Ihre Bestände sorgfältig entgegen, prüfen und
              organisieren sie mit unserem hochentwickelten
              Lagerverwaltungssystem für optimale Effizienz.
            </p>
          </div>
        </div>

        <div className="service">
          <div className="service-header">
            <img
              src={order}
              alt="Bestellbearbeitung"
              className="service-icon"
            />
            <h3>Bestellbearbeitung</h3>
          </div>
          <div className="service-content">
            <p>
              Sobald Bestellungen eingehen, stellt unser Team diese schnell
              zusammen, verpackt sie sorgfältig und bereitet den Versand mit
              höchster Präzision vor, um Fehler und Verzögerungen zu minimieren.
            </p>
          </div>
        </div>

        <div className="service">
          <div className="service-header">
            <img
              src={shipping}
              alt="Versand & Lieferung"
              className="service-icon"
            />
            <h3>Versand & Lieferung</h3>
          </div>
          <div className="service-content">
            <p>
              Wir arbeiten mit Premium-Transportdienstleistern zusammen, um
              schnelle und zuverlässige Lieferungen innerhalb Deutschlands und
              darüber hinaus zu gewährleisten – mit vollständiger
              Sendungsverfolgung.
            </p>
          </div>
        </div>

        <div className="service">
          <div className="service-header">
            <img
              src={returns}
              alt="Retourenmanagement"
              className="service-icon"
            />
            <h3>Retourenmanagement</h3>
          </div>
          <div className="service-content">
            <p>
              Unser optimierter Retourenprozess ermöglicht eine effiziente
              Bearbeitung von Kundenrücksendungen – inklusive Prüfung,
              Wiedereinlagerung und schneller Erstattung.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
