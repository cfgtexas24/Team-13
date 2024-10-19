import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navBars/employerNavbar'

const EmployerHome = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default EmployerHome