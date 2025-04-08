import React, { forwardRef } from 'react'
import './Fulfillment.css'
import receiving from './assets/Receiving.webp'
import order from './assets/Order.webp'
import shipping from './assets/Shipping.webp'
import returns from './assets/Returns.webp'
import { useLanguage } from './context/LanguageContext.jsx'

const Fulfillment = forwardRef((props, ref) => {
  const { translations } = useLanguage()

  return (
    <section className="services" ref={ref}>
      <h2>{translations.fulfillment_title}</h2>
      <div className="services-container">
        <div className="service">
          <div className="service-header">
            <img src={receiving} alt="Receiving" className="service-icon" />
            <h3>{translations.fulfillment_receiving_title}</h3>
          </div>
          <div className="service-content">
            <p>{translations.fulfillment_receiving_text}</p>
          </div>
        </div>

        <div className="service">
          <div className="service-header">
            <img src={order} alt="Order" className="service-icon" />
            <h3>{translations.fulfillment_order_title}</h3>
          </div>
          <div className="service-content">
            <p>{translations.fulfillment_order_text}</p>
          </div>
        </div>

        <div className="service">
          <div className="service-header">
            <img src={shipping} alt="Shipping" className="service-icon" />
            <h3>{translations.fulfillment_shipping_title}</h3>
          </div>
          <div className="service-content">
            <p>{translations.fulfillment_shipping_text}</p>
          </div>
        </div>

        <div className="service">
          <div className="service-header">
            <img src={returns} alt="Returns" className="service-icon" />
            <h3>{translations.fulfillment_returns_title}</h3>
          </div>
          <div className="service-content">
            <p>{translations.fulfillment_returns_text}</p>
          </div>
        </div>
      </div>
    </section>
  )
})

Fulfillment.displayName = 'Fulfillment'
export default Fulfillment
