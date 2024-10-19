import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CandJobs() {
  // Sample job application data with synthetic data
  const [applications] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechWave Solutions",
      salary: "$85,000 - $95,000",
      location: "Plano, TX",
      url: "https://www.techwave.com",
      percentMatch: 85,
      roadmap: "Frontend Roadmap",
      description: "As a Frontend Developer, you will be responsible for implementing visual elements that users engage with in a web application. You will work closely with our UI/UX team to bridge the gap between design and technical implementation."
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "NextGen Innovators",
      salary: "$90,000 - $105,000",
      location: "Austin, TX",
      url: "https://www.nextgeninnovators.com",
      percentMatch: 90,
      roadmap: "Backend Roadmap",
      description: "We are looking for a Backend Developer to manage the interchange of data between the server and the users. Your primary focus will be developing all server-side logic, ensuring high performance and responsiveness to requests from the frontend."
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "InnoTech Labs",
      salary: "$100,000 - $120,000",
      location: "Dallas, TX",
      url: "https://www.innotechlabs.com",
      percentMatch: 75,
      roadmap: "Full Stack Roadmap",
      description: "Join our dynamic team as a Full Stack Developer! You will work on both frontend and backend to build cutting-edge applications. Experience with modern JavaScript frameworks and cloud services is highly preferred."
    }
  ]);

  // State to track the selected job posting
  const [selectedJob] = useState(null);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Job Postings</h2>

      {/* Cards Layout with Flexbox */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* Sort applications by percentMatch in descending order */}
        {applications
          .sort((a, b) => b.percentMatch - a.percentMatch)
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
                <p style={{ margin: '5px 0' }}><strong>Salary:</strong> {app.salary}</p>
                <p style={{ margin: '5px 0' }}><strong>Percent Match:</strong> {app.percentMatch}%</p>
                <p style={{ margin: '10px 0', fontStyle: 'italic', color: '#555' }}>
                  <strong>Roadmap:</strong> {app.roadmap}
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

export default CandJobs;
