import express from 'express';
import { createApplication, getEmployeeById, getApplicationById, getAllApplications } from './controllers/EmployeeController.js';

const router = express.Router();

router.get('/getEmployeeById/:id', getEmployeeById);
router.get('/getApplicationById/:employeeId/:applicationId', getApplicationById);
router.get('/getAllApplications/:id', getAllApplications);
router.get('/createApplication', createApplication)

export default router;