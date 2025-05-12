import React, { forwardRef, useEffect, useRef } from 'react'
import './WarehouseInfo.css'
import warehouse1 from './assets/warehouse_1.webp'
import warehouse2 from './assets/warehouse_2.webp'
import warehouse3 from './assets/warehouse_3.webp'
import { useLanguage } from './context/LanguageContext.jsx'

const WarehouseInfo = forwardRef((props, ref) => {
  const buttonRef = useRef(null)
  const { translations } = useLanguage()

  useEffect(() => {
    const script = document.createElement('script')
    script.dataset.b24Form = 'click/48/clb435'
    script.dataset.skipMoving = 'true'
    script.innerHTML = `
      (function(w,d,u){
        var s=d.createElement('script');
        s.async=true;
        s.src=u+'?'+(Date.now()/180000|0);
        var h=d.getElementsByTagName('script')[0];
        h.parentNode.insertBefore(s,h);
      })(window,document,'https://cdn-ru.bitrix24.ru/b6258443/crm/form/loader_48.js');
    `
    if (buttonRef.current && buttonRef.current.parentNode) {
      buttonRef.current.parentNode.insertBefore(script, buttonRef.current)
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="warehouse-wrapper" ref={ref}>
      <h2 className="warehouse-title">{translations.warehouse_title}</h2>
      <div className="warehouse-container" id="warehouse">
        <div className="warehouse-info">
          <div className="grid-item">
            <div className="grid-item-first">
              <span className="grid-item-first-span">
                {translations.warehouse_label_address}
              </span>
            </div>
            <div className="grid-item-second">
              <p className="grid-item-second-p">
                {translations.warehouse_address}
              </p>
            </div>
          </div>

          <div className="grid-item">
            <div className="grid-item-first">
              <span className="grid-item-first-span">
                {translations.warehouse_label_types}
              </span>
            </div>
            <div className="grid-item-second">
              <p className="grid-item-second-p">
                {translations.warehouse_types}
              </p>
            </div>
          </div>

          <div className="grid-item">
            <div className="grid-item-first">
              <span className="grid-item-first-span">
                {translations.warehouse_label_volume}
              </span>
            </div>
            <div className="grid-item-second">
              <p className="grid-item-second-p">
                {translations.warehouse_volume}
              </p>
            </div>
          </div>

          <div className="grid-item">
            <div className="grid-item-first">
              <span className="grid-item-first-span">
                {translations.warehouse_label_phone}
              </span>
            </div>
            <div className="grid-item-second">
              <p className="grid-item-second-p">
                {translations.warehouse_phone}
              </p>
            </div>
          </div>

          <div className="grid-item">
            <div className="grid-item-first">
              <span className="grid-item-first-span">
                {translations.warehouse_label_hours}
              </span>
            </div>
            <div className="grid-item-second">
              <p className="grid-item-second-p">
                {translations.warehouse_hours}
              </p>
            </div>
          </div>

          <div className="grid-item">
            <div className="grid-item-first">
              <span className="grid-item-first-span">
                {translations.warehouse_label_payment}
              </span>
            </div>
            <div className="grid-item-second">
              <p className="grid-item-second-p">
                {translations.warehouse_payment}
              </p>
            </div>
          </div>

          <div className="grid-buttons">
            <div className="whats-app-button">
              <a
                className="grid-link-button"
                href="https://api.whatsapp.com/send?phone=494029996807"
              >
                {translations.warehouse_whatsapp}
                <span className="wa-icon">
                  {/* WhatsApp icon left untouched */}
                  <svg
                    className="svg-icon"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="WhatsAppIcon"
                  >
                    <path
                      d="M17.9403 3.05182C15.9662 1.08486 13.3409 0.00115356 10.5439 0C4.78056 0 0.0900243 4.66796 0.0877061 10.4053C0.0869333 12.2393 0.568351 14.0296 1.4834 15.6077L0 21L5.543 19.5529C7.07032 20.3821 8.7898 20.819 10.5397 20.8195H10.544C16.3068 20.8195 20.9978 16.1512 21 10.4136C21.0012 7.63301 19.9146 5.01865 17.9403 3.05182ZM10.5439 19.0621H10.5403C8.98092 19.0615 7.45154 18.6444 6.11701 17.8565L5.79981 17.669L2.51051 18.5278L3.38847 15.3361L3.18176 15.0089C2.31178 13.6318 1.85239 12.0401 1.85316 10.4059C1.85496 5.63721 5.7537 1.75752 10.5474 1.75752C12.8687 1.75829 15.0508 2.65909 16.6916 4.29395C18.3324 5.92881 19.2354 8.10187 19.2347 10.413C19.2326 15.1821 15.3341 19.0621 10.5439 19.0621ZM15.311 12.5844C15.0498 12.4541 13.7652 11.8253 13.5257 11.7384C13.2864 11.6516 13.112 11.6084 12.938 11.8686C12.7637 12.1288 12.2631 12.7146 12.1106 12.888C11.9582 13.0616 11.8059 13.0833 11.5446 12.9531C11.2833 12.823 10.4415 12.5483 9.44353 11.6625C8.66693 10.9731 8.14263 10.1216 7.99014 9.86144C7.83791 9.60099 7.98885 9.47384 8.10476 9.3308C8.38759 8.98127 8.67079 8.61482 8.75786 8.4414C8.84505 8.26785 8.80139 8.11597 8.73596 7.98587C8.67079 7.85577 8.14829 6.57596 7.93064 6.05519C7.71839 5.54839 7.50318 5.61683 7.34271 5.60889C7.19048 5.60132 7.01623 5.59979 6.84197 5.59979C6.66785 5.59979 6.38477 5.66477 6.14522 5.92522C5.9058 6.18554 5.23094 6.81449 5.23094 8.09431C5.23094 9.37412 6.16711 10.6105 6.29771 10.784C6.4283 10.9576 8.14005 13.5839 10.7608 14.71C11.3841 14.9781 11.8707 15.138 12.2503 15.2578C12.8762 15.4557 13.4456 15.4278 13.8958 15.3609C14.3978 15.2861 15.4414 14.7318 15.6593 14.1245C15.877 13.5171 15.877 12.9966 15.8116 12.888C15.7464 12.7796 15.5721 12.7146 15.311 12.5844Z"
                      fill="#1fcfca"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
            <div className="whats-app-button">
              <button ref={buttonRef} className="request-call-button">
                {translations.warehouse_order_call}
              </button>
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
})

WarehouseInfo.displayName = 'WarehouseInfo'
export default WarehouseInfo
