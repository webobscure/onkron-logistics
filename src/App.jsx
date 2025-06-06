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

  return (
    <>
      <Header
      
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
        
      />
    </>
  )
}

export default App
