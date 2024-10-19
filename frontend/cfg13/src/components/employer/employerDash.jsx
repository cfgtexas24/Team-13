import React from 'react'
import Navbar from '../navBars/employerNavbar'
import Jobs from '../jobs'

const EmployerDash = () => {
  const employer = fetch('http://localhost:4000/api/getEmployerById/67890')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));

  const jobs = fetch('http://localhost:4000/api/getAllEmployerJobPostings/67890')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

  return (
    <div>
        {/* <Jobs/> */}
        {/* have all jobs the employer has posted */}
        <></>
    </div>
  )
}

export default EmployerDash