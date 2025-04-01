import PropTypes from "prop-types";
import { ad, doc } from "../../assets";
import "./Footer.css";
import { useState } from "react";

const Footer =  ({
  scrollToWarehouse,
  scrollToServices,
  scrollToMarketplace,
  scrollToFullfilment,
  scrollToFaq,
}) => {
    const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <>
    <div className="border">
    <div className={`footer-container header-bottom ${menuOpen ? "hide-right" : ""}`}>
          <div className="nav-section">
            <nav className="nav-links">
              <button onClick={scrollToServices}>Services</button>
              <button onClick={scrollToMarketplace}>Marketplace</button>
              <button onClick={scrollToFullfilment}>Fullfilment</button>
              <button onClick={scrollToFaq}>FAQ</button>
            </nav>

            <div className="extra-buttons">
              {/* <button className="outline-btn">Why choose us</button> */}
              <button className="outline-btn" onClick={scrollToWarehouse}>
                Warehouse address
              </button>
            </div>
          </div>

          
        </div>
    </div>

      <div className="container footer-container">
       


      <main className="content">
        <div className="footer-left">
          <section className="contract">
            <h2>Online contract</h2>
            <p>
            The onkron-logistics.com website collects metadata about each user
              (cookies, IP address and location data) for the full functioning of the website.
              Functioning of the website. If you object to the processing of this data
              please leave the site.
            </p>
            <a href="#" className="policy">
              <p>Policy on the processing of personal data</p>
            </a>
          </section>
        </div>

        <div className="footer-right">
          {/* <section className="files">
            <a href="#" className="file-link">
            Requisites<span className="bold-type">.docx</span>
              <img src={doc} alt="Скачать" className="files-icon" />
            </a>
            <a href="#" className="file-link">
            Contract<span className="bold-type">.pdf</span>
              <img src={doc} alt="Скачать" className="files-icon" />
            </a>
          </section> */}

          <div className="contact">
            <a href="tel:+494029996807" className="phone">
                (+49) 402-999-6807
              </a>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>© Bmgg Europe GMBH 2025</p>
        <p>The information on the website does not constitute a public offer.</p>
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
