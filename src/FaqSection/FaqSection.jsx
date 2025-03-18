import React, { useState } from "react";
import "./FaqSection.css"; // Подключаем стили

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const initialQuestions = [
    {
      question: "Как снять склад в Гамбурге?",
      answer:
        "Снять склад в аренду можно по цене от 12.5 евро за 1 м² - на выбор теплые и холодные боксы разной площади. Забронировать бокс по телефону 8 (964) 377-55-19 или оставить заявку на сайте. По желанию проведем онлайн-экскурсию.",
    },
    {
      question: "Что я могу хранить на складе?",
      answer: `На нашем складе можно хранить всё, что не запрещено законодательством РФ и не включено в список из вопроса «Что хранить на складе нельзя?».`,
    },
    {
      question: "Что хранить на складе нельзя?",
      answer:
        `Животных
Растения
Деньги
Дорогие ювелирные украшения
Скоропортящиеся продукты питания
Сильно пахнущие
Взрывоопасные и огнеопасные вещества/предметы
Радиоактивные или токсичные вещества или газы
Горюче-смазочные вещества
Легковоспламеняющиеся вещества
Летучие жидкости
Промышленные и бытовые краски в негерметичной упаковке или ранее вскрытой упаковке
Оружие, боеприпасы, взрывоопасные предметы
Любые предметы и имущество, краденные или запрещенные к обороту на территории Российской Федерации`},
    {
      question: "Мне нужно перевезти мебель на склад – вы этим занимаетесь?",
      answer: "Да, мы предоставим доставку, а также грузчиков, при необходимости. Сами все разберем, упакуем, бережно погрузим, доставим до склада, разместим и предоставим фотоотчет. Вам даже необязательно присутствовать",
    },
    {
      question: "Есть ли тележка?",
      answer: "Есть, предоставляется бесплатно.",
    },
  ];

  const [questions, setQuestions] = useState(initialQuestions);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="faq-title">Часто задаваемые вопросы (FAQ)</h2>
        
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
                  aria-label={activeIndex === index ? 'Скрыть ответ' : 'Показать ответ'}
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
