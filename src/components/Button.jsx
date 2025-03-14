import React, {useEffect, useState, useRef} from 'react'
import BitrixForm from '../Header/BitrixForm';

export default function Button() {

    const [isFormOpen, setIsFormOpen] = useState(false);
      const formRef = useRef(null);
    
      const handleClick = () => {
        setIsFormOpen(true);
        document.documentElement.classList.add("no-scroll");
        document.body.classList.add("no-scroll");
      };
    
      const closeForm = () => {
        setIsFormOpen(false);
        document.documentElement.classList.remove("no-scroll");
        document.body.classList.remove("no-scroll");
      };
    
      useEffect(() => {
        const handleClickOutside = (event) => {
          if (formRef.current && !formRef.current.contains(event.target)) {
            closeForm(); // Закрываем форму при клике вне области формы
          }
        };
    
        if (isFormOpen) {
          document.addEventListener("mousedown", handleClickOutside);
        } else {
          document.removeEventListener("mousedown", handleClickOutside);
        }
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [isFormOpen]);
    

  return (
    <>
     <button
          onClick={handleClick}
          className="btn btn-bitrix"
        >
          Angebot anfordern
        </button>

        {isFormOpen && (
        <div className="modal-overlay">
          <div
            className="modal-content"
            ref={formRef}
            onClick={(e) => e.stopPropagation()} // Останавливаем всплытие внутри формы
          >
            <BitrixForm onClose={closeForm} />
          </div>
        </div>
      )}
    </>
  )
}
