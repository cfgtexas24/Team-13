import React from "react";
import "./App.css";
import Onboarding from "./components/Onboarding";

import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import Layout from "./components/layout";
import Home from "./components/home";
import Profile from "./components/profile";
import Jobs from "./components/employer/jobs";
import NoMatch from "./components/noMatch";
import ProfileReturn from "./components/profileReturn";

import EmployeeOnboarding from "./forms/EmployeeOnboarding";
import EmployerOnboarding from "./forms/EmployerOnboarding";
import CreateJobPage from "./components/employer/createJobPage";

import RolesJobs from "./components/candidates/RolesRoadmaps";
import EmployerHome from "./components/employer/EmployerHome";
import EmployerDash from "./components/employer/employerDash";

import EmployeeDash from "./components/candidate/EmployeeDash";
import EmployeeHome from "./components/candidate/EmployeeHome";
import JobCandidates from "./components/employer/jobCandidates";
import Feedback from "./components/employer/feedback";
import UserRoadmap from "./components/candidate/userRoadmap";

function App() {
  return (
    <div>
      <Routes>
        x
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="onboarding" element={<Onboarding />}>
            <Route path="candidate" element={<EmployeeOnboarding />} />
            <Route path="employer" element={<EmployerOnboarding />} />
          </Route>

          <Route path="employer" element={<EmployerHome />}>
            <Route index element={<EmployerDash />} />
            <Route path="jobCandidates" element={<JobCandidates />} />
            <Route path="feedbackForm" element={<Feedback />} />
            <Route path="createJobPage" element={<CreateJobPage />} />
          </Route>

          <Route path="candidate" element={<EmployeeHome />}>
            <Route index element={<EmployeeDash />} />
            <Route path="jobs" element={<Jobs />} />
          </Route>

          <Route path="profile" element={<Profile />} />
          <Route path="profileReturn" element={<ProfileReturn />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="employerJobApplicants" element={<JobCandidates />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
