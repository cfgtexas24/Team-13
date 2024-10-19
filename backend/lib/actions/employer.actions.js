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

export { createEmployer };