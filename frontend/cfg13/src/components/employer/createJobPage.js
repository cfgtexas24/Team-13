import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const CreateJobPage = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobs, setJobs] = useState([]);

  const handleAddJob = () => {
    if (jobTitle.trim() && jobDescription.trim()) {
      const newJob = { id: Date.now(), title: jobTitle, description: jobDescription };
      setJobs([newJob, ...jobs]);
      setJobTitle('');
      setJobDescription('');
    }
  };

  const handleDeleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Create Job Roles</h1>

      {/* Form to add new job roles */}
      <div className="mb-6 p-4 bg-white rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Job Title</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="Enter job title"
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Job Description</label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Enter job description"
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            rows="3"
          ></textarea>
        </div>
        <button
          onClick={handleAddJob}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Add Job
        </button>
      </div>

      {/* Display list of job roles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <div key={job.id} className="p-4 bg-white rounded shadow-md relative">
            <h2 className="text-lg font-semibold">{job.title}</h2>
            <p className="text-gray-600 mt-2">{job.description}</p>
            <button
              onClick={() => handleDeleteJob(job.id)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateJobPage;
