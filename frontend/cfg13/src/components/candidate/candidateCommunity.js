import React from 'react';
import { Link } from 'react-router-dom';

const rooms = ['React', 'Node.js', 'Data Science', 'Machine Learning', 'UI/UX Design'];

function CandidateCommunity() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Roboto, sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Candidate: Join a Community!</h2>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {rooms.map((room) => (
          <Link key={room} to={`candidate/community/${room}`} style={{ textDecoration: 'none' }}>
            <div style={{
              padding: '20px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s',
              width: '200px',         // Set fixed width
              height: '150px',        // Set fixed height to ensure uniform size
              textAlign: 'center',
              display: 'flex',        // Center content both horizontally and vertically
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f1f1'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'}>
              <h3>{room} Room</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CandidateCommunity;