import React, { useState } from "react";
import "./FaqSection.css"; // Подключаем стили

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const initialQuestions = [
    {
      question: "What services does your fulfillment center provide?",
      answer: `We offer a full range of order processing services:
•	Receiving and warehousing goods (pallet, bin storage)
•	Labeling and sticker application (including FBA, UPI, barcodes)
•	Order picking and packing
•	Returns processing and quality control
•	Sorting, repackaging, creating bundles
•	Preparing goods for marketplaces (Amazon, eBay, Otto, etc.)
•	Delivery to marketplaces and customers
•	International shipments
`,
    },
    {
      question: "What additional services are available?",
      answer: `In addition to standard fulfillment services, we offer:
•	Product listing creation and optimization (copywriting, SEO)
•	Product photography and image editing
•	Content creation for marketplaces and social media
•	Sales and competitor analysis, inventory turnover reporting
•	API and ERP order integration and automation
•	Technical support for marketplace integration
•	Turnkey e-commerce store development (Shopify, etc.)
`,
    },
    {
      question: "How do I start working with you?",
      answer: `1.	Contact us to discuss your needs and receive a quote.
2.	Sign a service agreement.
3.	Send us your goods for receiving.
4.	Set up integration (if necessary) and start selling!
`,
    },
    {
      question: "What types of goods can be stored in your warehouse?",
      answer:
        `We handle most product categories, except:
•	Perishable goods
•	Hazardous materials (ADR)
•	Goods prohibited for sale under EU law

Animals, Plants, Money, Expensive jewelry, Perishable food, Strong smelling, Explosive and flammable substances/items, Radioactive or toxic substances or gases, Lubricants, Flammable substances, Volatile liquids, Industrial and household paints in leaky packaging or previously opened packaging, Weapons, ammunition, explosive objects. Any items and property stolen or prohibited for circulation on the territory of Germany
`,
    },
    {
      question: "What is the minimum volume for starting cooperation?",
      answer: "We work with both small sellers and large companies. The minimum volume is determined individually based on the type of goods and storage volume.",
    },
    {
      question: "What languages do you provide support in?",
      answer: "We provide support in Russian, English, and German.",
    },
    {
      question: "Can I scale my storage volume?",
      answer: "Yes, you can start with a small volume (e.g., 1-2 pallets) and scale up to container shipments.",
    },
    {
      question: "Where is your warehouse located?",
      answer: "Our warehouse is located in Hamburg, Germany. We provide convenient logistics across Europe.",
    },
    {
      question: "What are your rates?",
      answer: "Rates depend on the type and volume of goods. Please submit a request, and we will find the best option for you.",
    },
    {
      question: "Why should I choose you?",
      answer: `•	10+ years of experience in e-commerce and working with Amazon
•	Flexible cooperation terms
•	Full range of services—from storage to promotion
•	Dedicated IT and content team to support your business
•	Scalability options
•	Multilingual support (Russian, English, German)
If you have any further questions, please contact us—we will be happy to assist you!
`,
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
                  className={`faq-toggle ${
                    activeIndex === index ? "active" : ""
                  }`}
                  aria-label={
                    activeIndex === index
                      ? "Antwort ausblenden"
                      : "Antwort anzeigen"
                  }
                >
                  {activeIndex === index ? "−" : "+"}
                </button>
              </div>
              <div
                className={`faq-answer ${activeIndex === index ? "show" : ""}`}
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
