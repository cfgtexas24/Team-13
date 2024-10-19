import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CandJobs() {
  // State to store fetched job postings
  const [applications, setApplications] = useState([]);

  // Fetch job postings from the API when the component mounts
  useEffect(() => {
    fetch('http://localhost:4000/api/getAllJobPostings')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setApplications(data); // Update the state with the fetched data
      })
      .catch((error) => {
        console.error('Error fetching job postings:', error);
        setApplications([]); // Fallback to an empty array in case of an error
      });
  }, []); // Empty dependency array means this will run once when the component mounts

  // State to track the selected job posting
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <h1 style={{ fontSize: "36px", textAlign: "center", marginBottom: "40px" }}>
          Job Posting
      </h1>

      {/* Cards Layout with Flexbox */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* Sort applications by percentMatch in descending order */}
        {applications.length > 0 ? (
          applications
            .sort((a, b) => b.percentMatch - a.percentMatch) // Sort by percentMatch in descending order
            .map((app) => (
              <Link
                to="applyJob"
                key={app.id}
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                <div
                  style={{
                    width: '300px',
                    padding: '20px',
                    border: '1px solid #ddd',
                    borderRadius: '12px',
                    backgroundColor: '#fff',
                    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    textAlign: 'center',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <h3 style={{ margin: '0 0 10px 0', color: '#007BFF' }}>{app.title}</h3>
                  <p style={{ margin: '5px 0' }}><strong>Company:</strong> {app.company}</p>
                  <p style={{ margin: '5px 0' }}><strong>Location:</strong> {app.location}</p>
                  <p style={{ margin: '5px 0' }}><strong>Salary:</strong> ${app.salary.min} - ${app.salary.max}</p>
                  <p style={{ margin: '5px 0' }}><strong>Percent Match:</strong> {app.percentMatch}%</p>
                  <p style={{ margin: '10px 0', fontStyle: 'italic', color: '#555' }}>
                    <strong>Skills:</strong> {app.skills.join(', ')}
                  </p>
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      color: '#007BFF', 
                      textDecoration: 'none', 
                      border: '1px solid #007BFF', 
                      padding: '8px 12px', 
                      borderRadius: '8px', 
                      display: 'inline-block', 
                      transition: 'background-color 0.3s, color 0.3s' 
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#007BFF';
                      e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#fff';
                      e.currentTarget.style.color = '#007BFF';
                    }}
                  >
                    View Job Posting
                  </a>
                </div>
              </Link>
            ))
        ) : (
          <p>No job postings available.</p>
        )}
      </div>

      {/* Job Details Section */}
      {selectedJob && (
        <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
          <h3>Job Details</h3>
          <p><strong>Job Title:</strong> {selectedJob.title}</p>
          <p><strong>Company:</strong> {selectedJob.company}</p>
          <p><strong>Location:</strong> {selectedJob.location}</p>
          <p><strong>Salary:</strong> {selectedJob.salary.min} - {selectedJob.salary.max}</p>
          <p><strong>Skills:</strong> {selectedJob.skills.join(', ')}</p>
          <a href={selectedJob.url} target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF' }}>
            View Job Posting
          </a>
        </div>
      )}
    </div>
  );
}

export default CandJobs;