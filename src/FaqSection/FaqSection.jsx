import React, { useState } from "react";
import "./FaqSection.css"; // Подключаем стили

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const initialQuestions = [
    {
      question: "How to rent a warehouse in Hamburg?",
      answer:
        "You can rent a warehouse from 12.5 euros per 1 m² - you can choose from warm and cold boxes of different sizes. Book a box by phone (+49) 402-999-6807 or leave a request on the website. On request, we will give you an online tour.",
    },
    {
      question: "What can I store in the warehouse?",
      answer: `In our warehouse you can store anything that is not prohibited by the legislation of the Russian Federation and is not included in the list from the question “What can't be stored in the warehouse?”.`,
    },
    {
      question: "What can't be stored in the warehouse?",
      answer:
        `Animals
Plants
Money
Expensive jewelry
Perishable food
Strong smelling
Explosive and flammable substances/items
Radioactive or toxic substances or gases
Lubricants
Flammable substances
Volatile liquids
Industrial and household paints in leaky packaging or previously opened packaging
Weapons, ammunition, explosive objects
Any items and property stolen or prohibited for circulation on the territory of the Russian Federation`},
    {
      question: "I need to move furniture into storage - do you do that?",
      answer: "Yes, we will provide delivery, as well as movers, if necessary. We will disassemble, pack, carefully load, deliver to the warehouse, place and provide a photo report. You don't even have to be present",
    },
    {
      question: "Is there a cart?",
      answer: "There is, provided free of charge.",
    },
  ];

  const [questions] = useState(initialQuestions);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="faq-title">Frequently asked questions (FAQ)</h2>
        
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
                  className={`faq-toggle ${activeIndex === index ? 'active' : ''}`}
                  aria-label={activeIndex === index ? 'Antwort ausblenden' : 'Antwort anzeigen'}
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
  );
};

export default FaqSection;
