import React, { useState, useEffect } from "react";
import { botStash, box, car, gruzT, indexInfoBanner, pc, phone, s1, s2, s3, s4, s5, s6, topStash,
} from "../../assets";
import "./Sklad.css";
import FaqSection from "../../FaqSection/FaqSection";
import CalculationForm from "../../CalculationForm/CalculationForm";
import {
  Box,
  Button,
  Container,
  Grid,
  Grid2,
  Paper,
  Typography, SvgIcon,
  FormControlLabel,
  Radio,
  FormGroup,
  TextField
} from "@mui/material";
import StorageInfo from "../../components/StorageInfo/StorageInfo";

export default function Sklad() {

  const [values, setValues] = useState({
    time: '',
    things: ''
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const HelpIcon = () => (
    <SvgIcon viewBox="0 0 16 16" sx={{ ml: 1 }}>
      <path 
        d="M7.99966 0C3.58197 0 0 3.58197 0 7.99966C0 12.4174 3.58197 16 7.99966 16C12.4174 16 16 12.4174 16 7.99966C16 3.58197 12.4174 0 7.99966 0ZM9.66502 12.3984C9.25325 12.5609 8.92546 12.6842 8.67962 12.7695C8.43445 12.8549 8.14933 12.8975 7.82493 12.8975C7.32648 12.8975 6.93841 12.7756 6.6621 12.5325C6.38578 12.2894 6.2483 11.9812 6.2483 11.6067C6.2483 11.4611 6.25845 11.3121 6.27877 11.1604C6.29977 11.0087 6.33295 10.838 6.37833 10.6463L6.89371 8.8259C6.93909 8.65117 6.97837 8.48525 7.00952 8.33084C7.04068 8.17507 7.05558 8.03217 7.05558 7.90214C7.05558 7.67052 7.00749 7.50798 6.912 7.41655C6.81515 7.32512 6.63297 7.28042 6.3614 7.28042C6.22866 7.28042 6.09185 7.30006 5.95166 7.34138C5.81283 7.38404 5.69228 7.42265 5.5934 7.46057L5.72952 6.89981C6.06679 6.76233 6.38984 6.64449 6.69799 6.54696C7.00614 6.44808 7.29735 6.39932 7.57164 6.39932C8.06671 6.39932 8.44868 6.51987 8.71754 6.75826C8.98506 6.99733 9.11983 7.30819 9.11983 7.69016C9.11983 7.7694 9.11035 7.90891 9.09206 8.10802C9.07378 8.30781 9.03924 8.48999 8.98912 8.65727L8.47644 10.4723C8.43445 10.6179 8.39721 10.7845 8.36334 10.9708C8.33016 11.157 8.3139 11.2992 8.3139 11.3947C8.3139 11.6358 8.36741 11.8004 8.47577 11.8877C8.58277 11.9751 8.77037 12.0191 9.03585 12.0191C9.16114 12.0191 9.30133 11.9968 9.45981 11.9534C9.61693 11.9101 9.73071 11.8715 9.8025 11.8383L9.66502 12.3984ZM9.57426 5.03128C9.3352 5.25342 9.04737 5.36449 8.71077 5.36449C8.37486 5.36449 8.08499 5.25342 7.84389 5.03128C7.60415 4.80914 7.48292 4.53892 7.48292 4.22332C7.48292 3.9084 7.60483 3.6375 7.84389 3.41333C8.08499 3.18849 8.37486 3.07674 8.71077 3.07674C9.04737 3.07674 9.33587 3.18849 9.57426 3.41333C9.81333 3.6375 9.93321 3.9084 9.93321 4.22332C9.93321 4.5396 9.81333 4.80914 9.57426 5.03128Z" 
        fill="#E3EAFA"
      />
    </SvgIcon>
  );
  return (
    <Container
      sx={{
        paddingLeft: 3,
        paddingRight: 3,
        maxWidth: "1440px",
        marginTop: "64px",
      }}
    >
      <Grid container sx={{ alignItems: "start" }}>
        <Grid container item size={{ md: 6 }} sx={{ maxWidth: "50%" }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "1.875rem",
              fontWeight: 500,
              maxWidth: "460px",
              textAlign: "left",
            }}
          >
            Welcome to Hamburg Logistics Solutions
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "410px",
              marginTop: "24px",
              fontSize: "22px",
              fontWeight: 300,
            }}
          >
            Your trusted partner for seamless fulfillment, storage, and logistics in the heart of Hamburg. We streamline your operations so you can focus on growing your business.
          </Typography>
          <Grid container item size={{ xs: 12 }} sx={{ marginTop: 4 }}>
            <Button
              sx={{
                backgroundColor: "#e31e24",
                minWidth: "228px",
                maxHeight: "64px",
                minHeight: "64px",
                borderRadius: "18px",
                color: "#FFF",
                fontWeight: 500,
                fontSize: "1.125rem",
                textTransform: "none",
              }}
            >
              Request a Qoute
            </Button>
          </Grid>
        </Grid>
        <Grid container item size={{ md: 6 }} sx={{ maxWidth: "50%" }}>
          <div style={{ overflow: "hidden" }}>
            <img src={gruzT} style={{ maxWidth: 576, maxHeight: 359 }} />
          </div>
        </Grid>
      </Grid>
      <Grid container sx={{ marginTop: "104px" }}>
        <Typography
          variant="body1"
          sx={{ textAlign: "left", marginBottom: "16px", fontSize: "28px" }}
        >
          Как арендовать склад за 5 минут?
        </Typography>
        <Grid
          container
          item
          size={{ xs: 4 }}
          sx={{ margin: "0px 0px 0px -32px", width: "calc(100% + 32px)" }}
        >
          <Grid
            item
            size={{ xs: 12, sm: 6, md: 6, lg: 3 }}
            sx={{ padding: "32px 0 0 32px", maxWidth: "25%", flexBasis: "25%" }}
          >
            <Box
              sx={{
                position: "relative",
                minHeight: "243px",
                padding: "44px 16px 16px",
                boxShadow: "rgba(199, 208, 240, 0.25) 0px 15px 40px",
                borderRadius: 8,
              }}
            >
              <Box sx={{ position: "absolute", top: "32px" }}>
                <img src={phone} />
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  lineHeight: 1.5,
                  paddingLeft: "64px",
                  fontWeight: 500,
                }}
              >
                Позвоните нам
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  margin: "24px 0 0",
                  fontSize: "0.875rem",
                  lineHeight: "1.43",
                  minHeight: "76px",
                  fontWeight: 300,
                }}
              >
                Мы ответим на все вопросы, наши операторы на связи 24/7
              </Typography>
              <Button
                href="tel: +494029996807"
                sx={{
                  fontWeight: 500,
                  lineHeight: 1.75,
                  minWidth: "64px",
                  color: "#e31e24",
                  width: "100%",
                  minHeight: "56px",
                  fontSize: "1.125rem",
                  boxShadow: "none",
                  textTransform: "none",
                  outline: "0px",
                  margin: "0px",
                  textDecoration: "none",
                  padding: "5px 15px",
                  transition:
                    "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1)",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "#e31e24",
                  borderImage: "initial",
                  borderRadius: "18px",
                }}
              >
                Позвонить
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            size={{ xs: 12, sm: 6, md: 6, lg: 3 }}
            sx={{ padding: "32px 0 0 32px", maxWidth: "25%", flexBasis: "25%" }}
          >
            <Box
              sx={{
                position: "relative",
                minHeight: "243px",
                padding: "44px 16px 16px",
                boxShadow: "rgba(199, 208, 240, 0.25) 0px 15px 40px",
                borderRadius: 8,
              }}
            >
              <Box sx={{ position: "absolute", top: "32px" }}>
                <img src={box} />
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  lineHeight: 1.5,
                  paddingLeft: "64px",
                  fontWeight: 500,
                }}
              >
                Выберите бокс
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  margin: "24px 0 0",
                  fontSize: "0.875rem",
                  lineHeight: "1.43",
                  minHeight: "76px",
                  fontWeight: 300,
                }}
              >
                Мы поможем подобрать склад нужного размера, под ваши потребности
              </Typography>
              <Button
                href="tel: +494029996807"
                sx={{
                  fontWeight: 500,
                  lineHeight: 1.75,
                  minWidth: "64px",
                  color: "#e31e24",
                  width: "100%",
                  minHeight: "56px",
                  fontSize: "1.125rem",
                  boxShadow: "none",
                  textTransform: "none",
                  outline: "0px",
                  margin: "0px",
                  textDecoration: "none",
                  padding: "5px 15px",
                  transition:
                    "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1)",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "#e31e24",
                  borderImage: "initial",
                  borderRadius: "18px",
                }}
              >
                Выбрать бокс
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            size={{ xs: 12, sm: 6, md: 6, lg: 3 }}
            sx={{ padding: "32px 0 0 32px", maxWidth: "25%", flexBasis: "25%" }}
          >
            <Box
              sx={{
                position: "relative",
                minHeight: "243px",
                padding: "44px 16px 16px",
                boxShadow: "rgba(199, 208, 240, 0.25) 0px 15px 40px",
                borderRadius: 8,
              }}
            >
              <Box sx={{ position: "absolute", top: "32px" }}>
                <img src={pc} />
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  lineHeight: 1.5,
                  paddingLeft: "64px",
                  fontWeight: 500,
                }}
              >
                Онлайн экскурсия
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  margin: "24px 0 0",
                  fontSize: "0.875rem",
                  lineHeight: "1.43",
                  minHeight: "76px",
                  fontWeight: 300,
                }}
              >
                Вам не нужно приезжать заранее, чтобы посмотреть склад или
                выбрать ячейку. По желанию, мы проведем вам дистанционную
                экскурсию
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            size={{ xs: 12, sm: 6, md: 6, lg: 3 }}
            sx={{ padding: "32px 0 0 32px", maxWidth: "25%", flexBasis: "25%" }}
          >
            <Box
              sx={{
                position: "relative",
                minHeight: "243px",
                padding: "44px 16px 16px",
                boxShadow: "rgba(199, 208, 240, 0.25) 0px 15px 40px",
                borderRadius: 8,
              }}
            >
              <Box sx={{ position: "absolute", top: "32px" }}>
                <img src={car} />
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  lineHeight: 1.5,
                  paddingLeft: "64px",
                  fontWeight: 500,
                }}
              >
                Перевезите вещи
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  margin: "24px 0 0",
                  fontSize: "0.875rem",
                  lineHeight: "1.43",
                  minHeight: "76px",
                  fontWeight: 300,
                }}
              >
                Вы можете сами привезти вещи на склад или доверьте это нам, мы
                упакуем, погрузим, доставим и разместим вещи на вашем складе
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <StorageInfo />
      <Box sx={{ marginTop: 10 }}>
        <Typography
          variant="body2"
          sx={{
            margin: "0px 0px 48px",
            lineHeight: "1.2",
            fontSize: "1.75rem",
            fontWeight: 500,
            color: "rgb(36, 45, 57)",
          }}
        >
          Дополнительные услуги для вашего удобства
        </Typography>
        <Box sx={{ marginTop: 6 }}>
          <Grid
            container
            size={{ xs: 4 }}
            sx={{
              marginTop: "-32px",
              width: "calc(100% + 32px)",
              marginLeft: "-32px",
            }}
          >
            <Grid
              container
              item
              size={{ xs: 12, lg: 8 }}
              sx={{
                paddingLeft: 4,
                paddingTop: 4,
                maxWidth: "66.6667%",
                flexBasis: "66.6667%",
              }}
            >
              <Grid
                item
                size={{ xs: 12, lg: 6 }}
                sx={{
                  maxWidth: "50%",
                  flexBasis: "50%",
                  paddingTop: 4,
                  paddingLeft: 4,
                }}
              >
                <Paper
                  sx={{
                    backgroundImage: "url(/src/assets/delivery.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right bottom",
                    borderRadius: 4, // 32px если в теме 1 = 8px
                    boxShadow: "0px 7px 64px rgba(0, 0, 0, 0.07)",
                    p: "32px 92px 32px 24px",
                    height: "100%",
                    minHeight: "200px",
                    transition: "box-shadow 300ms ease",
                    "&:hover": {
                      boxShadow: "0px 7px 64px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                   <Typography
                    variant="body1"
                    sx={{ fontSize: "18px", fontWeight: 500 }}
                  >
                    Доставка
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#e31e24", fontSize: "18px", fontWeight: 500 }}
                  >
                    {" "}
                    от 540 р
                  </Typography>
                </Paper>
              </Grid>
              <Grid
                item
                size={{ xs: 12, lg: 6 }}
                sx={{
                  maxWidth: "50%",
                  flexBasis: "50%",
                  paddingTop: 4,
                  paddingLeft: 4,
                }}
              >
                <Paper
                  sx={{
                    backgroundImage: "url(/src/assets/installing.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right bottom",
                    borderRadius: 4, // 32px если в теме 1 = 8px
                    boxShadow: "0px 7px 64px rgba(0, 0, 0, 0.07)",
                    p: "32px 92px 32px 24px",
                    height: "100%",
                    minHeight: "200px",
                    transition: "box-shadow 300ms ease",
                    "&:hover": {
                      boxShadow: "0px 7px 64px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                   <Typography
                    variant="body1"
                    sx={{ fontSize: "18px", fontWeight: 500 }}
                  >
                    Сборка/разборка, упаковка
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#e31e24", fontSize: "18px", fontWeight: 500 }}
                  >
                     770 р
                  </Typography>
                </Paper>
              </Grid>
              <Grid
                item
                size={{ xs: 12, lg: 6 }}
                sx={{
                  maxWidth: "50%",
                  flexBasis: "50%",
                  paddingTop: 4,
                  paddingLeft: 4,
                }}
              >
                <Paper
                  sx={{
                    backgroundImage: "url(/src/assets/material.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right bottom",
                    borderRadius: 4, // 32px если в теме 1 = 8px
                    boxShadow: "0px 7px 64px rgba(0, 0, 0, 0.07)",
                    p: "32px 92px 32px 24px",
                    height: "100%",
                    minHeight: "200px",
                    transition: "box-shadow 300ms ease",
                    "&:hover": {
                      boxShadow: "0px 7px 64px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                   <Typography
                    variant="body1"
                    sx={{ fontSize: "18px", fontWeight: 500 }}
                  >
                   Продажа коробок и упаковочного материала
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#e31e24", fontSize: "18px", fontWeight: 500 }}
                  >
                      от 50 Р
                  </Typography>
                </Paper>
              </Grid>
              <Grid
                item
                size={{ xs: 12, lg: 6 }}
                sx={{
                  maxWidth: "50%",
                  flexBasis: "50%",
                  paddingTop: 4,
                  paddingLeft: 4,
                }}
              >
                <Paper
                  sx={{
                    backgroundImage: "url(/src/assets/workers.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right bottom",
                    borderRadius: 4, // 32px если в теме 1 = 8px
                    boxShadow: "0px 7px 64px rgba(0, 0, 0, 0.07)",
                    p: "32px 92px 32px 24px",
                    height: "100%",
                    minHeight: "200px",
                    transition: "box-shadow 300ms ease",
                    "&:hover": {
                      boxShadow: "0px 7px 64px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                   <Typography
                    variant="body1"
                    sx={{ fontSize: "18px", fontWeight: 500 }}
                  >
                   Грузчики
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#e31e24", fontSize: "18px", fontWeight: 500 }}
                  >
                      470 р
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Grid
              container
              item
              size={{ xs: 12, lg: 4 }}
              sx={{
                paddingLeft: 4,
                paddingTop: 4,
                maxWidth: "33.3337%",
                flexBasis: "33.3337%",
              }}
            >
              <Grid
                item
                size={{ xs: 12, lg: 12 }}
                sx={{ paddingTop: 4, maxWidth: "100%", flexBasis: "100%" }}
              >
                <Paper
                  sx={{
                    backgroundImage: "url(/src/assets/transpalette.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right bottom",
                    borderRadius: 4, // 32px если в теме 1 = 8px
                    boxShadow: "0px 7px 64px rgba(0, 0, 0, 0.07)",
                    p: "32px 92px 32px 24px",
                    height: "100%",
                    transition: "box-shadow 300ms ease",
                    "&:hover": {
                      boxShadow: "0px 7px 64px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "18px", fontWeight: 500 }}
                  >
                    Использование тележек на территории склада -
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#e31e24", fontSize: "18px", fontWeight: 500 }}
                  >
                    {" "}
                    бесплатно
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{marginTop: "76px"}}>
        <Grid container sx={{width: "calc(100% + 32px)",
        marginLeft: "-32px"}}>
          <Grid item size={{xs: 12, lg: 5}} sx={{paddingLeft: 4, paddingTop: 4, maxWidth: "44.6667%", flexBasis: "44.6667%"}}>
            <Typography variant="body1" sx={{fontSize: "34px", margin: "32px 0 0", fontWeight: 500}}>Сложно определиться?<br/> Мы поможем!</Typography>
            <Typography variant="body1" sx={{fontSize: "1rem", margin: "16px 0 0", fontWeight: 300}}>Ответьте на несколько вопросов и мы подберем подходящий вам контейнер и посчитаем стоимость аренды — это займет всего 2 минуты!</Typography>
          </Grid>
          <Grid item size={{xs: 12, lg: 5}} sx={{paddingLeft: 4, paddingTop: 4, maxWidth: "44.6667%", flexBasis: "58.3333%"}}>
            <Grid container 
            >
              <Grid item size={{xs: 12}}>
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
                  <div className="MuiGrid-root MuiGrid-container MuiGridSpacing-xs-undefined css-7sb2gg-MuiGrid-root">
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
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Box>
      
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
                  selfStorage склада позволит не только сэкономить место в
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
                  <span className="brand">BMGG Europe</span> предлагает в аренду
                  отапливаемые и неотапливаемые боксы различной площади от 2
                  кв.м до 20 кв.м.
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
      <section className="advantagesSection">
        <Container>
          <Typography
            variant="h2"
            sx={{
              fontSize: "1.75rem",
              textAlign: "left",
              fontWeight: 500,
              color: "#242D39",
              marginBottom: 6,
            }}
          >
            Преимущества хранения вещей на нашем складе
          </Typography>

          <Grid2 container spacing={2}>
            <Grid2
              item
              size={{ xs: 12, md: 4 }}
              sx={{ paddingLeft: 3, paddingTop: 3 }}
            >
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
            <Grid2
              item
              size={{ xs: 12, md: 4 }}
              sx={{ paddingLeft: 3, paddingTop: 3 }}
            >
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
            <Grid2
              item
              size={{ xs: 12, md: 4 }}
              sx={{ paddingLeft: 3, paddingTop: 3 }}
            >
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
            <Grid2
              item
              size={{ xs: 12, md: 4 }}
              sx={{ paddingLeft: 3, paddingTop: 3 }}
            >
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
            <Grid2
              item
              size={{ xs: 12, md: 4 }}
              sx={{ paddingLeft: 3, paddingTop: 3 }}
            >
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
            <Grid2
              item
              size={{ xs: 12, md: 4 }}
              sx={{ paddingLeft: 3, paddingTop: 3 }}
            >
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
    </Container>
  );
}
