import React, { useState, useEffect } from 'react';

const mockCandidates = [
  { applicationId: "123", name: "John Doe", matchPercentage: 85 },
  { applicationId: "124", name: "Jane Smith", matchPercentage: 92 },
  { applicationId: "125", name: "Alice Johnson", matchPercentage: 78 },
  { applicationId: "126", name: "Bob Brown", matchPercentage: 88 }
];

const JobCandidates = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const sortedCandidates = mockCandidates.sort((a, b) => b.matchPercentage - a.matchPercentage);
    setCandidates(sortedCandidates);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Candidates for Job</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="w-full bg-gray-200 text-left text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6">Applicant ID</th>
            <th className="py-3 px-6">Name</th>
            <th className="py-3 px-6">Match Percentage</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {candidates.map((candidate, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6">{candidate.applicationId}</td>
              <td className="py-3 px-6">{candidate.name}</td>
              <td className="py-3 px-6">{candidate.matchPercentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobCandidates;
