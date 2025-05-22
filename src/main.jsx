import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ContactsPage from './pages/ContactsPage'
import { LanguageProvider } from './context/LanguageContext'
import Calculator from './pages/Calculator/Calculator.jsx'
import Fullfilment from './pages/Fullfilment/Fullfilment.jsx'
import Delivery from './pages/Delivery/Delivery.jsx'
import Marketplaces from './pages/Marketplaces/Marketplaces.jsx'
import AboutCompany from './pages/AboutCompany/AboutCompany.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <HashRouter>
      <Routes >
        <Route path="/" element={<App />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/fullfilment" element={<Fullfilment />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/marketplaces" element={<Marketplaces />} />
        <Route path="/about" element={<AboutCompany />} />
      </Routes>
      </HashRouter>
    </LanguageProvider>
  </StrictMode>
)
