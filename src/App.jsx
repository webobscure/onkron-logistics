import React, { useState } from 'react'
import Header from './Header.jsx'
import HeroSection from './HeroSection.jsx'
import Services from './Services.jsx'
import WarehouseInfo from './WarehouseInfo.jsx'
import Fulfillment from './Fulfillment.jsx'
import Footer from './components/Footer/Footer.jsx'
import FaqSection from './FaqSection/FaqSection.jsx'
import StorageInfo from './StorageInfo.jsx'
import PersonalWare from './PersonalWare.jsx'
import CalculationForm from './CalculationForm/CalculationForm.jsx'
function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Services />
      <WarehouseInfo />
      <StorageInfo />
      <Fulfillment />
      <PersonalWare />
      <FaqSection />
      <Footer />
    </>
  )
}

export default App
