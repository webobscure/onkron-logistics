import React, { useState, useEffect } from "react";
import {
  botStash,
  box,
  car,
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
} from "../../assets";
import "./Sklad.css";
import FaqSection from "../../FaqSection/FaqSection";
import CalculationForm from "../../CalculationForm/CalculationForm";
import { Box, Container, Grid2, Typography } from "@mui/material";
import StorageInfo from "../../components/StorageInfo/StorageInfo";

export default function Sklad() {
  return (
    <>
      <section className="main-section">
        <div className="container">
          <div className="main-content">
            <h1>Аренда склада для хранения в Гамбурге</h1>
            <p>
              Склад индивидуального хранения для физических и юридических лиц
              <br />
              <span className="main-price">от 12.5 €/1 м²</span>
            </p>
            <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-spacing-xs-undefined MuiGrid-grid-xs-12 css-1wkbcmy-MuiGrid-root">
              <button className="btn btn-large main-content-button">
                Арендовать бокс
              </button>
            </div>
          </div>
          <div className="main-image">
            <img src={gruzT} alt="Illustration" style={{maxWidth: "624px", maxHeight: "389px"}} />
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
      <StorageInfo />
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
                <h2>
                  Сборка/разборка,
                  <br /> упаковка
                </h2>
                <div className="price">от 770р</div>
              </div>
              <div className="service">
                <h2>
                  Продажа коробок и<br /> упаковочного материала
                </h2>
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
                      fill="#e31e24"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.84748 3.57605C2.22944 2.91989 1.22105 2.85428 0.537944 3.47763C-0.145159 4.10097 -0.177689 5.11801 0.440357 5.80697L3.01013 8.62844C3.62817 9.2846 4.63656 9.35022 5.31967 8.72687L11.2074 2.78866C11.8254 2.16531 11.8254 1.14827 11.2074 0.492117C10.5568 -0.164039 9.5484 -0.164039 8.89783 0.492117L4.27875 5.15082L2.84748 3.57605ZM4.80993 8.19185L4.81851 8.1832L4.81894 8.18277L4.81915 8.18256L4.81936 8.18235L4.81957 8.18213L4.81978 8.18192L4.8202 8.1815L4.82041 8.18129L10.6828 2.26858C11.0063 1.94233 11.0266 1.3846 10.6761 1.0055C10.3146 0.647501 9.78175 0.649733 9.42237 1.0122L4.25545 6.22343L2.30587 4.07839C1.95323 3.70809 1.40782 3.68383 1.03585 4.02326C0.664148 4.36244 0.632699 4.91342 0.988577 5.31191L3.55151 8.12588C3.90043 8.49249 4.43822 8.52019 4.80993 8.19185Z"
                      fill="#1fcfca"
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
                      fill="#e31e24"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.84748 3.57605C2.22944 2.91989 1.22105 2.85428 0.537944 3.47763C-0.145159 4.10097 -0.177689 5.11801 0.440357 5.80697L3.01013 8.62844C3.62817 9.2846 4.63656 9.35022 5.31967 8.72687L11.2074 2.78866C11.8254 2.16531 11.8254 1.14827 11.2074 0.492117C10.5568 -0.164039 9.5484 -0.164039 8.89783 0.492117L4.27875 5.15082L2.84748 3.57605ZM4.80993 8.19185L4.81851 8.1832L4.81894 8.18277L4.81915 8.18256L4.81936 8.18235L4.81957 8.18213L4.81978 8.18192L4.8202 8.1815L4.82041 8.18129L10.6828 2.26858C11.0063 1.94233 11.0266 1.3846 10.6761 1.0055C10.3146 0.647501 9.78175 0.649733 9.42237 1.0122L4.25545 6.22343L2.30587 4.07839C1.95323 3.70809 1.40782 3.68383 1.03585 4.02326C0.664148 4.36244 0.632699 4.91342 0.988577 5.31191L3.55151 8.12588C3.90043 8.49249 4.43822 8.52019 4.80993 8.19185Z"
                      fill="#1fcfca"
                    ></path>
                  </svg>
                  Чтобы арендовать склад временного хранения в Гамбурге - можно
                  заполнить форму на сайте или забронировать бокс по телефону{" "}
                  <a href="tel:+494029996807" className="">
                    +494029996807
                  </a>
                  . Мы проведем для вас персональную экскурсию в онлайн-формате
                  или при посещении склада лично.{" "}
                  <span className="brand">BMGG Europe</span> предлагает в
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
                      fill="#e31e24"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.84748 3.57605C2.22944 2.91989 1.22105 2.85428 0.537944 3.47763C-0.145159 4.10097 -0.177689 5.11801 0.440357 5.80697L3.01013 8.62844C3.62817 9.2846 4.63656 9.35022 5.31967 8.72687L11.2074 2.78866C11.8254 2.16531 11.8254 1.14827 11.2074 0.492117C10.5568 -0.164039 9.5484 -0.164039 8.89783 0.492117L4.27875 5.15082L2.84748 3.57605ZM4.80993 8.19185L4.81851 8.1832L4.81894 8.18277L4.81915 8.18256L4.81936 8.18235L4.81957 8.18213L4.81978 8.18192L4.8202 8.1815L4.82041 8.18129L10.6828 2.26858C11.0063 1.94233 11.0266 1.3846 10.6761 1.0055C10.3146 0.647501 9.78175 0.649733 9.42237 1.0122L4.25545 6.22343L2.30587 4.07839C1.95323 3.70809 1.40782 3.68383 1.03585 4.02326C0.664148 4.36244 0.632699 4.91342 0.988577 5.31191L3.55151 8.12588C3.90043 8.49249 4.43822 8.52019 4.80993 8.19185Z"
                      fill="#1fcfca"
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
                      fill="#e31e24"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.84748 3.57605C2.22944 2.91989 1.22105 2.85428 0.537944 3.47763C-0.145159 4.10097 -0.177689 5.11801 0.440357 5.80697L3.01013 8.62844C3.62817 9.2846 4.63656 9.35022 5.31967 8.72687L11.2074 2.78866C11.8254 2.16531 11.8254 1.14827 11.2074 0.492117C10.5568 -0.164039 9.5484 -0.164039 8.89783 0.492117L4.27875 5.15082L2.84748 3.57605ZM4.80993 8.19185L4.81851 8.1832L4.81894 8.18277L4.81915 8.18256L4.81936 8.18235L4.81957 8.18213L4.81978 8.18192L4.8202 8.1815L4.82041 8.18129L10.6828 2.26858C11.0063 1.94233 11.0266 1.3846 10.6761 1.0055C10.3146 0.647501 9.78175 0.649733 9.42237 1.0122L4.25545 6.22343L2.30587 4.07839C1.95323 3.70809 1.40782 3.68383 1.03585 4.02326C0.664148 4.36244 0.632699 4.91342 0.988577 5.31191L3.55151 8.12588C3.90043 8.49249 4.43822 8.52019 4.80993 8.19185Z"
                      fill="#1fcfca"
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
        <Container>
            <Typography variant="h2" sx={{fontSize: "1.75rem", textAlign: 'left', fontWeight: 500, color: "#242D39", marginBottom: 6}}>Преимущества хранения вещей на нашем складе</Typography>
            
          <Grid2 container spacing={2}>
            <Grid2 item size={{ xs: 12, md: 4 }} sx={{paddingLeft: 3, paddingTop: 3}}>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ minWidth: 72 }}>
                  <img src={s1} />
                </Box>
                <Box sx={{ marginLeft: 3 }}>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: 18, fontWeight: 500 }}
                  >
                    Доставка Ваших вещей к нам на склад
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ marginTop: 2, fontWeight: 300 }}
                  >
                    Поможем с доставкой Ваших вещей на склад или со склада, в
                    сотрудничестве с нашим партнером сервисом грузоперевозок
                    «Грузовичкоф»
                  </Typography>
                </Box>
              </Box>
            </Grid2>
            <Grid2 item size={{ xs: 12, md: 4 }} sx={{paddingLeft: 3, paddingTop: 3}}>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ minWidth: 72 }}>
                  <img src={s2} />
                </Box>
                <Box sx={{ marginLeft: 3 }}>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: 18, fontWeight: 500 }}
                  >
                    Безопасное хранение Ваших вещей
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ marginTop: 2, fontWeight: 300 }}
                  >
                    Все ячейки находятся под надежной многоуровневой защитой.
                    Доступ к ячейкам есть только у Вас
                  </Typography>
                </Box>
              </Box>
            </Grid2>
            <Grid2 item size={{ xs: 12, md: 4 }} sx={{paddingLeft: 3, paddingTop: 3}}>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ minWidth: 72 }}>
                  <img src={s3} />
                </Box>
                <Box sx={{ marginLeft: 3 }}>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: 18, fontWeight: 500 }}
                  >
                    Снимай дольше, плати меньше
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ marginTop: 2, fontWeight: 300 }}
                  >
                    Экономьте до 10% за хранение. Чем дольше вы арендуете ячейку
                    или контейнер, тем выгоднее Вам обойдется хранение вещей на
                    нашем складе
                  </Typography>
                </Box>
              </Box>
            </Grid2>
            <Grid2 item size={{ xs: 12, md: 4 }} sx={{paddingLeft: 3, paddingTop: 3}}>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ minWidth: 72 }}>
                  <img src={s4} />
                </Box>
                <Box sx={{ marginLeft: 3 }}>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: 18, fontWeight: 500 }}
                  >
                    Нет залога
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ marginTop: 2, fontWeight: 300 }}
                  >
                    Работаем без страхового депозита. Оплачивается только аренда
                    складского помещения
                  </Typography>
                </Box>
              </Box>
            </Grid2>
            <Grid2 item size={{ xs: 12, md: 4 }} sx={{paddingLeft: 3, paddingTop: 3}}>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ minWidth: 72 }}>
                  <img src={s5} />
                </Box>
                <Box sx={{ marginLeft: 3 }}>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: 18, fontWeight: 500 }}
                  >
                    Любой размер ячеек
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ marginTop: 2, fontWeight: 300 }}
                  >
                    Холодные и теплые боксы разного объема под ваши нужды
                  </Typography>
                </Box>
              </Box>
            </Grid2>
            <Grid2 item size={{ xs: 12, md: 4 }} sx={{paddingLeft: 3, paddingTop: 3}}> 
              <Box sx={{ display: "flex" }}>
                <Box sx={{ minWidth: 72 }}>
                  <img src={s6} />
                </Box>
                <Box sx={{ marginLeft: 3 }}>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: 18, fontWeight: 500 }}
                  >
                    Онлайн оплата
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ marginTop: 2, fontWeight: 300 }}
                  >
                    Выберете любой удобный вариант оплаты на сайте без комиссии
                  </Typography>
                </Box>
              </Box>
            </Grid2>
          </Grid2>
        </Container>
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
