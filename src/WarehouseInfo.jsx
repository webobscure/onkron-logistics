import React, {forwardRef } from 'react'
import './WarehouseInfo.css'
import warehouse1 from './assets/warehouse_1.webp'
import warehouse2 from './assets/warehouse_2.webp'
import warehouse3 from './assets/warehouse_3.webp'

const WarehouseInfo = forwardRef((props, ref) => {
  return (
    <div className="warehouse-wrapper" ref={ref}> {/* Используем ref здесь */}
       <h2 className="warehouse-title">Warehouse address in Hamburg</h2>
      <div className="warehouse-container" id="warehouse">
        <div className="warehouse-info">
          <div className="grid-item">
            <div className="grid-item-first">
              <span className="grid-item-first-span">ADDRESS:</span>
            </div>
            <div className="grid-item-second">
              <p className="grid-item-second-p">
                Billbrookdeich 36, 22113 Hamburg
              </p>
            </div>
          </div>

          <div className="grid-item">
            <div className="grid-item-first">
              <span className="grid-item-first-span">TYPES:</span>
            </div>
            <div className="grid-item-second">
              <p className="grid-item-second-p">Warm, Cold</p>
            </div>
          </div>

          <div className="grid-item">
            <div className="grid-item-first">
              <span className="grid-item-first-span">BOX VOLUME:</span>
            </div>
            <div className="grid-item-second">
              <p className="grid-item-second-p">From 2.5 m³ to 75 m³</p>
            </div>
          </div>

          <div className="grid-item">
            <div className="grid-item-first">
              <span className="grid-item-first-span">PHONE:</span>
            </div>
            <div className="grid-item-second">
              <p className="grid-item-second-p">(+49) 402-999-6807</p>
            </div>
          </div>

          <div className="grid-item">
            <div className="grid-item-first">
              <span className="grid-item-first-span">OPENING HOURS:</span>
            </div>
            <div className="grid-item-second">
              <p className="grid-item-second-p">Mon-Sun: 9:00 - 21:00</p>
            </div>
          </div>

          <div className="grid-item">
            <div className="grid-item-first">
              <span className="grid-item-first-span">PAYMENT METHODS:</span>
            </div>
            <div className="grid-item-second">
              <p className="grid-item-second-p">Cash / Cashless Payment</p>
            </div>
          </div>

          <div className="grid-buttons">
            <div className="whats-app-button">
              <a
                className="grid-link-button"
                href="https://api.whatsapp.com/send?phone=494029996807"
              >
                WhatsApp Contact
                <span className="wa-icon">
                  <svg
                    className="svg-icon"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="WhatsAppIcon"
                  >
                    <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"></path>
                  </svg>
                </span>
              </a>
            </div>
            <div className="whats-app-button">
              <button className="request-call-button">Order a Call</button>
            </div>
          </div>

          <div className="grid-images">
            <img className="grid-image" src={warehouse1} alt="" />
            <img className="grid-image" src={warehouse2} alt="" />
            <img className="grid-image" src={warehouse3} alt="" />
          </div>
        </div>

        <div className="warehouse-map">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.998273826831!2d10.089616315801606!3d53.53335008001938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1da5a4b48d7ad%3A0xbdd9b0bfa4c8bda3!2sBillbrookdeich%2036%2C%2022113%20Hamburg!5e0!3m2!1sen!2sde!4v1712345678901"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
});

WarehouseInfo.displayName = 'WarehouseInfo';

export default WarehouseInfo

