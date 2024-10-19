import express from 'express';
import { getEmployeeById } from './controllers/EmployeeController.js';
import { getEmployerById, getAllEmployerJobPostings, createJobPosting } from './controllers/EmployerController.js';

const router = express.Router();


// Employee routes
router.get('/getEmployeeById/:id', getEmployeeById);


// Employer routes
router.get('/getEmployerById/:id', getEmployerById);
router.get('/getAllEmployerJobPostings/:id', getAllEmployerJobPostings);
router.get('/createJobPosting', createJobPosting);
//router.get('getPotentialCandidates', getPotentialCandidates);
export default router;