import React from 'react'
import { botStash, topStash } from './assets'
import './PersonalWare.css'
export default function PersonalWare() {
  return (
    <section className="storage-types">
        <div className="container">
          <h1 className="main-title">
          A personal storage locker is a convenient storage solution
          </h1>

          <div className="columns-wrapper">
            <div className="storage-wrapper-left">
              <img src={topStash} />
              <div className="storage-column">
              <h2 className="column-title">For Individuals</h2>
                <div className="storage-list">
                  <p className="storage-item">Tires and wheels</p>
                  <p className="storage-item">Unsized vehicles</p>
                  <p className="storage-item">Furniture</p>
                  <p className="storage-item">Tools</p>
                  <p className="storage-item">Household appliances</p>
                  <p className="storage-item">Sports equipment</p>
                  <p className="storage-item">Children&apos;s stuff</p>
                  <p className="storage-item">Books</p>
                  <p className="storage-item">Moving supplies</p>
                </div>
              </div>
            </div>

            <div className="storage-wrapper-right">
              <div className="storage-column">
              <h2 className="column-title">For Business</h2>
                <div className="storage-list">
                  <p className="storage-item">Inventory</p>
                  <p className="storage-item">Equipment</p>
                  <p className="storage-item">Requisites</p>
                  <p className="storage-item">Promotional materials</p>
                  <p className="storage-item">Consumables</p>
                  <p className="storage-item">Documents</p>
                  <p className="storage-item">Summer verandah cafes</p>
                  <p className="storage-item">Fabrics</p>
                </div>
              </div>
              <img src={botStash} />
            </div>
          </div>

          <div className="size-info">
          <p className="size-text">Box sizes from 1 m² to 16 m²</p>
            <p className="height-text">Height of ceilings 2,5 m</p>
          </div>
        </div>
      </section>
  )
}
