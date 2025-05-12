import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import deIcon from '../assets/DE.png'
import enIcon from '../assets/EN.png'
import ruIcon from '../assets/RU.png'
import cnIcon from '../assets/CN.png'
import './LanguageSwitcher.css'

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  const handleLanguageChange = (lang) => {
    toggleLanguage(lang)
    setIsOpen(false)
  }

  const getFlagIcon = (lang) => {
    switch (lang) {
      case 'de':
        return deIcon
      case 'en':
        return enIcon
      case 'ru':
        return ruIcon
      case 'cn':
        return cnIcon
      default:
        return deIcon
    }
  }

  return (
    <div className="language-dropdown" ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        <img src={getFlagIcon(language)} alt={language} className="flag-icon" />
        <span>{language.toUpperCase()}</span>
        <span className="arrow">&#9662;</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li onClick={() => handleLanguageChange('de')}>
            <img src={deIcon} alt="DE" className="flag-icon" />
            <span>DE</span>
          </li>
          <li onClick={() => handleLanguageChange('en')}>
            <img src={enIcon} alt="EN" className="flag-icon" />
            <span>EN</span>
          </li>
          <li onClick={() => handleLanguageChange('ru')}>
            <img src={ruIcon} alt="RU" className="flag-icon" />
            <span>RU</span>
          </li>
        <li onClick={() => handleLanguageChange('cn')}>
            <img src={cnIcon} alt="CN" className="flag-icon" />
            <span>CN</span>
          </li>
        </ul>
      )}
    </div>
  )
}

export default LanguageSwitcher
