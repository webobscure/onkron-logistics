import React from 'react'
import './ServicesHero.css'

const ServicesHero = () => {
  return (
    <div className="services-container">
      <div className="services-image">
        <img
          src="https://sun9-53.userapi.com/impg/XPASlQVMNUBFhfrBrhEkybktwysUb3F2_-PVRA/12ghhkDdkMk.jpg?size=515x772&quality=95&sign=70d9738b383b267da1e1dfd7a1aceef2&type=album"
          alt="Warehouse"
        />
      </div>
      <div className="services-content">
        <h2>Unser umfassender Service</h2>
        {/* Добавляем контейнер для сетки */}
        <div className="services-grid">
          <div className="service-item">
            <img
              src="https://www.svgrepo.com/show/42890/warehouse.svg"
              alt="Storage Icon"
            />
            <div>
              <h3>Lösungen für die Lagerung</h3>
              <p>
                Hochmoderne Einrichtungen mit flexiblen Lageroptionen für
                Unternehmen jeder Größe, mit fortschrittlichen
                Bestandsverwaltungs Systemen.
              </p>
            </div>
          </div>
          <div className="service-item">
            <img
              src="https://www.svgrepo.com/show/152690/truck.svg"
              alt="Fulfillment Icon"
            />
            <div>
              <h3>Fulfillment-Dienstleistungen</h3>
              <p>
                Durchgängige Auftragsabwicklung vom Eingang bis zum Versand, mit
                Echtzeit-Tracking und optimierten Lieferwegen in ganz Europa.
              </p>
            </div>
          </div>
          <div className="service-item">
            <img
              src="https://www.svgrepo.com/show/166375/worker.svg"
              alt="Digital Icon"
            />
            <div>
              <h3>Digitale Lösungen</h3>
              <p>
                Website-Entwicklung, Inhaltserstellung und Marktplatz
                Marktplatzintegration, um Ihre Online-Präsenz zu verbessern und
                den Umsatz Leistung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesHero
