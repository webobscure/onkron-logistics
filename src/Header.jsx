import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import logo from "./assets/logo.png";
import { Link } from "react-router";
import PropTypes from "prop-types";

const Header = ({
  scrollToWarehouse,
  scrollToServices,
  scrollToMarketplace,
  scrollToFullfilment,
  scrollToFaq,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef(null);
  useEffect(() => {
    // Создаем скрипт Bitrix
    const script = document.createElement('script');
    script.dataset.b24Form = 'click/48/clb435';
    script.dataset.skipMoving = 'true';
    script.innerHTML = `
      (function(w,d,u){
        var s=d.createElement('script');
        s.async=true;
        s.src=u+'?'+(Date.now()/180000|0);
        var h=d.getElementsByTagName('script')[0];
        h.parentNode.insertBefore(s,h);
      })(window,document,'https://cdn-ru.bitrix24.ru/b6258443/crm/form/loader_48.js');
    `;

    // Вставляем скрипт перед кнопкой
    if (buttonRef.current && buttonRef.current.parentNode) {
      buttonRef.current.parentNode.insertBefore(script, buttonRef.current);
    }

    return () => {
      // Удаляем скрипт при размонтировании компонента
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <header>
      <div className="announcement-bar">
        <h6>Get Started Today! Schedule a Consulation.</h6>
      </div>
      <div className="border-block">
        <div className="container">
          <div className="header-top">
            <img src={logo} alt="Logo" className="logo" />

            <div className="contact-block">
              <div className="contact-info">
                <a href="mailto:order@onkron.de" className="email">
                  order@onkron.de
                </a>
                <a href="tel:+494029996807" className="phone">
                  (+49) 402-999-6807
                </a>
              </div>
              {/* <button className="calculator-btn">Calculator</button> */}
            </div>

            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
              <div className={`burger ${menuOpen ? "open" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="header-container">
        <div className={`header-bottom ${menuOpen ? "hide-right" : ""}`}>
          <div className="nav-section">
            <nav className="nav-links">
              <button onClick={scrollToServices}>Services</button>
              <button onClick={scrollToMarketplace}>Marketplace</button>
              <button onClick={scrollToFullfilment}>Fullfilment</button>
              <button onClick={scrollToFaq}>FAQ</button>
            </nav>

            <div className="extra-buttons">
              {/* <button className="outline-btn">Why choose us</button> */}
              <button className="outline-btn" onClick={scrollToWarehouse}>
                Warehouse address
              </button>
            </div>
          </div>

          <div className="contact-section">
            <div className="location">
              <svg
                height="16"
                viewBox="0 0 12 16"
                width="12"
                className="css-svg"
              >
                <path d="M5.7946 0C2.59944 0 0 2.59944 0 5.79457C0 9.75982 5.1856 15.581 5.40638 15.8269C5.61376 16.0579 5.97582 16.0575 6.18282 15.8269C6.4036 15.581 11.5892 9.75982 11.5892 5.79457C11.5891 2.59944 8.98973 0 5.7946 0ZM5.7946 8.70998C4.18704 8.70998 2.87922 7.40213 2.87922 5.79457C2.87922 4.187 4.18707 2.87919 5.7946 2.87919C7.40213 2.87919 8.70995 4.18704 8.70995 5.7946C8.70995 7.40217 7.40213 8.70998 5.7946 8.70998Z"></path>
              </svg>{" "}
              Hamburg
            </div>
          
            <button ref={buttonRef} className="outline-btn">Request a Quote</button>
            <a href="tel:+494029996807" className="icon-btn">
              <svg
                fill="none"
                height="16"
                viewBox="0 0 16 16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                className="css-hcm89n"
              >
                <path
                  d="M15.9984 12.8923C15.9761 12.2734 15.7183 11.6958 15.2725 11.266C14.3997 10.4243 13.6684 9.93844 12.971 9.73694C12.0103 9.45925 11.1203 9.71175 10.326 10.4874C10.3248 10.4886 10.3236 10.4898 10.3225 10.491L9.47746 11.3297C8.94936 11.032 7.92249 10.3783 6.81305 9.26891L6.7308 9.18672C5.62118 8.07712 4.96758 7.05005 4.67018 6.52255L5.50893 5.67751C5.51011 5.67632 5.5113 5.67514 5.51249 5.67392C6.28815 4.87973 6.54065 3.98979 6.26299 3.02887C6.06146 2.33159 5.57561 1.60027 4.73393 0.727425C4.30412 0.281704 3.72658 0.0238906 3.10768 0.00157802C2.4884 -0.0207658 1.89415 0.194798 1.43327 0.608487L1.41534 0.624612C1.40702 0.632081 1.3989 0.6398 1.39096 0.647706C0.473493 1.56518 -0.00744413 2.84959 8.71118e-05 4.36213C0.0129309 6.93158 1.42509 9.86997 3.77755 12.2224C4.22115 12.666 4.7253 13.105 5.27599 13.5273C5.5499 13.7373 5.94221 13.6855 6.15224 13.4116C6.3623 13.1376 6.31049 12.7453 6.03655 12.5353C5.52921 12.1463 5.06655 11.7436 4.66143 11.3386C2.53655 9.21372 1.26127 6.60339 1.25006 4.35591C1.24427 3.19103 1.59468 2.21874 2.26352 1.54293L2.2683 1.53862C2.72259 1.13083 3.41037 1.15565 3.83418 1.59512C5.45227 3.27319 5.33511 4.06541 4.62012 4.7986L3.46155 5.96586C3.27987 6.14892 3.22927 6.4248 3.33418 6.66042C3.36358 6.72649 4.07512 8.29877 5.84715 10.0708L5.92943 10.153C7.70124 11.9248 9.27355 12.6363 9.33961 12.6657C9.57518 12.7707 9.85111 12.7201 10.0341 12.5384L11.2014 11.3798C11.9347 10.6648 12.7269 10.5477 14.4049 12.1658C14.8444 12.5895 14.8692 13.2773 14.4615 13.7316L14.457 13.7365C13.7868 14.3999 12.8248 14.75 11.6726 14.75C11.6631 14.75 11.6536 14.75 11.6441 14.7499C10.7231 14.7453 9.65668 14.4929 8.56008 14.0199C8.24321 13.8831 7.87536 14.0292 7.73868 14.3462C7.60196 14.6632 7.74805 15.0309 8.06502 15.1677C9.33258 15.7144 10.5346 15.9944 11.6379 15.9999C11.6496 16 11.6612 16 11.673 16C13.1703 16 14.4419 15.5194 15.3523 14.6091C15.3602 14.6011 15.3679 14.593 15.3754 14.5847L15.3916 14.5666C15.8052 14.1058 16.0208 13.5112 15.9984 12.8923Z"
                  fill="#e31e24"
                ></path>
              </svg>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=494029996807"
              className="icon-btn"
            >
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1u9viqm-MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 21 21"
                aria-hidden="true"
                height="16"
                width="16"
              >
                <path
                  d="M17.9403 3.05182C15.9662 1.08486 13.3409 0.00115356 10.5439 0C4.78056 0 0.0900243 4.66796 0.0877061 10.4053C0.0869333 12.2393 0.568351 14.0296 1.4834 15.6077L0 21L5.543 19.5529C7.07032 20.3821 8.7898 20.819 10.5397 20.8195H10.544C16.3068 20.8195 20.9978 16.1512 21 10.4136C21.0012 7.63301 19.9146 5.01865 17.9403 3.05182ZM10.5439 19.0621H10.5403C8.98092 19.0615 7.45154 18.6444 6.11701 17.8565L5.79981 17.669L2.51051 18.5278L3.38847 15.3361L3.18176 15.0089C2.31178 13.6318 1.85239 12.0401 1.85316 10.4059C1.85496 5.63721 5.7537 1.75752 10.5474 1.75752C12.8687 1.75829 15.0508 2.65909 16.6916 4.29395C18.3324 5.92881 19.2354 8.10187 19.2347 10.413C19.2326 15.1821 15.3341 19.0621 10.5439 19.0621ZM15.311 12.5844C15.0498 12.4541 13.7652 11.8253 13.5257 11.7384C13.2864 11.6516 13.112 11.6084 12.938 11.8686C12.7637 12.1288 12.2631 12.7146 12.1106 12.888C11.9582 13.0616 11.8059 13.0833 11.5446 12.9531C11.2833 12.823 10.4415 12.5483 9.44353 11.6625C8.66693 10.9731 8.14263 10.1216 7.99014 9.86144C7.83791 9.60099 7.98885 9.47384 8.10476 9.3308C8.38759 8.98127 8.67079 8.61482 8.75786 8.4414C8.84505 8.26785 8.80139 8.11597 8.73596 7.98587C8.67079 7.85577 8.14829 6.57596 7.93064 6.05519C7.71839 5.54839 7.50318 5.61683 7.34271 5.60889C7.19048 5.60132 7.01623 5.59979 6.84197 5.59979C6.66785 5.59979 6.38477 5.66477 6.14522 5.92522C5.9058 6.18554 5.23094 6.81449 5.23094 8.09431C5.23094 9.37412 6.16711 10.6105 6.29771 10.784C6.4283 10.9576 8.14005 13.5839 10.7608 14.71C11.3841 14.9781 11.8707 15.138 12.2503 15.2578C12.8762 15.4557 13.4456 15.4278 13.8958 15.3609C14.3978 15.2861 15.4414 14.7318 15.6593 14.1245C15.877 13.5171 15.877 12.9966 15.8116 12.888C15.7464 12.7796 15.5721 12.7146 15.311 12.5844Z"
                  fill="#e31e24"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <button>Services</button>
          <button>Prices</button>
          <button>Offers</button>
          <button>Mehr</button>
          <button>Franchise</button>
          <button>Warehouse address</button>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  scrollToWarehouse: PropTypes.func.isRequired,
  scrollToFaq: PropTypes.func.isRequired,
  scrollToServices: PropTypes.func.isRequired,
  scrollToMarketplace: PropTypes.func.isRequired,
  scrollToFullfilment: PropTypes.func.isRequired,

};

export default Header;
