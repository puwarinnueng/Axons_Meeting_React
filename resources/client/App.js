import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./page/login/login";
import LoginPage2 from "./page/login/login2";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import MeetingPage from './page/meeting/index'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


export default function App() {
  const [theme, colorMode] = useMode();
  return (
    
    <div className='App'>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<MeetingPage />} />
          <Route path="/loginlocal" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage2 />} />
        </Routes >
      </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}