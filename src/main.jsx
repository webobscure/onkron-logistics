import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ContactsPage from './pages/ContactsPage'
import { LanguageProvider } from './context/LanguageContext'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter>
      <Routes >
        <Route path="/" element={<App />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>
)
