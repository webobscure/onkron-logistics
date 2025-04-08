import { useLanguage } from '../context/LanguageContext'

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <select value={language} onChange={(e) => toggleLanguage(e.target.value)}>
      <option value="en">EN</option>
      <option value="ru">RU</option>
    </select>
  )
}

export default LanguageSwitcher
