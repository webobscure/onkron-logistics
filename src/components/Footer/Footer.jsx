import PropTypes from "prop-types";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import docIcon from "../../assets/doc.svg";
import "./Footer.css";
import { Link } from "react-router";

const Footer = ({}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { translations } = useLanguage();

  return (
    <>
      <div className="border">
        <div
          className={`footer-container header-bottom ${
            menuOpen ? "hide-right" : ""
          }`}
        >
          <div className="nav-section">
            <nav className="nav-links">
              <button>
                <Link to="/about" className="nav-button">
                  {translations.about_us}
                </Link>
              </button>
              <button>
                <Link className="nav-button" to="/fullfilment">
                  {translations.header_fulfillment}
                </Link>
              </button>
              <button>
                <Link to="/delivery" className="nav-button">
                  {translations.header_services}
                </Link>
              </button>
              <button>
                <Link to="/marketplaces" className="nav-button">
                  {translations.header_marketplace}
                </Link>
              </button>

              <button>
                <Link to="/contacts" className="nav-button">
                  {translations.header_contacts || "Contacts"}
                </Link>
              </button>
            </nav>

            <div className="extra-buttons">
              <button className="outline-btn" >
                <Link to="/calculator">
                  {translations.calculator || "Calculator"}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-container">
        <main className="content">
          <div className="footer-left">
            <section className="contract">
              <a href="/Impressum_BMGG.docx" download className="file-download">
                <img src={docIcon} alt="doc" className="file-icon" />
                Impressum
              </a>
              <a
                href="/Datenschutz_AGB_BMGG.docx"
                download
                className="file-download"
              >
                <img src={docIcon} alt="doc" className="file-icon" />
                Datenschutz & AGB
              </a>
              <a
                href="/Preise_für_Fulfillment-Dienstleistungen.pdf"
                download
                className="file-download"
              >
                <img src={docIcon} alt="doc" className="file-icon" />
                Preise für Fulfillment-Dienstleistungen
              </a>
            </section>
          </div>

          <div className="footer-right">
            <div className="contact">
              <a href="tel:+494029996807" className="phone">
                (+49) 172-799-1658
              </a>
            </div>
          </div>
        </main>

        <footer className="footer">
          <p>{translations.footer_copyright}</p>
          <p>{translations.footer_note}</p>
        </footer>
      </div>
    </>
  );
};

Footer.propTypes = {
  scrollToWarehouse: PropTypes.func.isRequired,
  scrollToFaq: PropTypes.func.isRequired,
  scrollToServices: PropTypes.func.isRequired,
  scrollToMarketplace: PropTypes.func.isRequired,
  scrollToFullfilment: PropTypes.func.isRequired,
};

export default Footer;
