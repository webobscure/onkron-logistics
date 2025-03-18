import { useState } from "react";
import "./CalculationForm.css";
import { Link, FormControl, Grid, OutlinedInput, InputLabel, Typography, Select, MenuItem, FormControlLabel, Checkbox, Button } from "@mui/material";

import { styled } from '@mui/material/styles';

const StyledSelect = styled(Select)({
  '& .MuiSelect-select': {
    padding: '14px',
  },
});

const sizes = [
  { value: '2.5', label: '2.5 м³' },
  { value: '5', label: '5 м³' },
  { value: '10', label: '10 м³' },
  { value: '25', label: '25 м³' },
  { value: '75', label: '75 м³' },
];
const CalculationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    size: '',
    comment: '',
    agreed: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <Grid
      container
      sx={{ marginTop: 13, justifyContent: "space-between", gap: 0 }}
    >
      <Grid item size={{ xs: 12, lg: 4 }} sx={{ maxWidth: "33.3333%" }}>
        <Typography variant="body1" sx={{ fontSize: 36, fontWeight: 500 }}>
          Рассчитать стоимость хранения
        </Typography>
      </Grid>
      <Grid container item xs={12} lg={8} sx={{
            maxWidth: "728px",
            boxShadow: "rgba(199, 208, 240, 0.3) 0px 15px 60px",
            borderRadius: "32px",
            padding: "32px",
            justifyContent: "flex-end"
      }}>
      <form action="#" style={{ width: '100%' }}>
        <Grid container spacing={2}>
          {/* Имя */}
          <Grid item xs={24} md={5} >
            <FormControl fullWidth variant="outlined" required sx={{maxWidth: "100%", borderRadius: "16px"}}>
              <InputLabel  sx={{fontWeight: 400}}>Представьтесь</InputLabel>
              <OutlinedInput
                name="name"
                value={formData.name}
                onChange={handleChange}
                label="Представьтесь *"
              />
            </FormControl>
          </Grid>

          {/* Телефон */}
          <Grid item xs={24} md={4} >
            <FormControl fullWidth variant="outlined" required sx={{maxWidth: "100%", borderRadius: "16px"}}>
              <InputLabel sx={{fontWeight: 400}}>Мобильный телефон</InputLabel>
              <OutlinedInput
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                label="Мобильный телефон *"
              />
            </FormControl>
          </Grid>

          {/* Размер бокса */}
          <Grid item xs={24} md={3}  >
            <FormControl fullWidth variant="outlined" sx={{maxWidth: "100%", borderRadius: "16px"}}>
              <InputLabel sx={{fontWeight: 400}}>Размер бокса</InputLabel>
              <StyledSelect
                name="size"
                value={formData.size}
                onChange={handleChange}
                label="Размер бокса"
                input={<OutlinedInput label="Размер бокса" />}
              >
                {sizes.map((size) => (
                  <MenuItem key={size.value} value={size.value}>
                    {size.label}
                  </MenuItem>
                ))}
              </StyledSelect>
            </FormControl>
          </Grid>

          {/* Дополнительные пожелания */}
          <Grid item xs={24} md={9} >
            <FormControl fullWidth variant="outlined" sx={{maxWidth: "100%", borderRadius: "16px"}}>
              <InputLabel sx={{fontWeight: 400}}>Дополнительные пожелания</InputLabel>
              <OutlinedInput
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                label="Дополнительные пожелания"
              />
            </FormControl>
          </Grid>

          {/* Кнопка отправки */}
          <Grid item xs={24} md={3} >
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              size="large"
              sx={{
                color: "rgb(255, 255, 255)",
                backgroundColor: "#e31e24",
                width: "100%",
                minHeight: "56px",
                borderRadius: "18px",
                textTransform: "none",
                fontWeight: 500,
                padding: "6px 16px",
                fontSize: "1.125rem"
              }}
            >
              Отправить
            </Button>
          </Grid>

          {/* Соглашение */}
          <Grid item xs={24}>
            <FormControlLabel
              control={
                <Checkbox
                  name="agreed"
                  checked={formData.agreed}
                  onChange={(e) => setFormData({...formData, agreed: e.target.checked})}
                  color="primary"
                />
              }
              label={
                <Typography variant="body2">
                  Нажимая кнопку «Отправить», я даю свое согласие на обработку 
                  моих персональных данных, в соответствии с Федеральным законом 
                  от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях 
                  и для целей, определенных в{' '}
                  <Link 
                    href="/politika-konfidencialnosti" 
                    target="_blank"
                    underline="none"
                    sx={{color: "#e31e24"}}
                  >
                    политике обработке персональных данных
                  </Link>
                </Typography>
              }
            />
          </Grid>
        </Grid>
      </form>
    </Grid>
      
    </Grid>
  );
};

export default CalculationForm;
