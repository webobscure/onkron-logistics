import React from 'react'
import './Services.css'
import storageIcon from './assets/storage_solutions.webp'
import fulfillmentIcon from './assets/fulfillment_services.webp'
import digitalIcon from './assets/digital_solutions.webp'

const Services = () => {
  return (
    <section className="services">
      <h1>Our Comprehensive Services</h1>
      <div className="services-container">
        <div className="service-item">
          <img src={storageIcon} alt="Lagerlösungen" className="service-icon" />
          <div className="service-content">
            <h3>Storage Solutions</h3>
            <p>
              State-of-the-art facilities with flexible storage options for
              businesses of all sizes, equipped with advanced inventory
              management systems.
            </p>
          </div>
        </div>

        <div className="service-item">
          <img
            src={fulfillmentIcon}
            alt="Fulfillment-Dienste"
            className="service-icon"
          />
          <div className="service-content">
            <h3>Fulfillment Services</h3>
            <p>
              Complete order management from goods receipt to shipping, with
              real-time tracking and optimized delivery routes across Europe.
            </p>
          </div>
        </div>

        <div className="service-item">
          <img
            src={digitalIcon}
            alt="Digitale Lösungen"
            className="service-icon"
          />
          <div className="service-content">
            <h3>Digital Solutions</h3>
            <p>
              Development of websites, content creation, and integration into
              marketplaces to enhance your online presence and increase sales.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
