// MainInfo.jsx
import React from 'react'
import './MainInfo.css'
import { industrialrobot, loader, pushcart, warehouse, warehousesvg, workersvg } from '../assets'

const MainInfo = () => {
  return (
    <section className="main-info">
      <div className="main-info-container">
        <div className="main-info-header">
          <h2>Allgemeine Informationen</h2>
          <p>
            Wir sind Ihr zuverlässiger Partner und bieten umfassende Lösungen
            für Unternehmen jeder Größe. für Unternehmen jeder Größe. Mit Sitz
            in Hamburg, in unmittelbarer Nähe zu einem der größten Häfen
            Europas. in unmittelbarer Nähe zu einem der größten Häfen Europas,
            bietet ein umfassendes Angebot an Logistikdienstleistungen.
          </p>
        </div>

        <div className="main-info-warehouse">
          <img
            src={warehouse}
            alt="Lagerhaus"
            className="warehouse-image"
          />
        </div>

        <div className="main-info-advantages">
          <h3>Eigenschaften des Lagers</h3>
          <div className="advantages-container">
            <div className="advantage-card">
              <img
                src={warehousesvg}
                alt="Größe"
                className="advantage-icon"
              />
              <h4>2000 м²</h4>
              <p>
                Große Lagerflächen für die Unterbringung große Mengen an Fracht.
              </p>
            </div>
            <div className="advantage-card">
              <img
                src={pushcart}
                alt="Lagerung"
                className="advantage-icon"
              />
              <h4>Moderne Lagersysteme</h4>
              <p>Einschließlich Regale und Bodensysteme.</p>
            </div>
            <div className="advantage-card">
              <img
                src={loader}
                alt="Laden"
                className="advantage-icon"
              />
              <h4>Ladegeräte</h4>
              <p>
                Gewährleistet einen schnellen und effizienten Frachtumschlag.
              </p>
            </div>
            <div className="advantage-card">
              <img
                src={industrialrobot}
                alt="Sicherheit"
                className="advantage-icon"
              />
              <h4>Video-Überwachung</h4>
              <p>Garantieren Sie die Sicherheit Ihrer Waren.</p>
            </div>
            <div className="advantage-card">
              <img
                src={workersvg}
                alt="Automatisierung"
                className="advantage-icon"
              />
              <h4>Automatisiertes System</h4>
              <p>
                Reduziert Fehler und erhöht die Geschwindigkeit des des
                Kundendienstes.
              </p>
            </div>
          </div>
        </div>

        <div className="main-info-footer">
          <p>
            Wir garantieren eine sichere und effiziente Lagerung Ihrer Waren
            sowie eine prompte Bearbeitung und Versendung der Aufträge. sowie
            eine prompte Bearbeitung und Auslieferung der Aufträge.
          </p>
        </div>
      </div>
    </section>
  )
}

export default MainInfo
