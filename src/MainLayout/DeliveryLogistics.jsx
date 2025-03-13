import React from 'react'
import './DeliveryLogistics.css'

const DeliveryLogistics = () => {
  return (
    <section className="delivery-wrapper">
      <h1 className="section-title">Lieferung & Logistik</h1>

      <div className="delivery-section">
        <div className="delivery-content">
          <p>
            Wir bieten flexible Versandoptionen und arbeiten sowohl mit großen
            Warensendungen (Paletten) als auch mit kleineren Paketen. Dank der
            Zusammenarbeit mit führenden Spediteuren garantieren wir eine
            schnelle und zuverlässige Lieferung innerhalb Deutschlands, der EU
            und weltweit.
          </p>

          <h2>Lieferoptionen</h2>
          <p>
            Wir ermöglichen sowohl Standard- als auch Expresslieferungen, die
            sich an Ihre Bedürfnisse anpassen: Lieferung innerhalb Deutschlands
            – Expressversand in 24–48 Stunden, Standardlieferung in 2–5 Tagen,
            Palettenversand (LTL, FTL). Lieferung in Europa – Standard- und
            Expresslieferungen, optimierte Routen zur Kostensenkung. Weltweiter
            Versand – Internationale Logistik durch führende Spediteure,
            Seefracht- und Bahntransporte für Großaufträge.
          </p>

          <h2>Unsere Logistikpartner</h2>
          <p>
            Um schnellste Lieferzeiten zu gewährleisten, arbeiten wir mit
            zuverlässigen Speditionspartnern zusammen: Post- und Kurierdienste:
            GLS – schnelle europäische Logistik für Amazon, Otto. DPD – flexible
            Zustellung für Unternehmen, bevorzugt für eBay. Frachttransporte:
            Kuehne + Nagel – internationale Logistik und Palettenversand.
            Express- und Standardlieferungen durch DHL, UPS, Hermes und andere.
          </p>
        </div>

        <div className="delivery-image">
          <img
            src="https://psv4.userapi.com/s/v1/d/ttCJN5DeyYjP9pNotosAollWcPOCw-zjrEg7JPEewloQPZVQF3q5WCMAYqZU6i6aglPcjr4J912EvpZBCGLNV1hMrgLgT5uxauT3tyCuqTIgtSwpBUfmIg/5e2c36b2-b7fd-4369-84bf-b6fc4b54a4ba.jpg"
            alt="Logistik"
          />
        </div>
      </div>

      <p className="highlight">
        Tägliche Sendungen – unsere Fahrzeuge und Kuriere treffen um{' '}
        <strong>13:00 Uhr</strong> ein. Bestellungen, die{' '}
        <strong>bis 11:00 Uhr</strong> eingehen, werden noch am selben Tag
        versandt.
      </p>
    </section>
  )
}

export default DeliveryLogistics
