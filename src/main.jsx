import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import './index.css';
import App from './App.jsx';
import News from './Blog/News.jsx';

const theme = createTheme(); // Создаём тему
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);

window.addEventListener('error', (event) => {
  console.error('Error caught:', event.error);
});
