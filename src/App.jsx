import React, { useRef } from 'react'
import Header from './Header.jsx'
import HeroSection from './HeroSection.jsx'
import Services from './Services.jsx'
import WarehouseInfo from './WarehouseInfo.jsx'
import Fulfillment from './Fulfillment.jsx'
import Footer from './components/Footer/Footer.jsx'
import FaqSection from './FaqSection/FaqSection.jsx'
import StorageInfo from './StorageInfo.jsx'
import './App.css'

function App() {
  const warehouseRef = useRef()
  const serviceRef = useRef()
  const MarketplaceRef = useRef()
  const FullfilmentRef = useRef()
  const FaqRef = useRef()

  return (
    <>
      <Header
        scrollToWarehouse={() => {
          warehouseRef.current.scrollIntoView({ behavior: 'smooth' })
        }}
        scrollToServices={() => {
          serviceRef.current.scrollIntoView({ behavior: 'smooth' })
        }}
        scrollToMarketplace={() => {
          MarketplaceRef.current.scrollIntoView({ behavior: 'smooth' })
        }}
        scrollToFullfilment={() => {
          FullfilmentRef.current.scrollIntoView({ behavior: 'smooth' })
        }}
        scrollToFaq={() => {
          FaqRef.current.scrollIntoView({ behavior: 'smooth' })
        }}
      />
      <div className="container">
        <HeroSection />
        <Services ref={serviceRef} id="services" />
        <StorageInfo ref={MarketplaceRef} id="marketplace" />
        <Fulfillment ref={FullfilmentRef} id="fulfillment" />
        <WarehouseInfo ref={warehouseRef} id="warehouse" />
        <FaqSection ref={FaqRef} id="faq" />
      </div>
      <Footer
        scrollToWarehouse={() => {
          warehouseRef.current.scrollIntoView({ behavior: 'smooth' })
        }}
        scrollToServices={() => {
          serviceRef.current.scrollIntoView({ behavior: 'smooth' })
        }}
        scrollToMarketplace={() => {
          MarketplaceRef.current.scrollIntoView({ behavior: 'smooth' })
        }}
        scrollToFullfilment={() => {
          FullfilmentRef.current.scrollIntoView({ behavior: 'smooth' })
        }}
        scrollToFaq={() => {
          FaqRef.current.scrollIntoView({ behavior: 'smooth' })
        }}
      />
    </>
  )
}

export default App
