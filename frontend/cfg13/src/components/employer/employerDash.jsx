import React, { useEffect, useState } from 'react';
import { Building2, MapPin, DollarSign, Users } from 'lucide-react';
import React, { useEffect, useState } from "react";
import Navbar from "../navBars/employerNavbar";
import Jobs from "./jobs";

const EmployerDash = () => {
  const [employer, setEmployer] = useState(null);
  const [jobs, setJobs] = useState([]);

  // synthetic employer data
  const syntheticEmployer = {
    id: 67890,
    name: "J.P. Morgan Chase & Co.",
    industry: "Technology",
  };

  // synthetic job postings data
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
    const fetchData = async () => {
      try {
        const employerResponse = await fetch('http://localhost:4000/api/getEmployerById/67890');
        const employerData = await employerResponse.json();
        setEmployer(employerData);

        if (employerData?.id) {
          const jobsResponse = await fetch(`http://localhost:4000/api/getAllEmployerJobPostings/${employerData.id}`);
          const jobsData = await jobsResponse.json();
          setJobs(jobsData);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
            {employer?.name} Dashboard
          </h1>
          <p className="text-gray-500 text-center">Open Job Roles</p>
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
                      <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="h-5 w-5 mr-2 text-gray-400" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Building2 className="h-5 w-5 mr-2 text-gray-400" />
                      <span>{job.department}</span>
                    </div>
                    <div className="pt-4">
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
                        View Details
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full">
              <div className="text-center py-12">
                <Users className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">No job postings</h3>
                <p className="mt-1 text-gray-500">Get started by creating a new job posting.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployerDash;