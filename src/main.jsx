import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ContactsPage from './pages/ContactsPage'
import { LanguageProvider } from './context/LanguageContext'
import Calculator from './pages/Calculator/Calculator.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <HashRouter>
      <Routes >
        <Route path="/" element={<App />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/calculator" element={<Calculator />} />

      </Routes>
      </HashRouter>
    </LanguageProvider>
  </StrictMode>
)
