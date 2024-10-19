import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navBars/candidateNavBar'


const EmployerHome = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default EmployerHome