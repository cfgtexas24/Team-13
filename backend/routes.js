import express from 'express';
import { createApplication, getEmployeeById, getApplicationById, getAllApplications, getPotentialJobs, getAllJobPostings } from './controllers/EmployeeController.js';
import { getEmployerById, getAllEmployerJobPostings, createJobPosting, getPotentialCandidates, getCandidateMatches, createEmployerRoute, getApplicants } from './controllers/EmployerController.js';

const router = express.Router();

// Employee routes
router.get('/getEmployeeById/:id/', getEmployeeById);
router.get('/getApplicationById/:employeeId/:applicationId', getApplicationById);
router.get('/getAllApplications/:id', getAllApplications);
router.get('/createApplication', createApplication)
router.get('/getPotentialJobs/:id', getPotentialJobs);
router.get('/getAllJobPostings', getAllJobPostings);

// Employer routes
router.get('/getEmployerById/:id', getEmployerById);
router.get('/getAllEmployerJobPostings/:id', getAllEmployerJobPostings);
router.get('/createJobPosting', createJobPosting);
router.get('/getPotentialCandidates', getPotentialCandidates);
router.get('/getCandidateMatches/:id', getCandidateMatches);
router.post('/createEmployer', createEmployerRoute);
router.get('/getApplicants/:id', getApplicants);

export default router;