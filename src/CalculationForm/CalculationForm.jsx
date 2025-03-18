import { useState } from 'react';
import './CalculationForm.css';
import { Container } from '@mui/material';
const CalculationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    size: '',
    wishes: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Обязательное поле';
    if (!formData.phone.trim()) newErrors.phone = 'Обязательное поле';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length === 0) {
      // Здесь обычно отправка данных на сервер
      setIsModalOpen(true);
      setFormData({ name: '', phone: '', size: '', wishes: '' });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="calculation-section">
      <Container>
        <div className="calc-block">
        <h2 className="section-title">Рассчитать <br/> стоимость хранения</h2>
        
        <form onSubmit={handleSubmit} className="calculation-form">
          <div className="form-group">
            <label>
              Представьтесь *
              <input
                type="text"
                name="name"
                value={formData.name} 
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                htmlFor="Представьтесь *"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </label>
          </div>

          <div className="form-group">
            <label>
              Мобильный телефон *
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </label>
          </div>

          <div className="form-group">
            <label>
              Размер бокса
              <select
                name="size"
                value={formData.size}
                onChange={handleChange}
              >
                <option value="">Выберите размер</option>
                <option value="1">1 м²</option>
                <option value="2">2 м²</option>
                <option value="5">5 м²</option>
                <option value="10">10 м²</option>
              </select>
            </label>
          </div>

          <div className="form-group">
            <label>
              Дополнительные пожелания
              <textarea
                name="wishes"
                value={formData.wishes}
                onChange={handleChange}
              />
            </label>
            <button type="submit" className="submit-btn">Отправить</button>
          </div>

          <div className="form-footer">
            <p className="privacy-text">
              Нажимая кнопку «Отправить», я даю свое согласие на обработку моих персональных данных, 
              в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», 
              на условиях и для целей, определенных в политике обработке персональных данных.
            </p>
          </div>
        </form>
        </div>
        </Container>

        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>Ваша заявка успешно принята</h3>
              <p>Менеджер свяжется с вами позже</p>
              <button 
                className="modal-close"
                onClick={() => setIsModalOpen(false)}
              >
                Закрыть
              </button>
            </div>
          </div>
        )}
    </section>
  );
};

export default CalculationForm;