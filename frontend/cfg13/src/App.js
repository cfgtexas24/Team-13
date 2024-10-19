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

import EmployeeOnboarding from './forms/EmployeeOnboarding'
import EmployerOnboarding from './forms/EmployerOnboarding'

const theme = createTheme()
export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <h1>Basic Example</h1>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="onboarding" element={<Onboarding />}>
            {/* This route is a parent route for the nested EmployeeOnboarding
                  and EmployerOnboarding routes. It's a good place to put
                  layout elements like headers that should appear on all
                  onboarding pages. */}
            <Route path="employee" element={<EmployeeOnboarding />} />
            <Route path="employer" element={<EmployerOnboarding />} />
          </Route>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="jobs" element={<Jobs />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
    </ThemeProvider>
  );
}