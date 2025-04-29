import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import './ContactsPage.css'

const ContactsPage = () => {
  const { translations } = useLanguage()
  const navigate = useNavigate()

  // Функция для обработки навигации/скролла
  const handleScrollAction = (section) => {
    // Если мы не на главной странице, переходим на главную с хэшем
    if (window.location.pathname !== '/') {
      navigate(`/#${section}`)
    }
    // На главной странице скролл выполнит Header
  }

  return (
    <>
      <Header
        scrollToWarehouse={() => handleScrollAction('warehouse')}
        scrollToServices={() => handleScrollAction('services')}
        scrollToMarketplace={() => handleScrollAction('marketplace')}
        scrollToFullfilment={() => handleScrollAction('fulfillment')}
        scrollToFaq={() => handleScrollAction('faq')}
      />
      <div className="contacts_container">
        <h1 className="contact-info-heading">
          {translations.contacts_heading}
        </h1>
        <p className="contact-info">
          BMGG EUROPE GmbH, Billbrookdeich 36, 22113 Hamburg, Germany
        </p>
        <a href="mailto:order@bmggcorp.com" class="contact-info">
          order@bmggcorp.com
        </a>{' '}
        <a href="tel:+491727991658" class="contact-info">
          (+49) 172-799-1658
        </a>
        <div className="contacts_warehouse-map">
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
        <p className="contact-info-heading">
          {translations.warehouse_label_hours}
        </p>
        <p className="contact-info">{translations.warehouse_hours}</p>
      </div>
      <Footer
        scrollToWarehouse={() => handleScrollAction('warehouse')}
        scrollToServices={() => handleScrollAction('services')}
        scrollToMarketplace={() => handleScrollAction('marketplace')}
        scrollToFullfilment={() => handleScrollAction('fulfillment')}
        scrollToFaq={() => handleScrollAction('faq')}
      />
    </>
  )
}

export default ContactsPage
