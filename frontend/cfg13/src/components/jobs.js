import React, { useState } from 'react';

function Jobs() {
  // Sample job application data
  const [applications] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "Fake Company 1",
      salary: "$10000",
      location: "Plano, TX",
      url: "https://www.fakecompany1.com",
      percentMatch: 85
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Fake Company 2",
      salary: "$10000",
      location: "Plano, TX",
      url: "https://www.fakecompany2.com",
      percentMatch: 90
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Fake Company 3",
      salary: "$10000",
      location: "Plano, TX",
      url: "https://www.fakecompany3.com",
      percentMatch: 75
    }
  ]);

  // State to track the selected job posting
  const [selectedJob] = useState(null);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Job Postings</h2>
      
      {/* Cards Layout with Flexbox */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* Sort applications by percentMatch in descending order */}
        {applications
          .sort((a, b) => b.percentMatch - a.percentMatch)
          .map((app) => (
            <div
              key={app.id}
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
            >
              <h3 style={{ margin: '0 0 10px 0', color: '#007BFF' }}>{app.title}</h3>
              <p style={{ margin: '5px 0' }}><strong>Company:</strong> {app.company}</p>
              <p style={{ margin: '5px 0' }}><strong>Location:</strong> {app.location}</p>
              <p style={{ margin: '5px 0' }}><strong>Salary:</strong> {app.salary}</p>
              <p style={{ margin: '5px 0' }}><strong>Percent Match:</strong> {app.percentMatch}%</p>
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#007BFF', textDecoration: 'none' }}
              >
                View Job Posting
              </a>
            </div>
          ))}
      </div>

      {/* Job Details Section */}
      {selectedJob && (
        <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
          <h3>Job Details</h3>
          <p><strong>Job Title:</strong> {selectedJob.title}</p>
          <p><strong>Company:</strong> {selectedJob.company}</p>
          <p><strong>Location:</strong> {selectedJob.location}</p>
          <p><strong>Salary:</strong> {selectedJob.salary}</p>
          <p><strong>Percent Match:</strong> {selectedJob.percentMatch}%</p>
          <a href={selectedJob.url} target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF' }}>
            View Job Posting
          </a>
        </div>
      )}
    </div>
  );
}

export default Jobs;