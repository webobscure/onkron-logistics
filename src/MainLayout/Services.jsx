// Services.jsx
import React from 'react'
import './Services.css'

const ProcessStep = ({ icon, title, description }) => (
  <div className="process-step">
    <img className="process-step-icon" src={icon} alt={title} />
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
)

const Services = () => {
  return (
    <section className="services-process">
      <div className="services-process-container">
        <div className="services-process-header">
          <h2>Dienstleistungen / Erledigung</h2>
          <p>
            Wir bieten eine umfassende Palette von Dienstleistungen für die
            Auftragsabwicklung, Lagerung und Versand von Waren und unterstützen
            Unternehmen bei der effizienten Verwaltung ihrer Logistik. Logistik.
            Ob Sie nach dem FBA- (Fulfillment by Amazon), FBM- (Fulfillment by
            Merchant) oder Fulfillment by Amazon-Modell arbeiten. (Fulfillment
            by Amazon), FBM (Fulfillment by Merchant) oder auf der Suche nach
            einem zuverlässigen 3PL (Third-Party Logistics) Partner sind. Wenn
            Sie einen zuverlässigen 3PL-Partner (Third-Party Logistics) suchen,
            sorgen wir für eine schnelle und qualitativ hochwertige
            Auftragsabwicklung. und Qualität der Auftragsabwicklung.
          </p>
        </div>

        <div className="services-process-list">
          <h3>Vollständige Liste der Dienstleistungen:</h3>
          <div className="services-block-list">
            <div className="services-left-side"></div>

            <div className="services-right-side"></div>
          </div>
        </div>

        <div className="services-process-header">
          <h3>Wie läuft der Erfüllungsprozess bei uns ab?</h3>
        </div>

        <div className="services-process-steps">
          <ProcessStep
            icon="https://www.svgrepo.com/show/89552/conveyor.svg"
            title="Akzeptanz"
            description="Sie liefern die Ware an unser Lager in Hamburg. Wir prüfen die Menge und Qualität und erfassen die Ware im Buchhaltungssystem."
          />
          <ProcessStep
            icon="https://www.svgrepo.com/show/80487/stock.svg"
            title="Lagerung"
            description="Die Waren werden in Regale, Paletten oder Gestelle gestellt. Sie haben Zugang zu Echtzeit-Bestandsinformationen."
          />
          <ProcessStep
            icon="https://www.svgrepo.com/show/166375/worker.svg"
            title="Auftragsabwicklung"
            description="Wenn eine Bestellung eintrifft, wird sie von uns zusammengesetzt, geprüft und verpackt. Falls erforderlich, bringen wir Etiketten an."
          />
          <ProcessStep
            icon="https://www.svgrepo.com/show/152690/truck.svg"
            title="Lieferung"
            description="Auswahl des besten Transportunternehmens (DHL, DPD, UPS, GLS etc.) und Versand innerhalb Deutschlands, der EU und weltweit."
          />
        </div>
      </div>
    </section>
  )
}

export default Services
