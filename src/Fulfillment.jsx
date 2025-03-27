import React, {forwardRef} from 'react'
import './Fulfillment.css'
import receiving from './assets/Receiving.webp'
import order from './assets/Order.webp'
import shipping from './assets/Shipping.webp'
import returns from './assets/Returns.webp'

const Services = forwardRef((props, ref) => {
  return (
    <section className="services" ref={ref}>
      <h2>Fulfillment Excellence</h2>
      <div className="services-container">
        <div className="service">
          <div className="service-header">
            <img
              src={receiving}
              alt="Wareneingang & Lagerung"
              className="service-icon"
            />
            <h3>Receiving & Storage</h3>
          </div>
          <div className="service-content">
            <p>
              We carefully receive, inspect, and organize your inventory using
              our advanced warehouse management system for optimal efficiency.
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
            <h3>Order Processing</h3>
          </div>
          <div className="service-content">
            <p>
              As soon as orders arrive, our team quickly assembles them,
              carefully packs them, and prepares them for shipment with the
              highest precision to minimize errors and delays.
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
            <h3>Shipping & Delivery</h3>
          </div>
          <div className="service-content">
            <p>
              We work with premium transport service providers to ensure fast
              and reliable deliveries within Germany and beyond – with complete
              shipment tracking.
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
            <h3>Returns Management</h3>
          </div>
          <div className="service-content">
            <p>
              Our optimized returns process enables efficient handling of
              customer returns – including inspection, restocking, and fast
              refunds.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
})

Services.displayName = 'Fullfilment';

export default Services
