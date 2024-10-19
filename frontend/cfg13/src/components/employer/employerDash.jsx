import React, { useEffect, useState } from 'react';
import Navbar from '../navBars/employerNavbar';
import { Link } from 'react-router-dom';

const EmployerDash = () => {
  const [employer, setEmployer] = useState(null);
  const [jobs, setJobs] = useState([]);

  // Synthetic employer data
  const syntheticEmployer = {
    id: 67890,
    name: "TechWave Solutions",
    industry: "Technology",
  };

  // Synthetic job postings data
  const syntheticJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "San Francisco, CA",
      description: "Develop, test, and maintain software applications. Collaborate with cross-functional teams to deliver high-quality software solutions.",
      salary: "$110,000 - $130,000",
      department: "Engineering"
    },
    {
      id: 2,
      title: "Product Manager",
      location: "New York, NY",
      description: "Lead the product development lifecycle from concept to launch. Work closely with engineering, design, and marketing teams to create user-centric products.",
      salary: "$120,000 - $140,000",
      department: "Product Management"
    },
    {
      id: 3,
      title: "Data Scientist",
      location: "Austin, TX",
      description: "Analyze complex data sets to discover patterns and insights. Develop machine learning models to improve product features and performance.",
      salary: "$100,000 - $120,000",
      department: "Data Science"
    },
    {
      id: 4,
      title: "Marketing Specialist",
      location: "Los Angeles, CA",
      description: "Create and execute marketing campaigns to increase brand awareness. Develop content strategies and manage social media platforms.",
      salary: "$70,000 - $90,000",
      department: "Marketing"
    },
    {
      id: 5,
      title: "Customer Support Representative",
      location: "Remote",
      description: "Provide exceptional customer service through various channels including email, chat, and phone. Resolve customer inquiries and issues efficiently.",
      salary: "$45,000 - $55,000",
      department: "Customer Support"
    }
  ];

  useEffect(() => {
    // Simulate fetching synthetic data
    const fetchData = async () => {
      try {
        // Set synthetic employer data
        setEmployer(syntheticEmployer);

        // Set synthetic jobs data
        setJobs(syntheticJobs);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <div style={{ padding: '20px' }}>
        <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>
          {employer?.name} Dashboard
        </h2>
        <h3 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Open Job Roles</h3>

        {/* Cards Layout with Flexbox */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <Link
                to="jobCandidates"
                key={job.id}
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
                  <h3 style={{ margin: '0 0 10px 0', color: '#007BFF' }}>{job.title}</h3>
                  <p style={{ margin: '5px 0' }}><strong>Location:</strong> {job.location}</p>
                  <p style={{ margin: '5px 0' }}><strong>Salary:</strong> {job.salary}</p>
                  <p style={{ margin: '10px 0', fontStyle: 'italic', color: '#555' }}>
                    <strong>Department:</strong> {job.department}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p style={{ textAlign: 'center' }}>No job postings available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployerDash;
