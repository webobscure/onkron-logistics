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
  return (
    <>
      <Header  scrollToWarehouse={() => {
        warehouseRef.current.scrollIntoView({ behavior: 'smooth' });
      }} />
      <div className='container' >
      <HeroSection />
      <Services />
      <StorageInfo />
      <Fulfillment />
      <WarehouseInfo ref={warehouseRef} />
      <FaqSection />
      </div>
      <Footer />
    </>
  )
}

export default App
