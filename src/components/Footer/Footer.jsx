import { Container } from "@mui/material";
import { ad, doc } from "../../assets";
import "./Footer.css";

const Footer = () => {
  return (
    
    <Container>
      <header className="header-footer">
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <a href="#">Услуги</a>
            </li>
            <li>
              <a href="#">Цены</a> 
            </li>
            <li>
              <a href="#">Акции</a>
            </li>
            <li>
              <a href="#">Отзывы</a>
            </li>
            <li>
              <a href="#">Склады</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
          
        </nav>
      </header>

      <main className="content">
        <div className="footer-left">
          <section className="contract">
            <h2>Онлайн договор</h2>
            <p>
              Сайт skladovichkof.ru собирает метаданные каждого пользователя
              (cookie, данные об IP-адресе и местоположении) для полноценного
              функционирования сайта. Если Вы против обработки этих данных,
              просьба покинуть сайт.
            </p>
            <a href="#" className="policy">
              <p>Политика обработки персональных данных</p>
            </a>
          </section>
        </div>

        <div className="footer-right">
          <section className="files">
            <a href="#" className="file-link">
              Реквизиты<span className="bold-type">.docx</span>
              <img src={doc} alt="Скачать" className="files-icon" />
            </a>
            <a href="#" className="file-link">
              Договор<span className="bold-type">.pdf</span>
              <img src={doc} alt="Скачать" className="files-icon" />
            </a>
          </section>

          <div className="contact">
            <img src={ad} />
            <a href="tel:+78123130110">+49 4029 996807</a>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>© Bmgg Europe GMBH 2025</p>
        <p>Информация на сайте не является публичной офертой</p>
      </footer>
    </Container>
  );
};

export default Footer;
