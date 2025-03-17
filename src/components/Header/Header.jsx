import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router";
import BitrixForm from "./BitrixForm";
import { logo } from "../assets";
import Button from "../components/Button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
      <div className="announcement-bar">
        Hier wird Ihr Text stehen
       <Button />
      </div>

      <header className="header">
        <div className="container">
          <Link to="/" className="logo">
            <img
              src={logo}
              alt="Логотип"
            />
          </Link>
          <nav className={menuOpen ? "nav open" : "nav"}>
            <ul>
              <li><a href="#services">Dienstleistungen</a></li>
              <li><a href="#logistics">Lieferung und Logistik</a></li>
              <li><a href="#pricing">Honorare und Kosten</a></li>
              <li><a href="#about">Über das Unternehmen</a></li>
              <li><Link to="/news">Nachrichten</Link></li>
            </ul>
          </nav>
          <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

   
    </>
  );
};

export default Header;
