import React, { forwardRef } from 'react'
import './Services.css'
import storageIcon from './assets/storage_solutions.webp'
import fulfillmentIcon from './assets/fulfillment_services.webp'
import digitalIcon from './assets/digital_solutions.webp'
import { useLanguage } from './context/LanguageContext.jsx'

const Services = forwardRef((props, ref) => {
  const { translations } = useLanguage()

  return (
    <section className="services" ref={ref}>
      <h1>{translations.services_title}</h1>
      <div className="services-container">
        <div className="service-item">
          <img
            src={storageIcon}
            alt="Storage Solutions"
            className="service-icon"
          />
          <div className="service-content">
            <h3>{translations.services_storage_title}</h3>
            <p>{translations.services_storage_text}</p>
          </div>
        </div>

        <div className="service-item">
          <img
            src={fulfillmentIcon}
            alt="Fulfillment Services"
            className="service-icon"
          />
          <div className="service-content">
            <h3>{translations.services_fulfillment_title}</h3>
            <p>{translations.services_fulfillment_text}</p>
          </div>
        </div>

        <div className="service-item">
          <img
            src={digitalIcon}
            alt="Digital Solutions"
            className="service-icon"
          />
          <div className="service-content">
            <h3>{translations.services_digital_title}</h3>
            <p>{translations.services_digital_text}</p>
          </div>
        </div>
      </div>
    </section>
  )
})

Services.displayName = 'Services'

export default Services
