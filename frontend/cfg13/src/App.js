import React from "react";
import "./App.css";
import Onboarding from "./components/Onboarding"

import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import Layout from './components/layout';
import Home from './components/home';
import Profile from './components/profile';
import Jobs from './components/jobs';
import NoMatch from "./components/noMatch";
import ProfileReturn from "./components/profileReturn";

import EmployeeOnboarding from './forms/EmployeeOnboarding'
import EmployerOnboarding from './forms/EmployerOnboarding'
import EmployerDash from "./components/dashboards/EmployerDash";

const theme = createTheme()
export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="onboarding" element={<Onboarding />}>
            <Route path="employee" element={<EmployeeOnboarding />} />
            <Route path="employer" element={<EmployerOnboarding />} />
          </Route>
          <Route index element={<Home />} />
          <Route path="employer" element={<EmployerDash />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profileReturn" element={<ProfileReturn />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="*" element={<NoMatch />} /> 
        </Route>
      </Routes>
    </div>
    </ThemeProvider>
  );
}