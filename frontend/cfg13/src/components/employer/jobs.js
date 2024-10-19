import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Jobs({ jobs }) {
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();

  const handleJobClick = (job) => {
    setSelectedJob(job);
    navigate(`/employer/jobCandidates/${job.job_id}`);  
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Your Job Postings</h2>
      <Link to="jobCandidates"></Link>
      <div className='bg-gray-100' style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {jobs?.map((job) => (
          <div
            key={job.job_id}
            style={{
              width: '300px',
              padding: '20px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f1f1'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'}
            onClick={() => handleJobClick(job)} 
          >
            <h3 style={{ margin: '0 0 10px 0', color: '#007BFF' }}>{job.title}</h3>
            <p style={{ margin: '5px 0' }}><strong>Location:</strong> {job.location}</p>
            <p style={{ margin: '5px 0' }}>
              <strong>Salary:</strong> {`${job.salary.min} - ${job.salary.max} ${job.salary.currency} (${job.salary.type})`}
            </p>
            <p style={{ margin: '5px 0' }}><strong>Start Date:</strong> {job.start_date}</p>
            <p style={{ margin: '5px 0' }}><strong>End Date:</strong> {job.end_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;