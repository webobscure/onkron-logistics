import React, { createContext, useState, useContext } from 'react'
import en from '../locales/en.json'
import ru from '../locales/ru.json'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')

  const toggleLanguage = (lang) => {
    setLanguage(lang)
  }

  const translations = language === 'en' ? en : ru

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, translations }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
