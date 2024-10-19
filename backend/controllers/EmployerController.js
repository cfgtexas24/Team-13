import express from 'express';
import fs from 'fs/promises';  
import path from 'path';
import { fileURLToPath } from 'url';

// loads data from JSON file
async function loadData() {
    const dataPath = '../json_responses/employer_full.json';
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
    const employerId = req.params.id;
    res.json(data[employerId]);
    const employerData = data.find(employer => employer.id === employerId);
    if (!employerData) {
        return res.status(404).json({ error: 'Employer not found' });
    }
    res.json(employerData);
    }catch (error) {
        console.error('Error fetching employer data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}