import React, { forwardRef, useState } from 'react'
import './FaqSection.css'
import { useLanguage } from '../context/LanguageContext'

const FaqSection = forwardRef((props, ref) => {
  const [activeIndex, setActiveIndex] = useState(null)
  const { translations } = useLanguage()

  const questions = translations.faq_questions

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faq-section" ref={ref}>
      <div className="container">
        <h2 className="faq-title">{translations.faq_title}</h2>
        <div className="faq-list">
          {questions.map((item, index) => (
            <div className="faq-item" key={index}>
              <div
                className="faq-question"
                onClick={() => handleToggle(index)}
                role="button"
                aria-expanded={activeIndex === index}
              >
                <span>{item.question}</span>
                <button
                  className={`faq-toggle ${
                    activeIndex === index ? 'active' : ''
                  }`}
                  aria-label={
                    activeIndex === index ? 'Hide answer' : 'Show answer'
                  }
                >
                  {activeIndex === index ? '−' : '+'}
                </button>
              </div>
              <div
                className={`faq-answer ${activeIndex === index ? 'show' : ''}`}
                aria-hidden={activeIndex !== index}
              >
                <div className="answer-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

FaqSection.displayName = 'FaqSection'

export default FaqSection
