import React, { useState } from 'react'
import Header from './Header/Header'
import {MainInfo, Services,LogisticsHero,ServicesHero,DeliveryLogistics,MarketplaceSupport} from './MainLayout/index'

function App() {

  return (
    <>
          <Header />
          <LogisticsHero  />
          <ServicesHero />
          <MainInfo />
          <Services />
          <DeliveryLogistics />
          <MarketplaceSupport />
    </>
  )
}

export default App
