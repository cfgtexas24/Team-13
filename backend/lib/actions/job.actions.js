import { connectToDB } from "../mongoose.js";
import { Job } from "../models/Job.model.js";

async function createJob(job) {
    try {
        console.log('job:', job);
        console.log('connecting to db...');
        await connectToDB();
        console.log('creating job...');
        const newJob = await Job.create(job);
        console.log('job created:', newJob.employer);
        return { success: true, job: newJob };
    } catch (error) {
        console.error('error creating job:', error);
        return { error: 'Failed to create job', code: 'CREATE_FAILED' };
    }
}

export default createJob;
