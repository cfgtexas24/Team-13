import express from 'express';
import { createApplication, getEmployeeById, getApplicationById, getAllApplications, getPotentialJobs, getAllJobPostings } from './controllers/EmployeeController.js';
import { getEmployerByIdRoute, getAllEmployerJobPostingsRoute } from './controllers/EmployerController.js';
import { createJobRoute } from './controllers/JobController.js';
import { getEmployerById, getAllEmployerJobPostings, createJobPosting, getPotentialCandidates, getCandidateMatches, createEmployerRoute, getApplicants } from './controllers/EmployerController.js';
import { createTextRoute } from './controllers/TextController.js';
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
router.get('/getApplicants/:id', getApplicants);

// Text routes
router.post('/createText', createTextRoute);
router.get('/texts/:room', getTextsRoute);

export default router;