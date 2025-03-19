import {
  Button,
  Container,
  Grid2,
  Typography,
  Box,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { st1, st2, st3 } from "../../assets";
export default function StorageInfo() {

  return (
    <Container style={{maxWidth: "1440px"}} id="adSklad">
      <Grid2 container spacing={4}>
        <Grid2
          container
          size={{ xs: 12, md: 6 }}
          sx={{ marginTop: 2 }}
        >
          <Grid2  
            container
            sx={{
              gap: 0,
              padding: 4,
              border: "2px solid #e31e24",
              "&:hover": {
                boxShadow: "#e31e24 0px 20px 50px",
                transition: "ease-in 0.5s"
              },
              borderRadius: 3,
              cursor: "pointer",
            }}
          >
            <Grid2
              container
              item
              sx={{
                width: "100%",
                margin: "0px 0px 16px",
                alignItems: "center",
              }}
            >
              <Grid2 item size={{ xs: 5, sm: 4 }}>
                <Typography
                  variant="overline"
                  sx={{
                    textTransform: "uppercase",
                    color: "rgb(101, 113, 129)",
                    fontWeight: 400,
                    fontSize: "0.875rem",
                  }}
                >
                  Адрес склада:
                </Typography>
              </Grid2>
              <Grid2 item size={{ xs: 7, sm: 8 }}>
                <Typography variant="body1" sx={{ fontWeight: 300 }}>
                  Промзона Горелово, Лен.область, Волхонское шоссе, д.7 к.1а
                </Typography>
              </Grid2>
            </Grid2>
            <Grid2
              container
              item
              sx={{
                width: "100%",
                margin: "0px 0px 16px",
                alignItems: "center",
              }}
            >
              <Grid2 item size={{ xs: 5, sm: 4 }}>
                <Typography
                  variant="overline"
                  sx={{
                    textTransform: "uppercase",
                    color: "rgb(101, 113, 129)",
                    fontWeight: 400,
                    fontSize: "0.875rem",
                  }}
                >
                  Типы складов:
                </Typography>
              </Grid2>
              <Grid2 item size={{ xs: 7, sm: 8 }}>
                <Typography variant="body1" sx={{ fontWeight: 300 }}>
                  теплые, холодные
                </Typography>
              </Grid2>
            </Grid2>
            <Grid2
              container
              item
              sx={{
                width: "100%",
                margin: "0px 0px 16px",
                alignItems: "center",
              }}
            >
              <Grid2 item size={{ xs: 5, sm: 4 }}>
                <Typography
                  variant="overline"
                  sx={{
                    textTransform: "uppercase",
                    color: "rgb(101, 113, 129)",
                    fontWeight: 400,
                    fontSize: "0.875rem",
                  }}
                >
                  Объёмы боксов:
                </Typography>
              </Grid2>
              <Grid2 item size={{ xs: 7, sm: 8 }}>
                <Typography variant="body1" sx={{ fontWeight: 300 }}>
                  от 2.5 м3 до 75 м3
                </Typography>
              </Grid2>
            </Grid2>
            <Grid2
              container
              item
              sx={{
                width: "100%",
                margin: "0px 0px 16px",
                alignItems: "center",
              }}
            >
              <Grid2 item size={{ xs: 5, sm: 4 }}>
                <Typography
                  variant="overline"
                  sx={{
                    textTransform: "uppercase",
                    color: "rgb(101, 113, 129)",
                    fontWeight: 400,
                    fontSize: "0.875rem",
                  }}
                >
                  Телефон:
                </Typography>
              </Grid2>
              <Grid2 item size={{ xs: 7, sm: 8 }}>
                <Typography variant="body1" sx={{ fontWeight: 300 }}>
                  8 (812) 313-01-10
                </Typography>
              </Grid2>
            </Grid2>
            <Grid2
              container
              item
              sx={{
                width: "100%",
                margin: "0px 0px 16px",
                alignItems: "center",
              }}
            >
              <Grid2 item size={{ xs: 5, sm: 4 }}>
                <Typography
                  variant="overline"
                  sx={{
                    textTransform: "uppercase",
                    color: "rgb(101, 113, 129)",
                    fontWeight: 400,
                    fontSize: "0.875rem",
                  }}
                >
                  Время работы:
                </Typography>
              </Grid2>
              <Grid2 item size={{ xs: 7, sm: 8 }}>
                <Typography variant="body1" sx={{ fontWeight: 300 }}>
                  Пн-Вс: с 9:00 до 21:00
                </Typography>
              </Grid2>
            </Grid2>
            <Grid2
              container
              item
              sx={{
                width: "100%",
                margin: "0px 0px 16px",
                alignItems: "center",
              }}
            >
              <Grid2 item size={{ xs: 5, sm: 4 }}>
                <Typography
                  variant="overline"
                  sx={{
                    textTransform: "uppercase",
                    color: "rgb(101, 113, 129)",
                    fontWeight: 400,
                    fontSize: "0.875rem",
                  }}
                >
                  Способ оплаты:
                </Typography>
              </Grid2>
              <Grid2 item size={{ xs: 7, sm: 8 }}>
                <Typography variant="body1" sx={{ fontWeight: 300 }}>
                  Наличный/Безналичный расчет
                </Typography>
              </Grid2>
            </Grid2>
            <Grid2
              container
              item
              sx={{ marginTop: -4, minWidth: "466px", gap: "11px", marginLeft: "-1rem" }}
            >
              <Grid2
                item
                size={{ xs: 12, sm: 6 }}
                sx={{ paddingTop: 4,  maxWidth: "50%", flexBasis: "50% !important"  }}
              >
                <Button
                  variant="outlined"
                  component="a"
                  href="https://api.whatsapp.com/send?phone=494029996807"
                  target="_blank"
                  endIcon={<WhatsAppIcon sx={{ color: "#e31e24" }} />}
                  sx={{
                    textTransform: "none",
                    color: "rgb(36, 45, 57)",
                    fontSize: "1.125rem",
                    borderColor: "#e31e24",
                    "&:hover": {
                      borderColor: "#e31e24",
                    },
                    maxWidth: "238px",
                    minHeight: 56,
                    maxHeight: 56,
                    borderRadius: "18px",
                  }}
                  fullWidth
                >
                  Связь в WhatsApp
                </Button>
              </Grid2>
              <Grid2
                item
                size={{ xs: 12, sm: 6 }}
                sx={{ paddingTop: 4,  maxWidth: "50%", width: "50%" }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  sx={{
                    bgcolor: "#e31e24",
                    "&:hover": { bgcolor: "#e31e24" },
                    textTransform: "none",
                    color: "#fff",
                    minWidth: 64,
                    minHeight: 56,
                    borderRadius: "18px",
                    fontSize: "1.125rem",
                    transition:
                      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  }}
                >
                  Заказать звонок
                </Button>
              </Grid2>
            </Grid2>
            <Grid2 container item size={{ xs: 12, md: 6 }} sx={{ margin: "32px 0px 0px" }}>
            <Grid2
            container
            item
            size={{ xs: 2 }}
            sx={{
              flexWrap: "nowrap",
              flexFlow: "row",
              margin: "-16px 0px 0px -32px",
              width: "calc(100% + 16px)",
              gap: "10.2rem"
            }}
          >
            <Grid2 container item size={{xs: 12, sm: 6, md: 4}} sx={{paddingTop: 2, paddingLeft: 2}}>
              <Grid2 item sx={{width: "100%",
    minHeight: "120px",
    borderRadius: "16px"}}>
                
  <img
    src={st1}
    style={{
      inset: "0px",
      boxSizing: "border-box",
      padding: "0px",
      border: "none",
      margin: "auto",
      display: "block",
      width: "153px",
      height: "123px", borderRadius: "16px",
      objectFit: "cover",
    }}
    alt="slide"
    loading="lazy"
    sizes="100vw"
  />
              </Grid2>
            </Grid2>
            <Grid2 container item size={{xs: 12, sm: 6, md: 4}} sx={{paddingTop: 2, paddingLeft: 2}}>
              <Grid2 item sx={{width: "100%",
    minHeight: "120px",
    borderRadius: "16px"}}>
                
  <img
    src={st2}
    style={{
      inset: "0px",
      boxSizing: "border-box",
      padding: "0px",
      border: "none",
      margin: "auto",
      display: "block",
      width: "153px",
      height: "123px", borderRadius: "16px",
      objectFit: "cover",
    }}
    alt="slide"
    loading="lazy"
    sizes="100vw"
  />
              </Grid2>
            </Grid2>
            <Grid2 container item size={{xs: 12, sm: 6, md: 4}} sx={{paddingTop: 2, paddingLeft: 2}}>
              <Grid2 item sx={{width: "100%",
    minHeight: "120px",
    borderRadius: "16px"}}>
                
  <img
    src={st3}
    style={{
      inset: "0px",
      boxSizing: "border-box",
      padding: "0px",
      border: "none",
      margin: "auto",
      display: "block",
      width: "153px",
      height: "123px", borderRadius: "16px",
      objectFit: "cover",
    }}
    alt="slide"
    loading="lazy"
    sizes="100vw"
  />
              </Grid2>
            </Grid2>
          </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2
          container
          size={{ xs: 12, md: 8 }}
          sx={{ width: "48% !important" }}
        >
          <Box
        component="iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.680336402074!2d10.077852733630548!3d53.5383266153954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18d058f410f17%3A0x56d5cc908d152148!2zQmlsbGJyb29rZGVpY2ggMzYsIDIyMTEzIEhhbWJ1cmcsINCT0LXRgNC80LDQvdC40Y8!5e0!3m2!1sru!2sru!4v1742309321261!5m2!1sru!2sru"
        sx={{
          width: '100%',
          height: 611,
          border: 0,
          borderRadius: 2,
          boxShadow: 1,
          mt: 2

        }}
        loading="lazy"
        allowFullScreen
      />
        </Grid2>
        
      </Grid2>
    </Container>
  );
}
