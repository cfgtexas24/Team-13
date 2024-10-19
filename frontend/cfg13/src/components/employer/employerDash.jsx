import React, { useEffect, useState } from 'react';
import Navbar from '../navBars/employerNavbar';
import Jobs from './jobs';

const EmployerDash = () => {
  const [employer, setEmployer] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const employerResponse = await fetch('http://localhost:4000/api/getEmployerById/67138f81fec9af66acc5505a');
        const employerData = await employerResponse.json();
        console.log('Employer:', employerData?.employer?._id);
        setEmployer(employerData);
        // if no jobs, return
        if (!employerData?.employer?.jobs) {
          return;
        }
        const jobsResponse = await fetch(`http://localhost:4000/api/getEmployerJobPostings/${employerData?.employer?._id}`);
        const jobsData = await jobsResponse.json();
        console.log('Jobs:', jobsData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Jobs jobs={jobs} />
      <></>
    </div>
  );
};

export default EmployerDash;
