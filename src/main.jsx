import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ContactsPage from './pages/ContactsPage'
import { LanguageProvider } from './context/LanguageContext'
import ErrorPage from './pages/ErrorPage' // Создай этот компонент для ошибок

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />, // Показывать при ошибках
  },
  {
    path: '/contacts',
    element: <ContactsPage />,
    errorElement: <ErrorPage />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </StrictMode>
)
