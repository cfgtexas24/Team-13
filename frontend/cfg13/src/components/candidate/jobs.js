import React, { useEffect, useState } from 'react';
import { Building2, MapPin, DollarSign, Users, Star } from 'lucide-react';

const CandJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/getAllJobPostings');
        const data = await response.json();
        setJobs(data.sort((a, b) => b.percentMatch - a.percentMatch));
      } catch (error) {
        console.error('Error fetching job postings:', error);
        setJobs([]);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
            Job Postings Dashboard
          </h1>
          <p className="text-gray-500 text-center">Available Job Opportunities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div 
                key={job.id}
                className="group bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-600 group-hover:text-blue-700 mb-4">
                    {job.title}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-600">
                      <Building2 className="h-5 w-5 mr-2 text-gray-400" />
                      <span>{job.company}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="h-5 w-5 mr-2 text-gray-400" />
                      <span>${job.salary.min} - ${job.salary.max}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Star className="h-5 w-5 mr-2 text-yellow-400" />
                      <span>{job.percentMatch}% Match</span>
                    </div>
                    <div className="pt-4">
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors duration-300"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full">
              <div className="text-center py-12">
                <Users className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">No job postings available</h3>
                <p className="mt-1 text-gray-500">Check back later for new opportunities.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CandJobs;