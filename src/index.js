import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';


const theme = createTheme({
  palette: {
    // mode: "light",
    primary: {
      main: "#ffffff",
      light: green[500],
      dark: "#999999",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#000000",
      light: green[500],
      // dark: red[500],  
      contrastText: "#fff",
    },
  },
  typography: {
    htmlFontSize: 16,
    fontSize: 16,
    h4 : {  
      fontSize:"2rem",
      // fontWeight:"bold",
      lineHeight:"1.1",
      fontFamily: "serif",
    },
    h5 : {  
      fontSize:"1.7rem",
      // fontWeight:"bold",
      lineHeight:"1.2",
      fontFamily: "serif",
    },
    h6 : {  
      fontSize:"1.3rem",
      fontFamily: "serif",
      lineHeight:"1.2",
    },
    subtitle1 : {
      fontSize:"1.1rem",
      fontWeight:"bold",
      lineHeight:"1.2",
    },
    subtitle2 : {
      fontSize:"0.8rem",
      fontFamily: "sans-serif",
    },
    button : {
      fontSize:"0.79rem",
      fontFamily: "sans-serif",
    },
    // fontFamily:" "Roboto","Helvetica" "Arial",sans-serif ",
    // h3:20,
  },
});
ReactDOM.render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider >
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
