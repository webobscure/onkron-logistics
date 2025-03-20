import { ad, doc } from "../../assets";
import "./Footer.css";

const Footer = () => {
  return (
    
    <div className="container footer-container">
      <div className="header-footer">
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <a href="#">Dienstleistungen</a>
            </li>
            <li>
              <a href="#">Preise</a> 
            </li>
            <li>
              <a href="#">Angebote</a>
            </li>
            <li>
              <a href="#">Mehr</a>
            </li>
          </ul>
          
        </nav>
      </div>

      <main className="content">
        <div className="footer-left">
          <section className="contract">
            <h2>Online-Vertrag</h2>
            <p>
            Die Website onkron-logistics.com sammelt Metadaten über jeden Nutzer
              (Cookies, IP-Adresse und Standortdaten) für das vollständige Funktionieren der Website.
              Funktionieren der Website. Wenn Sie gegen die Verarbeitung dieser Daten sind,
              verlassen Sie bitte die Seite.
            </p>
            <a href="#" className="policy">
              <p>Politik der Verarbeitung personenbezogener Daten</p>
            </a>
          </section>
        </div>

        <div className="footer-right">
          <section className="files">
            <a href="#" className="file-link">
            Requisiten<span className="bold-type">.docx</span>
              <img src={doc} alt="Скачать" className="files-icon" />
            </a>
            <a href="#" className="file-link">
            Vertrag<span className="bold-type">.pdf</span>
              <img src={doc} alt="Скачать" className="files-icon" />
            </a>
          </section>

          <div className="contact">
            <a href="tel:+494029996807" className="phone">
                (+49) 402-999-6807
              </a>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>© Bmgg Europe GMBH 2025</p>
        <p>Die Informationen auf der Website stellen kein öffentliches Angebot dar.</p>
      </footer>
    </div>
  );
};

export default Footer;
