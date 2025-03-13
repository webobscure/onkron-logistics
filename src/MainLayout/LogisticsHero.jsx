import React, { useEffect, useRef, useState } from 'react'
import './LogisticsHero.css'

const LogisticsHero = ({ isAppLoaded }) => {
  const contentRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isAppLoaded) return // Ждём, пока прелоадер исчезнет

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // Отключаем наблюдение после активации
        }
      },
      { threshold: 0.2 } // 20% элемента должно быть видно
    )

    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    return () => observer.disconnect()
  }, [isAppLoaded]) // Теперь useEffect зависит от isAppLoaded

  return (
    <div className="hero-container">
      <div
        className={`hero-content fade-in-left`}
        ref={contentRef}
      >
        <h1>Willkommen bei Hamburg Logistics Solutions</h1>
        <p>
          Ihr zuverlässiger Partner für reibungsloses Fulfillment, Lagerung und
          Logistik im Herzen von Hamburg. Wir rationalisieren Ihre Abläufe,
          damit Sie sich auf das Wachstum Ihres Unternehmens konzentrieren
          können.
        </p>
        <div className="hero-buttons">
          <button className="btn">Angebot anfordern</button>
          <button className="btn secondary">Mehr Informationen</button>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="https://psv4.userapi.com/s/v1/d/yBuUHUWJnlCANmtUX6tZnY9ZlsE3tdjIvM0vdGcgcVqu4RnzBMMDEdxI6mK1sPBuK0i64gZ8D-DnosuEVrIJpYU7-IadQQp9k4NNDu-HZbaHukpgM0xQdw/09870e48-7e0a-4e5b-9f38-a54dff54d82a.jpg"
          alt="Hamburg Logistics"
        />
      </div>
    </div>
  )
}

export default LogisticsHero
