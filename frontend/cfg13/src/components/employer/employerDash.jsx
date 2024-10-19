import React, { useEffect, useState } from 'react';
import Navbar from '../navBars/employerNavbar';
import Jobs from './jobs';

const EmployerDash = () => {
  const [employer, setEmployer] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const employerResponse = await fetch('http://localhost:4000/api/getEmployerById/67890');
        const employerData = await employerResponse.json();
        setEmployer(employerData);

        if (employerData?.id) {
          const jobsResponse = await fetch(`http://localhost:4000/api/getAllEmployerJobPostings/${employerData.id}`);
          const jobsData = await jobsResponse.json();
          setJobs(jobsData);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Jobs jobs={jobs} />
      {/* have all jobs the employer has posted */}
      <></>
    </div>
  );
};

export default EmployerDash;
