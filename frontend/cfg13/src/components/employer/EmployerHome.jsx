import React from "react";
import JobCandidates from "./jobCandidates";
import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../navBars/employerNavbar";

const EmployerHome = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default EmployerHome;
