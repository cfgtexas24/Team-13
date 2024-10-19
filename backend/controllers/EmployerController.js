import express from 'express';
import fs from 'fs/promises';  


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
        res.status(500).json({ message: 'Internal Server Error' });
    }
}