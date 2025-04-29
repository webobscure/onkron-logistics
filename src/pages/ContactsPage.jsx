import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import './ContactsPage.css'

const ContactsPage = () => {
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
        <h1>Contacts</h1>
        <a href="mailto:order@bmggcorp.com" class="email">
          order@bmggcorp.com
        </a>{' '}
        <br></br>
        <a href="tel:+491727991658" class="phone">
          (+49) 172-799-1658
        </a>
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
