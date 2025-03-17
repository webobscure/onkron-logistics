import React, { useState, useEffect } from "react";
import {
  botStash,
  box,
  car,
  gruz,
  gruzT,
  indexInfoBanner,
  pc,
  phone,
  s1,
  s2,
  s3,
  s4,
  s5,
  s6,
  topStash,
} from "../assets";
import "./Sklad.css";
import "./Mui.css";
import { logo } from "../assets/index";
import FaqSection from "../FaqSection/FaqSection";
import CalculationForm from "../CalculationForm/CalculationForm";

export default function Sklad() {
  const [buttonClass1, setButtonClass1] = useState(
    "MuiButtonBase-root css-55an0p-MuiButtonBase-root"
  );
  const [buttonClass2, setButtonClass2] = useState(
    "MuiButtonBase-root css-1mfplx5-MuiButtonBase-root"
  );
  const [currentImage, setCurrentImage] = useState(gruz); // Начальное изображение
  const images = [gruz, gruzT]; // Массив с изображениями

  useEffect(() => {
    const interval = setInterval(() => {
      // Меняем классы для обеих кнопок
      setButtonClass1((prevClass) =>
        prevClass === "MuiButtonBase-root css-55an0p-MuiButtonBase-root"
          ? "MuiButtonBase-root css-1mfplx5-MuiButtonBase-root"
          : "MuiButtonBase-root css-55an0p-MuiButtonBase-root"
      );
      setButtonClass2((prevClass) =>
        prevClass === "MuiButtonBase-root css-55an0p-MuiButtonBase-root"
          ? "MuiButtonBase-root css-1mfplx5-MuiButtonBase-root"
          : "MuiButtonBase-root css-55an0p-MuiButtonBase-root"
      );
      setCurrentImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length; // Переход к следующему изображению
        return images[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
  }, []);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="header-right">
            <p>order@onkron.de | +494029996807</p>
            <button className="btn">Калькулятор</button>
          </div>
        </div>
      </header>
      <nav className="nav">
        <div className="container">
          <ul className="nav-menu">
            <li>
              <a href="#">Услуги</a>
            </li>
            <li>
              <a href="#">Цены</a>
            </li>
            <li>
              <a href="#">Акции</a>
            </li>
            <li>
              <a href="#">Еще</a>
            </li>
            <li>
              <a href="#">Франшиза</a>
            </li>
          </ul>
          <div className="nav-right">
            <a href="#">Адреса складов</a>
            <a href="#">Санкт-Петербург</a>
            <a href="#">Оптата сайта</a>
            <a href="#">
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
                  fill="#50B848"
                ></path>
              </svg>
            </a>
            <a href="#">
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1u9viqm-MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 21 21"
                aria-hidden="true"
                height="16"
                width={16}
              >
                <path
                  d="M17.9403 3.05182C15.9662 1.08486 13.3409 0.00115356 10.5439 0C4.78056 0 0.0900243 4.66796 0.0877061 10.4053C0.0869333 12.2393 0.568351 14.0296 1.4834 15.6077L0 21L5.543 19.5529C7.07032 20.3821 8.7898 20.819 10.5397 20.8195H10.544C16.3068 20.8195 20.9978 16.1512 21 10.4136C21.0012 7.63301 19.9146 5.01865 17.9403 3.05182ZM10.5439 19.0621H10.5403C8.98092 19.0615 7.45154 18.6444 6.11701 17.8565L5.79981 17.669L2.51051 18.5278L3.38847 15.3361L3.18176 15.0089C2.31178 13.6318 1.85239 12.0401 1.85316 10.4059C1.85496 5.63721 5.7537 1.75752 10.5474 1.75752C12.8687 1.75829 15.0508 2.65909 16.6916 4.29395C18.3324 5.92881 19.2354 8.10187 19.2347 10.413C19.2326 15.1821 15.3341 19.0621 10.5439 19.0621ZM15.311 12.5844C15.0498 12.4541 13.7652 11.8253 13.5257 11.7384C13.2864 11.6516 13.112 11.6084 12.938 11.8686C12.7637 12.1288 12.2631 12.7146 12.1106 12.888C11.9582 13.0616 11.8059 13.0833 11.5446 12.9531C11.2833 12.823 10.4415 12.5483 9.44353 11.6625C8.66693 10.9731 8.14263 10.1216 7.99014 9.86144C7.83791 9.60099 7.98885 9.47384 8.10476 9.3308C8.38759 8.98127 8.67079 8.61482 8.75786 8.4414C8.84505 8.26785 8.80139 8.11597 8.73596 7.98587C8.67079 7.85577 8.14829 6.57596 7.93064 6.05519C7.71839 5.54839 7.50318 5.61683 7.34271 5.60889C7.19048 5.60132 7.01623 5.59979 6.84197 5.59979C6.66785 5.59979 6.38477 5.66477 6.14522 5.92522C5.9058 6.18554 5.23094 6.81449 5.23094 8.09431C5.23094 9.37412 6.16711 10.6105 6.29771 10.784C6.4283 10.9576 8.14005 13.5839 10.7608 14.71C11.3841 14.9781 11.8707 15.138 12.2503 15.2578C12.8762 15.4557 13.4456 15.4278 13.8958 15.3609C14.3978 15.2861 15.4414 14.7318 15.6593 14.1245C15.877 13.5171 15.877 12.9966 15.8116 12.888C15.7464 12.7796 15.5721 12.7146 15.311 12.5844Z"
                  fill="#50B848"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </nav>

      <section className="main-section">
        <div className="container">
          <div className="main-content">
            <h1>Аренда склада для хранения в Санкт-Петербурге</h1>
            <p>
              Склад индивидуального хранения для физических и юридических лиц<br />
              <span className="main-price">от 1250 ₽/1 м²</span> 
            </p>
            <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-spacing-xs-undefined MuiGrid-grid-xs-12 css-1wkbcmy-MuiGrid-root">
              <button className="btn btn-large main-content-button">
                Арендовать бокс
              </button>
            </div>
            <div className="css-1h4wkk4-MuiStack-root">
              <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-undefined css-1myxk0z-MuiGrid-root">
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-auto css-7vx2u5-MuiGrid-root">
                  <button className={buttonClass1} tabIndex="0" type="button">
                    <div className="css-pb9hqo">
                      <div className="css-1sqrpw3"></div>
                    </div>
                    <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span>
                  </button>
                </div>
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-auto css-7vx2u5-MuiGrid-root">
                  <button className={buttonClass2} tabIndex="0" type="button">
                    <div className="css-pb9hqo">
                      <div className="css-1sqrpw3"></div>
                    </div>
                    <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="main-image">
            <img src={currentImage} alt="Illustration" />
          </div>
        </div>
      </section>

      <section className="steps-section">
        <div className="container steps-container">
          <div className="steps-title">
            <h1>Как арендовать склад за 5 минут?</h1>
          </div>
          <div className="steps">
            <div className="step">
              <div className="steps-container__inner">
                <img src={phone} alt="Phone" />
                <h2>Позвоните нам</h2>
              </div>
              <p>Мы ответим на все вопросы, наши операторы на связи 24/7</p>
              <a href="tel:+1234567890" className="button">
                Позвонить
              </a>
            </div>
            <div className="step">
              <div className="steps-container__inner">
                <img src={box} alt="Box" />
                <h2>Выберите бокс</h2>
              </div>
              <p>
                Мы поможем подобрать склад нужного размера, под ваши потребности
              </p>
              <a href="#choose-box" className="button">
                Выбрать бокс
              </a>
            </div>
            <div className="step">
              <div className="steps-container__inner">
                <img src={pc} alt="PC" />
                <h2>Онлайн экскурсия</h2>
              </div>
              <p>
                Вам не нужно приезжать заранее, чтобы посмотреть склад или
                выбрать ячейку. По желанию, мы проведем вам дистанционную
                экскурсию
              </p>
            </div>
            <div className="step">
              <div className="steps-container__inner">
                <img src={car} alt="Car" />
                <h2>Перевезите вещи</h2>
              </div>
              <p>
                Вы можете сами привезти вещи на склад или доверьте это нам, мы
                упакуем, погрузим, доставим и разместим вещи на вашем складе
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="dop-block">
        <div className="container">
          <h1>Дополнительные услуги для вашего удобства</h1>
          <div className="left-and-right">
            <div className="services">
              <div className="service">
                <h2>Доставка</h2>
                <div className="price">от 540 р</div>
              </div>
              <div className="service">
                <h2>Сборка/разборка,<br/> упаковка</h2>
                <div className="price">от 770р</div>
              </div>
              <div className="service">
                <h2>Продажа коробок и<br/> упаковочного материала</h2>
                <div className="price">от 50 Р</div>
              </div>

              <div className="service">
                <h2>Грузчики</h2>
                <div className="price">470 р</div>
              </div>
            </div>
            <div className="service-large">
              <h2>Использование тележек на территории склада</h2>
              <div className="price">бесплатно</div>
            </div>
          </div>
        </div>
      </section>
      <section className="help-block">
        <div className="container">
          <div className="help-block__inner">
            <div className="help-block__left">
              <h1>
                Сложно определиться? <br /> Мы поможем!
              </h1>
              <p>
                Ответьте на несколько вопросов и мы подберем подходящий вам
                контейнер и посчитаем стоимость аренды — это займет всего 2
                минуты!
              </p>
            </div>

            <div className="help-block__right">
              <div className="question">
                <h3>1. На сколько вы хотите арендовать склад?</h3>
                <div className="options">
                  <div className="option">
                    <input
                      type="radio"
                      id="less-than-1-month"
                      name="rent-period"
                    />
                    <label htmlFor="less-than-1-month">Меньше 1 месяца</label>
                  </div>
                  <div className="option">
                    <input type="radio" id="1-5-months" name="rent-period" />
                    <label htmlFor="1-5-months">1-5 месяцев</label>
                  </div>
                  <div className="option">
                    <input
                      type="radio"
                      id="up-to-6-months"
                      name="rent-period"
                    />
                    <label htmlFor="up-to-6-months">До 6 месяцев</label>
                  </div>
                  <div className="option">
                    <input
                      type="radio"
                      id="more-than-6-months"
                      name="rent-period"
                    />
                    <label htmlFor="more-than-6-months">Больше 6 месяцев</label>
                  </div>
                </div>
              </div>

              <div className="question">
                <h3>2. Какие вещи вы планируете хранить?</h3>
                <div className="custom-option">
                  <input type="text" placeholder="Свой вариант" />
                </div>
              </div>

              <div className="under-block">
                <div className="MuiGrid-root MuiGrid-item css-19s5ip6-MuiGrid-root">
                  <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-undefined css-7sb2gg-MuiGrid-root">
                    <div className="MuiGrid-root MuiGrid-item css-11jx20z-MuiGrid-root"></div>
                    <div className="MuiGrid-root MuiGrid-item css-1nso7aj-MuiGrid-root"></div>
                    <div className="MuiGrid-root MuiGrid-item css-1nso7aj-MuiGrid-root"></div>
                  </div>
                </div>
                <a href="#" className="button">
                  Дальше
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="storage-info">
        <div className="container">
          <h1 className="storage-info__title">
            Что такое склад индивидуального хранения?
          </h1>

          <div className="storage-info__content">
            <div className="storage-left">
              <img src={indexInfoBanner} />
            </div>
            <div className="storage-right">
              <ul className="storage-features">
                <li className="storage-features__item">
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 12 10"
                    aria-hidden="true"
                    width="12"
                    height="10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5631 2.42982C10.9499 1.85673 9.99951 1.85673 9.38634 2.42982L5.03279 6.49881L3.68379 5.12338C3.10128 4.55028 2.15086 4.49297 1.50702 5.03741C0.863186 5.58186 0.832526 6.47015 1.41504 7.0719L3.83709 9.53622C4.41961 10.1093 5.37003 10.1666 6.01387 9.62219C6.04453 9.59353 6.04453 9.59353 6.07518 9.56488L11.5631 4.43566C12.1456 3.89122 12.1456 3.00292 11.5631 2.42982Z"
                      fill="#DCF1DA"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.84748 3.57605C2.22944 2.91989 1.22105 2.85428 0.537944 3.47763C-0.145159 4.10097 -0.177689 5.11801 0.440357 5.80697L3.01013 8.62844C3.62817 9.2846 4.63656 9.35022 5.31967 8.72687L11.2074 2.78866C11.8254 2.16531 11.8254 1.14827 11.2074 0.492117C10.5568 -0.164039 9.5484 -0.164039 8.89783 0.492117L4.27875 5.15082L2.84748 3.57605ZM4.80993 8.19185L4.81851 8.1832L4.81894 8.18277L4.81915 8.18256L4.81936 8.18235L4.81957 8.18213L4.81978 8.18192L4.8202 8.1815L4.82041 8.18129L10.6828 2.26858C11.0063 1.94233 11.0266 1.3846 10.6761 1.0055C10.3146 0.647501 9.78175 0.649733 9.42237 1.0122L4.25545 6.22343L2.30587 4.07839C1.95323 3.70809 1.40782 3.68383 1.03585 4.02326C0.664148 4.36244 0.632699 4.91342 0.988577 5.31191L3.55151 8.12588C3.90043 8.49249 4.43822 8.52019 4.80993 8.19185Z"
                      fill="#50B848"
                    ></path>
                  </svg>
                  Склад индивидуального хранения — это выгодное решение для
                  временного размещения личных вещей или товаров. Аренда
                  self-storage склада позволит не только сэкономить место в
                  квартире, но и выстроить рабочее пространство в вашем офисе,
                  не обращая внимания на лишние вещи.
                </li>

                <li className="storage-features__item">
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 12 10"
                    aria-hidden="true"
                    width="12"
                    height="10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5631 2.42982C10.9499 1.85673 9.99951 1.85673 9.38634 2.42982L5.03279 6.49881L3.68379 5.12338C3.10128 4.55028 2.15086 4.49297 1.50702 5.03741C0.863186 5.58186 0.832526 6.47015 1.41504 7.0719L3.83709 9.53622C4.41961 10.1093 5.37003 10.1666 6.01387 9.62219C6.04453 9.59353 6.04453 9.59353 6.07518 9.56488L11.5631 4.43566C12.1456 3.89122 12.1456 3.00292 11.5631 2.42982Z"
                      fill="#DCF1DA"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.84748 3.57605C2.22944 2.91989 1.22105 2.85428 0.537944 3.47763C-0.145159 4.10097 -0.177689 5.11801 0.440357 5.80697L3.01013 8.62844C3.62817 9.2846 4.63656 9.35022 5.31967 8.72687L11.2074 2.78866C11.8254 2.16531 11.8254 1.14827 11.2074 0.492117C10.5568 -0.164039 9.5484 -0.164039 8.89783 0.492117L4.27875 5.15082L2.84748 3.57605ZM4.80993 8.19185L4.81851 8.1832L4.81894 8.18277L4.81915 8.18256L4.81936 8.18235L4.81957 8.18213L4.81978 8.18192L4.8202 8.1815L4.82041 8.18129L10.6828 2.26858C11.0063 1.94233 11.0266 1.3846 10.6761 1.0055C10.3146 0.647501 9.78175 0.649733 9.42237 1.0122L4.25545 6.22343L2.30587 4.07839C1.95323 3.70809 1.40782 3.68383 1.03585 4.02326C0.664148 4.36244 0.632699 4.91342 0.988577 5.31191L3.55151 8.12588C3.90043 8.49249 4.43822 8.52019 4.80993 8.19185Z"
                      fill="#50B848"
                    ></path>
                  </svg>
                  Чтобы арендовать склад временного хранения в Санкт-Петербурге
                  - можно заполнить форму на сайте или забронировать бокс по
                  телефону{" "}
                  <a href="tel:+494029996807" className="">
                    +494029996807
                  </a>
                  . Мы проведем для вас персональную экскурсию в онлайн-формате
                  или при посещении склада лично.{" "}
                  <span className="brand">«Складовичкой»</span> предлагает в
                  аренду отапливаемые и неотапливаемые боксы различной площади
                  от 2 кв.м до 20 кв.м.
                </li>

                <li className="storage-features__item">
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 12 10"
                    aria-hidden="true"
                    width="12"
                    height="10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5631 2.42982C10.9499 1.85673 9.99951 1.85673 9.38634 2.42982L5.03279 6.49881L3.68379 5.12338C3.10128 4.55028 2.15086 4.49297 1.50702 5.03741C0.863186 5.58186 0.832526 6.47015 1.41504 7.0719L3.83709 9.53622C4.41961 10.1093 5.37003 10.1666 6.01387 9.62219C6.04453 9.59353 6.04453 9.59353 6.07518 9.56488L11.5631 4.43566C12.1456 3.89122 12.1456 3.00292 11.5631 2.42982Z"
                      fill="#DCF1DA"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.84748 3.57605C2.22944 2.91989 1.22105 2.85428 0.537944 3.47763C-0.145159 4.10097 -0.177689 5.11801 0.440357 5.80697L3.01013 8.62844C3.62817 9.2846 4.63656 9.35022 5.31967 8.72687L11.2074 2.78866C11.8254 2.16531 11.8254 1.14827 11.2074 0.492117C10.5568 -0.164039 9.5484 -0.164039 8.89783 0.492117L4.27875 5.15082L2.84748 3.57605ZM4.80993 8.19185L4.81851 8.1832L4.81894 8.18277L4.81915 8.18256L4.81936 8.18235L4.81957 8.18213L4.81978 8.18192L4.8202 8.1815L4.82041 8.18129L10.6828 2.26858C11.0063 1.94233 11.0266 1.3846 10.6761 1.0055C10.3146 0.647501 9.78175 0.649733 9.42237 1.0122L4.25545 6.22343L2.30587 4.07839C1.95323 3.70809 1.40782 3.68383 1.03585 4.02326C0.664148 4.36244 0.632699 4.91342 0.988577 5.31191L3.55151 8.12588C3.90043 8.49249 4.43822 8.52019 4.80993 8.19185Z"
                      fill="#50B848"
                    ></path>
                  </svg>
                  Наш склад работает <span className="">7 дней в неделю</span> с{" "}
                  <time>09:00</time> до <time>21:00</time>.
                </li>

                <li className="storage-features__item">
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 12 10"
                    aria-hidden="true"
                    width="12"
                    height="10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5631 2.42982C10.9499 1.85673 9.99951 1.85673 9.38634 2.42982L5.03279 6.49881L3.68379 5.12338C3.10128 4.55028 2.15086 4.49297 1.50702 5.03741C0.863186 5.58186 0.832526 6.47015 1.41504 7.0719L3.83709 9.53622C4.41961 10.1093 5.37003 10.1666 6.01387 9.62219C6.04453 9.59353 6.04453 9.59353 6.07518 9.56488L11.5631 4.43566C12.1456 3.89122 12.1456 3.00292 11.5631 2.42982Z"
                      fill="#DCF1DA"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.84748 3.57605C2.22944 2.91989 1.22105 2.85428 0.537944 3.47763C-0.145159 4.10097 -0.177689 5.11801 0.440357 5.80697L3.01013 8.62844C3.62817 9.2846 4.63656 9.35022 5.31967 8.72687L11.2074 2.78866C11.8254 2.16531 11.8254 1.14827 11.2074 0.492117C10.5568 -0.164039 9.5484 -0.164039 8.89783 0.492117L4.27875 5.15082L2.84748 3.57605ZM4.80993 8.19185L4.81851 8.1832L4.81894 8.18277L4.81915 8.18256L4.81936 8.18235L4.81957 8.18213L4.81978 8.18192L4.8202 8.1815L4.82041 8.18129L10.6828 2.26858C11.0063 1.94233 11.0266 1.3846 10.6761 1.0055C10.3146 0.647501 9.78175 0.649733 9.42237 1.0122L4.25545 6.22343L2.30587 4.07839C1.95323 3.70809 1.40782 3.68383 1.03585 4.02326C0.664148 4.36244 0.632699 4.91342 0.988577 5.31191L3.55151 8.12588C3.90043 8.49249 4.43822 8.52019 4.80993 8.19185Z"
                      fill="#50B848"
                    ></path>
                  </svg>
                  Что касается безопасности, можем гарантировать — кроме Вас
                  никто не получит доступ к вашему имуществу.
                  <span className="">Многоуровневая система защиты</span>,
                  включающая: Систему видеонаблюдения Пожарную безопасность
                  Вневедомственную охрану
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="advantages-section">
        <div className="container">
          <h1 className="section-title">
            Преимущества хранения вещей на нашем складе
          </h1>

          <div className="advantages-grid">
            <div className="advantage-card">
              <div className="advantage-block">
                <div className="block-column__left">
                  <div className="advantage-icon">
                    <img src={s1} />
                  </div>
                </div>
                <div className="block-column">
                  <h3 className="advantage-title">
                    Доставка Ваших вещей к нам на склад
                  </h3>
                  <p className="advantage-text">
                    Поможем с доставкой Ваших вещей на склад или со склада, в
                    сотрудничестве с нашим партнером сервисом грузоперевозок
                    «Грузовичкоф»
                  </p>
                </div>
              </div>
            </div>
            <div className="advantage-card">
              <div className="advantage-block">
                <div className="block-column__left">
                  <div className="advantage-icon">
                    <img src={s2} />
                  </div>
                </div>
                <div className="block-column">
                  <h3 className="advantage-title">
                    Безопасное хранение Ваших вещей
                  </h3>
                  <p className="advantage-text">
                    Все ячейки находятся под надежной многоуровневой защитой.
                    Доступ к ячейкам есть только у Вас.
                  </p>
                </div>
              </div>
            </div>
            <div className="advantage-card">
              <div className="advantage-block">
                <div className="block-column__left">
                  <div className="advantage-icon">
                    <img src={s3} />
                  </div>
                </div>
                <div className="block-column">
                  <h3 className="advantage-title">
                    Снимай дольше, плати меньше
                  </h3>
                  <p className="advantage-text">
                    Экономите до 10% за хранение. Чем дольше вы арендуете ячейку
                    или контейнер, тем выгоднее Вам обойдется хранение вещей на
                    нашем складе.
                  </p>
                </div>
              </div>
            </div>
            <div className="advantage-card">
              <div className="advantage-block">
                <div className="block-column__left">
                  <div className="advantage-icon">
                    <img src={s4} />
                  </div>
                </div>
                <div className="block-column">
                  <h3 className="advantage-title">Нет залога</h3>
                  <p className="advantage-text">
                    Работаем без страхового депозита. Оплачивается только аренда
                    складского помещения.
                  </p>
                </div>
              </div>
            </div>

            <div className="advantage-card">
              <div className="advantage-block">
                <div className="block-column__left">
                  <div className="advantage-icon">
                    <img src={s5} />
                  </div>
                </div>
                <div className="block-column">
                  <h3 className="advantage-title">Любой размер ячеек</h3>
                  <p className="advantage-text">
                    Холодные и теплые боксы разного объема под ваши нужды.
                  </p>
                </div>
              </div>
            </div>

            <div className="advantage-card">
              <div className="advantage-block">
                <div className="block-column__left">
                  <div className="advantage-icon">
                    <img src={s6} />
                  </div>
                </div>
                <div className="block-column">
                  <h3 className="advantage-title">Онлайн оплата</h3>
                  <p className="advantage-text">
                    Выберите любой удобный вариант оплаты на сайте без комиссии.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="storage-types">
        <div className="container">
          <h1 className="main-title">
            Персональная складская ячейка - это удобное хранение
          </h1>

          <div className="columns-wrapper">
            <div className="storage-wrapper-left">
              <img src={topStash} />
              <div className="storage-column">
                <h2 className="column-title">Для частных лиц</h2>
                <div className="storage-list">
                  <p className="storage-item">Шины и колеса</p>
                  <p className="storage-item">Негабаритный транспорт</p>
                  <p className="storage-item">Мебель</p>
                  <p className="storage-item">Инструменты</p>
                  <p className="storage-item">Бытовая техника</p>
                  <p className="storage-item">Спорт. инвентарь</p>
                  <p className="storage-item">Детские вещи</p>
                  <p className="storage-item">Книги</p>
                  <p className="storage-item">Вещи во время переезда</p>
                </div>
              </div>
            </div>

            <div className="storage-wrapper-right">
              <div className="storage-column">
                <h2 className="column-title">Для бизнеса</h2>
                <div className="storage-list">
                  <p className="storage-item">Товарные запасы</p>
                  <p className="storage-item">Оборудование</p>
                  <p className="storage-item">Реквизит</p>
                  <p className="storage-item">Рекламные материалы</p>
                  <p className="storage-item">Расходные материалы</p>
                  <p className="storage-item">Документы</p>
                  <p className="storage-item">Летние веранды кафе</p>
                  <p className="storage-item">Ткани</p>
                </div>
              </div>
              <img src={botStash} />
            </div>
          </div>

          <div className="size-info">
            <p className="size-text">Размеры боксов от 1 м² до 16 м²</p>
            <p className="height-text">Высота потолков 2,5 м</p>
          </div>
        </div>
      </section>
      <FaqSection />
      <CalculationForm />
    </>
  );
}
