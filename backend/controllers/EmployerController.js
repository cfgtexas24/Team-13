import fs from 'fs/promises';  
import {createEmployer} from '../lib/actions/employer.actions.js';
// const Employer = require('../lib/models/Employer.model')
// import Employer from '../lib/models/Employer.model'

// test function for db
export const createEmployerTest = async (req, res) => {
    try {
        console.log('createEmployerTest');
        const employer = await createEmployer({
            id: "12345",
          name: "John Doe",
          location: "New York",
          industry: "Tech",
          description: "We are a tech company",
          targetedSkills: ["JavaScript", "React", "Node.js"],
        });
        console.log('employer:', employer);
        return res.status(200).json(employer);
      } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
      }
}


// loads employer list data from JSON file
async function loadEmployerList() {
    const dataPath = '../json_responses/employerList.json';
    try {
      const jsonData = await fs.readFile(dataPath, 'utf8');
      return JSON.parse(jsonData);
    } catch (error) {
      console.error('Error reading or parsing JSON file:', error);
      throw new Error('Failed to load data');
    }
}

// loads potential candidates data from JSON file
async function loadPotentialCandidates() {
    const dataPath = '../json_responses/potentialCandidates.json';
    try {
      const jsonData = await fs.readFile(dataPath, 'utf8');
      return JSON.parse(jsonData);
    } catch (error) {
      console.error('Error reading or parsing JSON file:', error);
      throw new Error('Failed to load data');
    }
}

// loads job data from JSON file
async function loadJobData() {
    const dataPath = '../json_responses/job_list.json';
    try {
      const jsonData = await fs.readFile(dataPath, 'utf8');
      return JSON.parse(jsonData);
    }
    catch (error) {
      console.error('Error reading or parsing JSON file:', error);
      throw new Error('Failed to load data');
    }
}

export const getEmployerById = async (req, res) => {
    try {
        const data = await loadEmployerList(); 
        const employerId = parseInt(req.params.id);
        const employer = data.find(item => item.employer.id === employerId);
        if (!employer) {
          return res.status(404).json({ message: `Employer with ID ${employerId} not found` });
        }
        res.status(200).json(employer['employer']['profile']);
      } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
      }
}

export const getAllEmployerJobPostings = async (req, res) => {
    try {
        const data = await loadEmployerList(); 
        const employerId = parseInt(req.params.id);
        const employer = data.find(item => item.employer.id === employerId);
        if (!employer) {
          return res.status(404).json({ message: `Employer with ID ${employerId} not found` });
        }
        res.status(200).json(employer['employer']['jobs']);
      } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
      }
}

export const createJobPosting = async (req, res) => {
    try {
        // extract job data from request body, potentially use this 
        // to popualte a database with the job posting
        const { jobName, company, location, salary, description } = req.body;
        

        // package data back up and send it back to the client
        const response = {
          jobName,
          company,
          location,
          salary,
          description,
          message: "Job data successfully received and packaged."
        };
    
        res.status(200).json(response);
      } catch (error) {
        res.status(400).json({ message: 'Invalid request body', error: error.message });
      }
}

export const getPotentialCandidates = async (req, res) => {
    try {
        const data = await loadPotentialCandidates(); 
        res.status(200).json(data);
      } catch (error) { 
        res.status(500).json({ message: 'Internal Server Error getPotentialCandidates' });
    }
}

// get job candidates based on % match with job posting
export const getCandidateMatches = async (req, res) => {
  try {
    const candidatesData = await loadPotentialCandidates();  // Load candidates data
    const jobsData = await loadJobData(); // Load jobs data

    const jobId = parseInt(req.params.id, 10);  // Parse the job ID from request params
    
    // Find the job by ID in the jobs data
    const selectedJob = jobsData.jobs.find(job => job.id === jobId);
    
    if (!selectedJob) {
      return res.status(404).json({ message: `Job with ID ${jobId} not found` });
    }

    const requiredSkills = selectedJob.skills;
    const requiredCertifications = selectedJob.certifications.map(cert => cert.name);

    // Filter candidates that match at least 80% of the required skills and certifications
    const matchingCandidates = candidatesData.filter(candidate => {
      const candidateSkills = candidate.employee.skills;
      const candidateCertifications = candidate.employee.certifications.map(cert => cert.name);

      // Calculate the number of matching skills
      const matchingSkillsCount = requiredSkills.filter(skill => candidateSkills.includes(skill)).length;

      // Calculate the number of matching certifications
      const matchingCertificationsCount = requiredCertifications.filter(cert => candidateCertifications.includes(cert)).length;

      // Total requirements (skills + certifications)
      const totalRequired = requiredSkills.length + requiredCertifications.length;

      // Total matched (skills + certifications)
      const totalMatched = matchingSkillsCount + matchingCertificationsCount;

      // Calculate match percentage
      const matchPercentage = (totalMatched / totalRequired) * 100;

      return matchPercentage >= 80;  // Only return candidates with 80% or more match
    });

    if (matchingCandidates.length === 0) {
      return res.status(200).json({ message: "No candidates match 80% or more of the job requirements" });
    }

    res.status(200).json(matchingCandidates);
    
  } catch (error) {
    console.error('Error in getCandidateMatches:', error);
    res.status(500).json({ message: 'Internal Server Error in getCandidateMatches' });
  }
};