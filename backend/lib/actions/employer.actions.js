import { connectToDB } from "../mongoose.js";
import {Employer} from "../models/Employer.model.js";

async function createEmployer(employer) {
    console.log('connecting to db...');
    await connectToDB();
    console.log('creating employer...');
    Employer.create(employer).then((employer) => {
        console.log('employer created:', employer);
        return employer;
    }).catch((error) => {
        console.error('error creating employer:', error);
        return null;
    });
}

export { createEmployer };
