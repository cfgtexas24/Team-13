import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';

const JobCreationForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    startDate: '',
    endDate: '',
    salary: '',
    description: '',
    employer: '6713b1aaddcdc4ebfd3c041f'
  });
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/jobs');
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddJob = async (event) => {
    event.preventDefault();
    console.log('Form data:', formData);
    try {
      const response = await fetch('http://localhost:4000/api/createJob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log('Job created:', data);
      setJobs((prevJobs) => [...prevJobs, data.job]);
      setFormData({
        title: '',
        location: '',
        startDate: '',
        endDate: '',
        salary: '',
        description: '',
        employer: '6713b1aaddcdc4ebfd3c041f'
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDeleteJob = async (id) => {
    try {
      await fetch(`http://localhost:4000/api/jobs/${id}`, {
        method: 'DELETE',
      });
      setJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="mt-10 text-3xl font-extrabold text-gray-900 mb-8 text-center" style={{ fontFamily: "Roboto, sans-serif", fontSize: "30px" }}>
        Create Job Roles
      </h1>
      <div className="bg-white shadow rounded-lg">
        <form className="space-y-6 p-8" onSubmit={handleAddJob}>
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Job Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Job Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.location}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                Start Date
              </label>
              <input
                id="startDate"
                name="startDate"
                type="date"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.startDate}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                End Date
              </label>
              <input
                id="endDate"
                name="endDate"
                type="date"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.endDate}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
                Salary
              </label>
              <input
                id="salary"
                name="salary"
                type="text"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.salary}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Job Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FaPlus className="mr-2" /> Add Job
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8 mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {jobs?.map((job) => (
          <div
            key={job._id}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">{job.title}</h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p><span className="font-medium">Location:</span> {job.location}</p>
                <p><span className="font-medium">Period:</span> {job.startDate} - {job.endDate}</p>
                <p><span className="font-medium">Salary:</span> {job.salary}</p>
                <p className="mt-2">{job.description}</p>
              </div>
            </div>
            <div className="px-4 py-4 sm:px-6">
              <button
                onClick={() => handleDeleteJob(job._id)}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCreationForm;