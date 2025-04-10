import PropTypes from 'prop-types'
import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import './Footer.css'

const Footer = ({
  scrollToWarehouse,
  scrollToServices,
  scrollToMarketplace,
  scrollToFullfilment,
  scrollToFaq,
}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const { translations } = useLanguage()

  return (
    <>
      <div className="border">
        <div
          className={`footer-container header-bottom ${
            menuOpen ? 'hide-right' : ''
          }`}
        >
          <div className="nav-section">
            <nav className="nav-links">
              <button onClick={scrollToServices}>
                {translations.footer_nav_services}
              </button>
              <button onClick={scrollToMarketplace}>
                {translations.footer_nav_marketplace}
              </button>
              <button onClick={scrollToFullfilment}>
                {translations.footer_nav_fullfilment}
              </button>
              <button onClick={scrollToFaq}>
                {translations.footer_nav_faq}
              </button>
            </nav>

            <div className="extra-buttons">
              <button className="outline-btn" onClick={scrollToWarehouse}>
                {translations.footer_nav_warehouse}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-container">
        <main className="content">
          <div className="footer-left">
            <section className="contract">
              <button className="policy" onClick={() => setShowPopup(true)}>
                <p>{translations.footer_policy_link}</p>
              </button>
            </section>
          </div>

          <div className="footer-right">
            <div className="contact">
              <a href="tel:+494029996807" className="phone">
                {translations.footer_phone}
              </a>
            </div>
          </div>
        </main>

        <footer className="footer">
          <p>{translations.footer_copyright}</p>
          <p>{translations.footer_note}</p>
        </footer>
      </div>

      {/* Политика попап */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>{translations.footer_policy_link}</h2>
            <p>{translations.footer_policy_popup}</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}

Footer.propTypes = {
  scrollToWarehouse: PropTypes.func.isRequired,
  scrollToFaq: PropTypes.func.isRequired,
  scrollToServices: PropTypes.func.isRequired,
  scrollToMarketplace: PropTypes.func.isRequired,
  scrollToFullfilment: PropTypes.func.isRequired,
}

export default Footer
