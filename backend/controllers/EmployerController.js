import express from 'express';
import fs from 'fs/promises';  
import path from 'path';
import { fileURLToPath } from 'url';

// loads data from JSON file
async function loadData() {
    const dataPath = '../json_responses/employerList.json';
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
        const data = await loadData(); 
        const employerId = parseInt(req.params.id);
        const employer = data.find(item => item.employer.id === employerId);
        if (!employer) {
          return res.status(404).json({ message: `Employer with ID ${employerId} not found` });
        }
        res.json(employer['employer']['profile']);
      } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
      }
}

export const getAllEmployerJobPostings = async (req, res) => {
    try {
        const data = await loadData(); 
        const employerId = parseInt(req.params.id);
        const employer = data.find(item => item.employer.id === employerId);
        if (!employer) {
          return res.status(404).json({ message: `Employer with ID ${employerId} not found` });
        }
        res.json(employer['employer']['jobs']);
      } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
      }
}