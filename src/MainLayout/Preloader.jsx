import React, { useState, useEffect } from 'react'
import './Preloader.css'

const Preloader = ({ onLoaded }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true)
      onLoaded() // Скрываем прелоадер сразу после загрузки
    }

    window.addEventListener('load', handleLoad)
    return () => window.removeEventListener('load', handleLoad)
  }, [onLoaded])

  return (
    <div className={`preloader ${isLoaded ? 'preloader-hidden' : ''}`}>
      <img
        src="https://onkron.de/cdn/shop/t/19/assets/onkron_rgb.svg?v=93925287087293842091741168169"
        alt="ONKRON Logo"
        className="preloader-logo"
      />
      <div className="loader"></div>
    </div>
  )
}

export default Preloader
