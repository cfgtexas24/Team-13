import express from 'express';
import { createApplication, getEmployeeById, getApplicationById, getAllApplications } from './controllers/EmployeeController.js';
import { getEmployerById, getAllEmployerJobPostings, createJobPosting, getPotentialCandidates, getCandidateMatches } from './controllers/EmployerController.js';

const router = express.Router();

// Employee routes
router.get('/getEmployeeById/:id/', getEmployeeById);
router.get('/getApplicationById/:employeeId/:applicationId', getApplicationById);
router.get('/getAllApplications/:id', getAllApplications);
router.get('/createApplication', createApplication)

// Employer routes
router.get('/getEmployerById/:id', getEmployerById);
router.get('/getAllEmployerJobPostings/:id', getAllEmployerJobPostings);
router.get('/createJobPosting', createJobPosting);
router.get('/getPotentialCandidates', getPotentialCandidates);
router.get('/getCandidateMatches/:id', getCandidateMatches);
export default router;