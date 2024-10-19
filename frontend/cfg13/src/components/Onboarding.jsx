import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EmployeeOnboarding from '../forms/EmployeeOnboarding'
import EmployerOnboarding from '../forms/EmployerOnboarding'

const Onboarding = () => {
  return (
    <Routes>
            <Route path="employer" element={<EmployerOnboarding />} />
            <Route path="employee" element={<EmployeeOnboarding />} />
    </Routes>
  )
}

export default Onboarding