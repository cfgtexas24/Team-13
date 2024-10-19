import express from 'express';
import { createApplication, getEmployeeById, getApplicationById, getAllApplications, getPotentialJobs, getAllJobPostings } from './controllers/EmployeeController.js';
import { getEmployerByIdRoute, createJobPosting, getPotentialCandidates, getCandidateMatches, createEmployerRoute, getAllEmployerJobPostingsRoute } from './controllers/EmployerController.js';
import { createJobRoute } from './controllers/JobController.js';

const router = express.Router();

// Employee routes
router.get('/getEmployeeById/:id/', getEmployeeById);
router.get('/getApplicationById/:employeeId/:applicationId', getApplicationById);
router.get('/getAllApplications/:id', getAllApplications);
router.get('/createApplication', createApplication)
router.get('/getPotentialJobs/:id', getPotentialJobs);
router.get('/getAllJobPostings', getAllJobPostings);

// Employer routes
router.get('/getEmployerById/:id', getEmployerByIdRoute);
router.get('/getPotentialCandidates', getPotentialCandidates);
router.get('/getCandidateMatches/:id', getCandidateMatches);
router.post('/createEmployer', createEmployerRoute);
router.get('/getAllEmployerJobPostings/:id', getAllEmployerJobPostingsRoute);

// Job routes
router.post('/createJob', createJobRoute);

export default router;