import fs from 'fs/promises'; 
import createJob from '../lib/actions/job.actions.js'; 

export const createJobRoute = async (req, res) => {
    try {
        console.log('createJob');
        
        // Extract data from request body
        const {
            title,
            location,
            startDate,
            endDate,
            salary,
            description,
            employer
        } = req.body;

        // Create job using data from frontend
        const job = await createJob({
            title,
            location,
            startDate,
            endDate,
            salary,
            description,
            employer
        });

        console.log('job:', job);
        return res.status(201).json(job);
    }
    catch (error) {
        console.error('Error creating job:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};