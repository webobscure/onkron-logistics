import React from "react";
import Header from "../../Header";
import Footer from "../../components/Footer/Footer";
import dpd from "../../assets/dpd.png";
import gls from "../../assets/gls.jpg";
import kuenhe from "../../assets/kuenhe.png";
import service from "../../assets/service.jpg";
import "./Delivery.css";
import { useLanguage } from "../../context/LanguageContext";
export default function Delivery() {
  const { translations } = useLanguage();
  return (
    <>
      <Header />
      <section className="delivery-logistics">
        <div className="section">
          <h2>{translations.delivery_title}</h2>
          <p>{translations.delivery_we_prod}</p>

          {/* Варианты доставки */}
          <div className="delivery-options">
            {[
              {
                title: translations.delivery_deutsch,
                items: [
                  translations.express,
                  translations.standard,
                  translations.pallet,
                ],
              },
              {
                title: translations.delivery_europe,
                items: [translations.stand_and_exp, translations.optimize],
              },
              {
                title: translations.delivery_world,
                items: [translations.any_world, translations.sea_railway],
              },
            ].map((option, idx) => (
              <div className="delivery-box" key={idx}>
                <h3>{option.title}</h3>
                <ul>
                  {option.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Партнёры по доставке */}
          <h3 className="our-partners">{translations.our_partners}</h3>
          <p>{translations.we_work}</p>

          <div className="delivery-partners">
            <div>
              <h4>{translations.post_services}</h4>
              <ul>
                <li>
                  <strong>GLS</strong> {translations.gls}
                </li>
                <li>
                  <strong>DPD</strong> {translations.dpd}
                </li>
              </ul>
            </div>

            <div>
              <h4>{translations.gruz}</h4>
              <ul>
                <li>
                  <strong>Kuehne + Nagel</strong> {translations.nagel}
                </li>
              </ul>
            </div>
          </div>

          <p>{translations.possib_exp}</p>
          <p>{translations.we_intro}</p>

          {/* График отправки */}
          <div className="shipment-schedule">
            <h4>{translations.schedule}</h4>
            <ul>
              <li>{translations.everyday}</li>
              <li>{translations.orders}</li>
              <li>{translations.track}</li>
            </ul>
          </div>

          {/* Процесс доставки */}
          <h3 className="our-partners">{translations.process}</h3>
          <div className="delivery-flex">
            <div className="delivery-flex__left">
              <img src={service} alt="Service Illustration" />
            </div>
            <div className="delivery-flex__right">
              <p>{translations.transparent}</p>
              <ul>
                <li>{translations.you_get_track}</li>
                <li>{translations.real_time_track}</li>
                <li>{translations.notifications}</li>
              </ul>
            </div>
          </div>

          <p className="highlight">{translations.we_garant}</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
