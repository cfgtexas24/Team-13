import React from "react";
import "./App.css";
import Onboarding from "./components/Onboarding";
import { Routes, Route } from "react-router-dom";
import Layout from './components/layout';
import Home from './components/home';
import Profile from './components/profile';
import Jobs from './components/employer/jobs';
import NoMatch from "./components/noMatch";
import ProfileReturn from "./components/profileReturn";

import EmployeeOnboarding from './forms/EmployeeOnboarding';
import EmployerOnboarding from './forms/EmployerOnboarding';

import EmployerHome from "./components/employer/EmployerHome";
import EmployerDash from "./components/employer/employerDash";

import EmployeeDash from "./components/candidate/EmployeeDash";
import EmployeeHome from "./components/candidate/EmployeeHome";
import JobCandidates from "./components/employer/jobCandidates";
import Feedback from "./components/employer/feedback";
import UserRoadmap from "./components/candidate/userRoadmap";
import EmployerCommunity from "./components/employer/employerCommunity"; 
import EmployerChatRoom from "./components/employer/employerChatroom";  
import CandidateCommunity from "./components/candidate/candidateCommunity"; 
import CandidateChatRoom from "./components/candidate/candidateChatroom";  

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* Onboarding Routes */}
          <Route path="onboarding" element={<Onboarding />}>
            <Route path="employee" element={<EmployeeOnboarding />} />
            <Route path="employer" element={<EmployerOnboarding />} />
          </Route>

          {/* Employer Routes */}
          <Route path="employer" element={<EmployerHome />}>
            <Route index element={<EmployerDash />} />
            <Route path="jobCandidates" element={<JobCandidates />} />
            <Route path="feedbackForm" element={<Feedback />} />
            <Route path="community" element={<EmployerCommunity />} />
            <Route path="community/:room" element={<EmployerChatRoom />} />
          </Route>

          {/* Candidate Routes */}
          <Route path="candidate" element={<EmployeeHome />}>
            <Route index element={<EmployeeDash />} />
            <Route path="userRoadmap" element={<UserRoadmap />} />
            <Route path="community" element={<CandidateCommunity />} />
            <Route path="community/:room" element={<CandidateChatRoom />} />
          </Route>

          {/* Other Common Routes */}
          <Route path="profile" element={<Profile />} />
          <Route path="profileReturn" element={<ProfileReturn />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;