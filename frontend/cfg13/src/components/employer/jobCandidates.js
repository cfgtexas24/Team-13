import React, { useState, useEffect } from 'react';

function JobCandidates() {
  const [appliedCandidates, setAppliedCandidates] = useState([]);
  const [matchedCandidates, setMatchedCandidates] = useState([]);
  const matchedCandidate = {
    id: 82503,
    name: "John Doe",
    location: "Houston, TX",
    skills: ["JavaScript", "React", "CSS", "HTML"],
    certifications: [
      {
        name: "Certified Front-End Developer",
        issued_by: "W3Schools",
        date_issued: "2023-05-10",
      },
      {
        name: "React.js Developer Certification",
        issued_by: "Udemy",
        date_issued: "2022-11-15",
      }
    ],
    matchPercent: 85,
  };
  
  useEffect(() => {
   
    async function fetchAppliedCandidates() {
      try {
        const company = "Slack"; 
        const response = await fetch(`http://localhost:4000/api/getApplicants/${company}`);
        
        if (response.ok) {
          const data = await response.json();
          setAppliedCandidates(data);
        } else {
          console.error('Failed to fetch applied candidates');
        }
      } catch (error) {
        console.error('Error fetching applied candidates:', error);
      }
    }


    async function fetchMatchedCandidates() {
      try {
        const response = await fetch(`http://localhost:4000/api/getCandidateMatches/101`); // assume job ID is 101
        
        if (response.ok) {
          const data = await response.json();
          setMatchedCandidates(data);
        } else {
          console.error('Failed to fetch matched candidates');
        }
      } catch (error) {
        console.error('Error fetching matched candidates:', error);
      }
    }

    fetchAppliedCandidates();
    fetchMatchedCandidates();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', display: 'flex', justifyContent: 'space-between' }}>

      <div style={{ flex: 1, paddingRight: '20px' }}>
        <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Candidates Who Applied</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
          {appliedCandidates.length > 0 ? (
            appliedCandidates.map((candidate, index) => (
              <div
                key={index}
                style={{
                  width: '300px',
                  padding: '20px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  backgroundColor: '#f9f9f9',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'background-color 0.3s',
                  position: 'relative',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f1f1'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'}
              >
                <h3 style={{ margin: '0 0 10px 0', color: '#007BFF' }}>{candidate["Applicant Name"]}</h3>
                <p style={{ margin: '5px 0' }}><strong>Position Applied:</strong> {candidate["Position Applied"]}</p>
                <p style={{ margin: '5px 0' }}><strong>Date of Application:</strong> {candidate["Date of Application"]}</p>
                <p style={{ margin: '5px 0' }}><strong>Status:</strong> {candidate.Status}</p>
                {candidate["Interview Date"] && (
                  <p style={{ margin: '5px 0' }}><strong>Interview Date:</strong> {candidate["Interview Date"]}</p>
                )}
              </div>
            ))
          ) : (
            <p>No candidates found</p>
          )}
        </div>
      </div>

      <div style={{ flex: 1, paddingLeft: '20px' }}>
        <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Matching Candidate</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
          <div
            key={matchedCandidate.id}
            style={{
              width: '300px',
              padding: '20px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s',
              position: 'relative',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f1f1'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'}
          >
            <h3 style={{ margin: '0 0 10px 0', color: '#007BFF' }}>{matchedCandidate.name}</h3>
            <p style={{ margin: '5px 0' }}><strong>Location:</strong> {matchedCandidate.location}</p>
            <p style={{ margin: '5px 0' }}><strong>Skills:</strong> {matchedCandidate.skills.join(', ')}</p>
            <p style={{ margin: '5px 0' }}><strong>Certifications:</strong></p>
            <ul style={{ margin: '5px 0' }}>
              {matchedCandidate.certifications.map((cert, index) => (
                <li key={index}>
                  {cert.name} (Issued by: {cert.issued_by}, Date: {cert.date_issued})
                </li>
              ))}
            </ul>
            <p style={{ margin: '5px 0' }}><strong>Match Percent:</strong> {matchedCandidate.matchPercent}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCandidates;