import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
//pages
import DashboardPage from './page/dashboard/index'
import LoginPage from "./page/login/login";
import LoginPage2 from "./page/login/login2";
import MeetingPage from "./page/meeting/index";
import TaskPage from "./page/tasks/index";
import GroupPage from "./page/group/index";

export default function App() {
  const [theme, colorMode] = useMode();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<DashboardPage />} />
            <Route path="/login" element={<LoginPage2 />} />
            <Route path="/loginlocal" element={<LoginPage />} />
            <Route path="/meeting" element={<MeetingPage />} />
            <Route path="/tasks" element={<TaskPage />} />
            <Route path="/group" element={<GroupPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
