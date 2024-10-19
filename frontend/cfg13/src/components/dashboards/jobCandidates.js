import React, { useState } from 'react';

function CandidatesList() {
  // Sample candidate data
  const [candidates] = useState([
    {
      id: 1,
      candidateID: "ID1",
      percentMatch: 90,
    },
    {
      id: 2,
      candidateID: "ID2",
      percentMatch: 85,
    },
    {
      id: 3,
      candidateID: "ID3",
      percentMatch: 75,
    },
  ]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Candidates List</h2>
      
      {/* Candidates Layout */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
        {candidates
          .sort((a, b) => b.percentMatch - a.percentMatch) // Sort candidates by percent match in descending order
          .map((candidate) => (
            <div
              key={candidate.id}
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
              <h3 style={{ margin: '0 0 10px 0', color: '#007BFF' }}>{candidate.candidateID}</h3>
              <p style={{ margin: '5px 0' }}><strong>Percent Match:</strong> {candidate.percentMatch}%</p>
              <div style={{
                backgroundColor: '#e0e0e0',
                borderRadius: '5px',
                height: '10px',
                width: '100%',
                overflow: 'hidden'
              }}>
                <div style={{
                  height: '100%',
                  width: `${candidate.percentMatch}%`,
                  backgroundColor: candidate.percentMatch > 80 ? '#4caf50' : candidate.percentMatch > 60 ? '#ff9800' : '#f44336',
                  transition: 'width 0.5s ease-in-out'
                }} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CandidatesList;
