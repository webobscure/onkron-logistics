import React from 'react'
import './Services.css'
import storageIcon from './assets/storage_solutions.webp'
import fulfillmentIcon from './assets/fulfillment_services.webp'
import digitalIcon from './assets/digital_solutions.webp'

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>Unsere umfassenden Dienstleistungen</h2>
      <div className="services-container">
        <div className="service">
          <img src={storageIcon} alt="Lagerlösungen" className="service-icon" />
          <div className="service-content">
            <h3>Lagerlösungen</h3>
            <p>
              Hochmoderne Einrichtungen mit flexiblen Lagermöglichkeiten für
              Unternehmen jeder Größe, ausgestattet mit fortschrittlichen
              Bestandsverwaltungssystemen.
            </p>
          </div>
        </div>

        <div className="service">
          <img
            src={fulfillmentIcon}
            alt="Fulfillment-Dienste"
            className="service-icon"
          />
          <div className="service-content">
            <h3>Fulfillment-Dienste</h3>
            <p>
              Komplettes Auftragsmanagement von der Warenannahme bis zum Versand
              mit Echtzeitverfolgung und optimierten Lieferwegen in ganz Europa.
            </p>
          </div>
        </div>

        <div className="service">
          <img
            src={digitalIcon}
            alt="Digitale Lösungen"
            className="service-icon"
          />
          <div className="service-content">
            <h3>Digitale Lösungen</h3>
            <p>
              Entwicklung von Websites, Content-Erstellung und Integration in
              Marktplätze, um Ihre Online-Präsenz zu verbessern und den Umsatz
              zu steigern.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
