import React from 'react';
import store from './Redux/redux-store';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';





const theme = createTheme({
  palette: {
    primary: {
      main: localStorage.getItem('color') || '#0072E5'
    }
  }
})

const container = document.getElementById('root')
const root = createRoot(container)

root.render(

  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <App theme={theme}/>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>);

