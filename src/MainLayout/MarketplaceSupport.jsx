import React from 'react'
import './MarketplaceSupport.css'
import { worker } from '../assets'

const MarketplaceSupport = () => {
  return (
    <section className="marketplace-wrapper">
      <h1 className="section-title">Unterstützung für Marktplätze</h1>

      <div className="marketplace-section">
        <div className="marketplace-image">
          <img
            src={worker}
            alt="Marketplace Support"
          />
        </div>

        <div className="marketplace-content">
          <p>
            Wir bieten nicht nur Lager- und Logistikdienstleistungen an, sondern
            auch umfassende Unterstützung für die größten Marktplätze Europas.
            Unsere Erfahrung mit internationalen Plattformen, einschließlich
            Amazon, ermöglicht es uns, einen ganzheitlichen Ansatz für die
            Auftragsabwicklung, Lagerung, Verpackung und den Versand von Waren
            gemäß den spezifischen Anforderungen jeder Plattform
            bereitzustellen.
          </p>

          <h2>Unterstützte Marktplätze</h2>
          <p>
            Unsere Lösungen helfen unseren Kunden, effizient auf den führenden
            europäischen Marktplätzen zu verkaufen, darunter: Amazon, eBay,
            OTTO, Kaufland, Cdiscount, Real.de/Kaufland, Rakuten, Wayfair, Etsy.
          </p>

          <h2>Unsere Dienstleistungen für Marktplätze</h2>
          <p>
            Wir bieten umfassende Dienstleistungen zur Optimierung von
            Geschäftsprozessen: Lagerhaltung in Deutschland – strategisch
            günstige Standorte für den europaweiten Versand. Kommissionierung
            und Fulfillment – Berücksichtigung der spezifischen Anforderungen
            jeder Plattform. Vorbereitung der Waren gemäß den
            Marktplatzrichtlinien – Etikettierung, Verpackung, Palettierung.
            Beratung und Support – Unterstützung bei Registrierung,
            Konfiguration und Verwaltung von Konten. Inhalts- und
            Marketingunterstützung – Produktlistungen, SEO-Optimierung,
            Bildbearbeitung.
          </p>
        </div>
      </div>

      <p className="highlight">
        Wir bieten einen vollständigen Auftragsabwicklungszyklus und helfen
        unseren Kunden, sich auf das Wachstum ihres Geschäfts zu konzentrieren.
        Überlassen Sie uns die logistischen Prozesse, während Sie Ihre
        Verkaufsstrategie verbessern!
      </p>
    </section>
  )
}

export default MarketplaceSupport
