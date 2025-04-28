import React, { createContext, useState, useContext } from 'react'
import en from '../locales/en.json'
import ru from '../locales/ru.json'
import de from '../locales/de.json'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('de') // Немецкий по умолчанию

  const toggleLanguage = (lang) => {
    setLanguage(lang)
  }

  const translations = language === 'en' ? en : language === 'ru' ? ru : de

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, translations }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
