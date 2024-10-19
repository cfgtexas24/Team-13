import { connectToDB } from "../mongoose.js";
import { Employer } from "../models/Employer.model.js";

async function createEmployer(employer) {
    try {
        console.log('connecting to db...');
        await connectToDB();
        console.log('checking if email already exists...');
        
        const existingEmployer = await Employer.findOne({ email: employer.email });
        
        if (existingEmployer) {
            console.log('employer with this email already exists');
            return { error: 'Email already exists', code: 'EMAIL_EXISTS' };
        }
        
        console.log('creating employer...');
        const newEmployer = await Employer.create(employer);
        console.log('employer created:', newEmployer);
        return { success: true, employer: newEmployer };
    } catch (error) {
        console.error('error creating employer:', error);
        return { error: 'Failed to create employer', code: 'CREATE_FAILED' };
    }
}

async function getEmployerById(id) {
    try {
        console.log('connecting to db...');
        await connectToDB();
        console.log('fetching employer...');
        const employer = await Employer.findById(id);
        console.log('employer:', employer);
        return { success: true, employer };
    } catch (error) {
        console.error('error fetching employer:', error);
        return { error: 'Failed to fetch employer', code: 'FETCH_FAILED' };
    }
}

async function getAllEmployerJobPostings(employerId) {
    try {
        console.log('connecting to db...');
        await connectToDB();
        console.log('fetching jobs...');
        const jobs = await Job.find({ employer: employerId });
        console.log('jobs:', jobs);
        return { success: true, jobs };
    } catch (error) {
        console.error('error fetching jobs:', error);
        return { error: 'Failed to fetch jobs', code: 'FETCH_FAILED' };
    }
}

export { createEmployer, getEmployerById, getAllEmployerJobPostings };